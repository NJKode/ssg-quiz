import React from "react";

function ProcessBar({ questionNum, questionMax }) {
  return (
    <div className="processbar">
      <div className="processbar-whole"></div>
      <div className="processbar-fill"></div>
    </div>
  );
}

export default ProcessBar;
