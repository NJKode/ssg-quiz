import React from "react";

function ProcessBar({ questionNum, questionMax }) {
  return (
    <div className="processbar">
      <div className="processbar-whole"></div>
      <div
        className="processbar-fill"
        style={{ "--process": (questionNum / questionMax) * 100 + "%" }}
      ></div>
    </div>
  );
}

export default ProcessBar;
