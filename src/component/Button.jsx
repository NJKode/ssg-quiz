import React from "react";

function Button({ text, func }) {
  return (
    <button className="button" onClick={func}>
      {text}
    </button>
  );
}

export default Button;
