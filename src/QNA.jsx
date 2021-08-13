import React from "react";

function QNA({ updateAnswer, question }) {
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
    <div>
      <div>{question.questionText}</div>
      <div>{answers}</div>
    </div>
  );
}

export default QNA;
