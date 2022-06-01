import React from "react";
import { useState } from "react";

export default function QuestionElement(props: any) {
  const [question, setQuestion] = useState(props.question);

  const openQuestion = () => {
    setQuestion(props.questionObject.question);
  };

  return (
    <>
      <button onClick={openQuestion}>?</button>
      <h3>{question}</h3>
    </>
  );
}
