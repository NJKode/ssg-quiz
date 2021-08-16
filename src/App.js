import { useState } from "react";
import "./App.css";
import QNA from "./component/QNA";
import Header from "./component/Header";
import Results from "./component/Results";
import PageModule from "./component/PageModule";
import Button from "./component/Button";

import question from "./data/questions.json";

function App() {
  const questionMax = question.questions.length;
  const [questionNum, setQuestionNum] = useState(-1);
  const [userAttributes, setUserAttributes] = useState({});

  function updateAnswer(option) {
    // Do some calculationg, update the character
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
          pageWidth={window.innerWidth}
          title="Welcome to 'Which ssg are you' test"
          description="There are 20 questions. Let's figure out which ssg are you"
          buttons={button}
        />
      )}

      {questionNum >= 0 && questionNum < questionMax && (
        <>
          <Header questionNum={questionNum} questionMax={questionMax} />
          <QNA
            updateAnswer={updateAnswer}
            question={question.questions[questionNum]}
            questionNum={questionNum}
            questionMax={questionMax}
          />
        </>
      )}

      {questionNum === questionMax && (
        <Results userAttributes={userAttributes} />
      )}
    </div>
  );
}

export default App;
