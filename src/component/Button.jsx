import React from "react";

function Button({ text, func }) {
  return (
    <button className="button button--title-screen cc-helper__button--light" onClick={func}>
      {text}
    </button>
  );
}

export default Button;
