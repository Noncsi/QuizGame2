import React from "react";
import { Question } from "../models/questions/Question";
import DialogComponent from "./DialogComponent";

export default function QuestionTableComponent(props: any) {
  const openQuestion = (questions: Question[]) => {
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    console.log(randomQuestion);
  };

  return (
    <div className="topic">
      <div>{props.topic.name}</div>
      <DialogComponent></DialogComponent>
      <div
        onClick={() => {
          openQuestion(props.topic.level1);
        }}
      >
        ?
      </div>
      <div
        onClick={() => {
          openQuestion(props.topic.level2);
        }}
      >
        ?
      </div>
      <div
        onClick={() => {
          openQuestion(props.topic.level3);
        }}
      >
        ?
      </div>
    </div>
  );
}
