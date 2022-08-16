import {useParams, Link} from "react-router-dom";
import {useContext, Fragment} from "react";
import QuizContext from "./data/QuizContext";

export default () => {

    let {quiz, question} = useParams()
    const questionNo = parseInt(question)
    const QuizData = useContext(QuizContext)[quiz];
    const currentQuestion = QuizData.questions[questionNo]

    const ainput = (e) => {
        currentQuestion.G = e.target.value
        e.preventDefault()
    }

    const resetG = (e) => {
        QuizData.questions.forEach(q => {q.G = ""})
    }

    if (question < QuizData.questions.length) {
        return(
            <Fragment>
                <h1>{QuizData.title}</h1>
                <h3>{QuizData.description}</h3>
                <form>
                    <h4>Q: {currentQuestion.Q}</h4>
                    <h4>A: <input type="text" onChange={ainput} ></input></h4>
                    {/* <Link to={`/play/${quiz}/${Math.max(question-1,0)}`}><button>Back</button></Link> */}
                    <Link to={`/play/${quiz}/${questionNo+1}`}><button type="submit">Submit</button></Link>
                </form>
            </Fragment>)
    }else{
        let correct = 0;
        QuizData.questions.forEach(q => {
            if (q.G){
                if (q.A === q.G.toLowerCase()){
                    correct+=1;
                }
            }
        });
        return ( 
        <Fragment>
            <h1>{QuizData.title} - Submited</h1>
            <h3>{QuizData.description}</h3>
            <h4>{correct}/{QuizData.questions.length} - {Math.round(correct/QuizData.questions.length*1000)/10}%</h4>
            <Link to={`/`}><button onClick={resetG}>Home</button></Link>
        </Fragment>)
    }

    
}