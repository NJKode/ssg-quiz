import { useState } from "react";
import "./App.css";
import QNA from "./component/QNA";
import Header from "./component/Header";

import question from "./data/questions.json";

function App() {
  const questionMax = question.questions.length;
  const [questionNum, setQuestionNum] = useState(0);
  const [answerChosen, setAnswerChosen] = useState("Z");

  function updateAnswer(option) {
    setAnswerChosen(option);
    // Do some calculationg, update the character
    setQuestionNum(questionNum + 1);
  }

  return (
    <div className="app">
      <Header questionNum={questionNum} questionMax={questionMax} />

      {questionNum < questionMax && (
        <QNA
          updateAnswer={updateAnswer}
          question={question.questions[questionNum]}
        />
      )}

      {questionNum === questionMax && <div>Final! You have done it!</div>}
    </div>
  );
}

export default App;
