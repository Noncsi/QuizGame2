import React from "react";
import { Question } from "../models/questions/Question";
import DialogComponent from "./DialogComponent";
import { Button, TableRow, TableCell } from "@mui/material";

export default function QuestionTableComponent(props: any) {
  let i = 0;
  const openQuestion = (questions: Question[]) => {
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
  };

  return (
    <TableRow>
      <DialogComponent></DialogComponent>
      <TableCell>{props.topic.topicTitle}</TableCell>
      {props.topic.questionsByLevels.map((level: Question[]) => (
        <TableCell key={i++}>
          <Button
            onClick={() => {
              openQuestion(level);
            }}
          >
            ?
          </Button>
        </TableCell>
      ))}
    </TableRow>
  );
}
