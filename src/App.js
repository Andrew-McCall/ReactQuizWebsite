import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import QuizPlayer from "./components/QuizPlayer";
import QuizContext from "./components/data/QuizContext";
import QUIZDATA from "./components/data/QuizData";

function App() {
  return (
    <BrowserRouter>
      <QuizContext.Provider value={QUIZDATA}>
        <Routes>
        
          <Route path="/" element={<Home/>}/>
          <Route path="/play/:quiz/:question" element={<QuizPlayer/>}/>
          <Route path="*" element={<h1>Error: 404 Page Not Found</h1>}/>
          
        </Routes>
      </QuizContext.Provider>
    
    
    </BrowserRouter>
  );
}

export default App;
