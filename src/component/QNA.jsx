import React from "react";

function QNA({ updateAnswer, question, questionNum, questionMax }) {
  const options = Object.keys(question.answers);
  const answers = options.map((option) => {
    return (
      <button
        onClick={() => updateAnswer(option)}
        key={option}
        className="QA-item"
      >
        <div className="QA-item-option">{option}</div>
        <div className="QA-item-answer">
          {question.answers[option].answerText}
        </div>
      </button>
    );
  });

  return (
    <div className="QA">
      <div className="processbar-text">
        Question{" "}
        {questionNum + 1 <= questionMax ? questionNum + 1 : questionMax} of{" "}
        {questionMax}
      </div>
      <div className="QA-question">{question.questionText}</div>
      <div>{answers}</div>
    </div>
  );
}

export default QNA;
