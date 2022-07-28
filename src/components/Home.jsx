import { Fragment, useContext } from "react";

import QuizContext from "./data/QuizContext";
import QuizButton from "./QuizButton";

export default () => {

    const QuizData = useContext(QuizContext);

    return(
    <Fragment>
        <h1>Andrew's Quiz React Site</h1>
        <h3>Select a Quiz</h3>
        <div>

            {QuizData.map((q,i) => <QuizButton key={i} id={i} title={q.title} description={q.description} />)}
 
        </div>
    </Fragment>)

}
