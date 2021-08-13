import React from "react";

function QNA({ updateAnswer, question }) {
  const options = Object.keys(question.answers);
  const answers = options.map((option) => {
    return (
      <button onClick={() => updateAnswer(option)} key={option}>
        {question.answers[option].answerText}
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
