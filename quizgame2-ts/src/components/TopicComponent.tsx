import React from "react";
import { Question } from "../models/questions/Question";
import { TableRow, TableCell } from "@mui/material";
import QuestionElement from "./QuestionElement";
import { Guid } from "guid-typescript";

export default function TopicComponent(props: any) {
  return (
    <TableRow>
      <TableCell sx={{ color: "white" }}>{props.topic.title}</TableCell>
      {props.topic.questionsByLevels.map((questions: Question[]) => {
        return (
          <TableCell key={Guid.create().toString()}>
            <QuestionElement
              questions={questions}
              game={props.game}
              setGame={props.setGame}
            ></QuestionElement>
          </TableCell>
        );
      })}
    </TableRow>
  );
}
