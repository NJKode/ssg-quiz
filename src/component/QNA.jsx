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
        className="qa-item button button--secondary"
      >
        <div className="qa-item-option">{option}</div>
        <div className="qa-item-answer">
          {question.answers[option].answerText}
        </div>
      </button>
    );
  });

  return (
    <div className="qa">
      <div className="processbar-text">
        Question{" "}
        {questionNum + 1 <= questionMax ? questionNum + 1 : questionMax} of{" "}
        {questionMax}
      </div>
      <div className="qa-question cc-helper__h3">{question.questionText}</div>
      <div>{answers}</div>
    </div>
  );
}

export default QNA;
