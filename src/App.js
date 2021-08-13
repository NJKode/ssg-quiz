import { useState } from "react";
import QNA from "./QNA";

function App() {
  // Get all data here
  const [questionNum, setQuestionNum] = useState(0);
  const [answerChosen, setAnswerChosen] = useState("Z");

  function updateAnswer(option) {
    setAnswerChosen(option);
  }

  return (
    <div>
      <QNA updateAnswer={updateAnswer} />

      <div>This is what you choose {answerChosen}</div>
    </div>
  );
}

export default App;
