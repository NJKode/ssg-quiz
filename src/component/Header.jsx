import React from "react";
import ProcessBar from "./ProcessBar";

function Header({ questionNum, questionMax }) {
  return (
    <header>
      <div className="title">What ssg are you?</div>
      <ProcessBar questionNum={questionNum} questionMax={questionMax} />
      <div className="processbar-text">
        Question{" "}
        {questionNum + 1 <= questionMax ? questionNum + 1 : questionMax} of{" "}
        {questionMax}
      </div>
    </header>
  );
}

export default Header;
