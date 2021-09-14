import React from "react";

function QNA({ updateAnswer, question, questionNum, questionMax }) {
  const options = Object.keys(question.answers);
  const answers = options.map((option) => {
    return (
      <button
        onClick={() => {
          setTimeout(() => updateAnswer(option), 100)
        } }
        key={option}
        className="QA-item button button--secondary"
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
      <div className="QA-question title">{question.questionText}</div>
      <div>{answers}</div>
    </div>
  );
}

export default QNA;
