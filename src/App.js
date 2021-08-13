import { useState } from "react";
import "./App.css";
import QNA from "./component/QNA";
import Header from "./component/Header";
import Results from './component/Results';

import question from "./data/questions.json";

function App() {
  const questionMax = question.questions.length;
  const [questionNum, setQuestionNum] = useState(0);
  const [userAttributes, setUserAttributes] = useState({})

  function updateAnswer(option) {

    // Do some calculationg, update the character
    const questionAttributes = question.questions[questionNum].answers[option].attributes

    const userAttributesCopy = userAttributes;
    Object.keys(questionAttributes).forEach((attribute) => {
      userAttributesCopy[attribute] = userAttributesCopy.hasOwnProperty(attribute)
      ? userAttributesCopy[attribute] + questionAttributes[attribute]
      : questionAttributes[attribute];
    });
    setUserAttributes({
      ...userAttributes,
      ...userAttributesCopy })


    setQuestionNum(questionNum + 1);
  }

  return (
    <div className="app">
      <Header questionNum={questionNum} questionMax={questionMax} />

      {questionNum < questionMax && (
        <QNA
          updateAnswer={updateAnswer}
          question={question.questions[questionNum]}
        />
      )}

      {questionNum === questionMax && <Results
        userAttributes={userAttributes}
      />}
    </div>
  );
}

export default App;
