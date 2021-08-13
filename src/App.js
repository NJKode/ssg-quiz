import { useState } from "react";
import QNA from "./QNA";

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
    <div>
      {questionNum < questionMax && (
        <QNA
          updateAnswer={updateAnswer}
          question={question.questions[questionNum]}
        />
      )}

      {questionNum === questionMax && <div>Final! You have done it!</div>}

      <div>This is what you choose {answerChosen}</div>
    </div>
  );
}

export default App;
