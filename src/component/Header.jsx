import React from "react";
import ProcessBar from "./ProcessBar";

function Header({ questionNum, questionMax }) {
  return (
    <header>
      <div className="title">Which ssg are you?</div>
      <ProcessBar questionNum={questionNum} questionMax={questionMax} />
    </header>
  );
}

export default Header;
