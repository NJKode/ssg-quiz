import React from "react";

function Button({ text, func }) {
  return (
    <button className="button button--title-screen button--primary" onClick={func}>
      {text}
    </button>
  );
}

export default Button;
