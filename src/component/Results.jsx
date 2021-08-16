import React, { useEffect, useState } from "react";
import PageModule from "./PageModule";
const { calculateFinalScore } = require("../helpers/helpers");

function Results({ userAttributes }) {
  const [finalResult, setResult] = useState({});
  useEffect(() => {
    const result = calculateFinalScore(userAttributes);
    setResult(result);
  }, []);

  return (
    <PageModule
      pageWidth={window.innerWidth}
      title={`You're ${finalResult.result}!`}
      description={finalResult.description}
      buttons=""
    />
  );
}

export default Results;
