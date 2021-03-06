import { useState } from "react";
import "./App.css";
import QNA from "./component/QNA";
import PageModule from "./component/PageModule";
import Button from "./component/Button";
import ProcessBar from "./component/ProcessBar";

import question from "./data/questions.json";
const { calculateFinalScore } = require("./helpers/helpers");

function App() {
  const questionMax = question.questions.length;
  const [questionNum, setQuestionNum] = useState(-1);
  const [userAttributes, setUserAttributes] = useState({});
  const [finalResult, setResult] = useState({});

  function updateAnswer(option) {
    // Update the current user attributes
    const questionAttributes =
      question.questions[questionNum].answers[option].attributes;

    const userAttributesCopy = userAttributes;
    Object.keys(questionAttributes).forEach((attribute) => {
      userAttributesCopy[attribute] = userAttributesCopy.hasOwnProperty(
        attribute
      )
        ? userAttributesCopy[attribute] + questionAttributes[attribute]
        : questionAttributes[attribute];
    });
    setUserAttributes({
      ...userAttributes,
      ...userAttributesCopy,
    });

    // Check if that is the final question, if so, calculate result
    if (questionNum === questionMax - 1) {
      const result = calculateFinalScore(userAttributes);
      setResult(result);
    }

    setQuestionNum(questionNum + 1);
  }

  function getStart() {
    setQuestionNum(0);
  }

  const button = <Button text="Get started" func={getStart} />;

  return (
    <div className="app">
      {questionNum === -1 && (
        <PageModule
          title="Which SSG are you?"
          description='Since the dawn of time, humans have wondered, "Which Static Site Generator do my personality traits most closely resemble?" Today, you will find the answer to that question.'
          buttons={button}
        />
      )}

      {questionNum >= 0 && questionNum < questionMax && (
        <>
          <header>
            <div className="header-title">Which ssg are you?</div>
            <ProcessBar questionNum={questionNum + 1} questionMax={questionMax} />
          </header>

          <QNA
            updateAnswer={updateAnswer}
            question={question.questions[questionNum]}
            questionNum={questionNum}
            questionMax={questionMax}
          />
        </>
      )}

      {questionNum === questionMax && (
        <PageModule
          title={`You're ${finalResult.result}!`}
          description={finalResult.description}
          buttons=""
        />
      )}
    </div>
  );
}

export default App;
