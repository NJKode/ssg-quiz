import React from "react";

function QNA({ updateAnswer }) {
  return (
    <div className="QNA">
      <div className="question">What is your favourite colour?</div>
      <button className="answer" onClick={() => updateAnswer("A")}>
        Flip the turtle!
      </button>
      <button className="answer" onClick={() => updateAnswer("B")}>
        Flip another turtle!
      </button>
    </div>
  );
}

export default QNA;
