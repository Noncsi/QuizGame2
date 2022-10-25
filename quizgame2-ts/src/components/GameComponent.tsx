import React from "react";
import {
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Button,
} from "@mui/material";

import PlayerContainer from "./playerElements/PlayerContainer";
import { Category } from "../models/questions/Category";
import TopicComponent from "./QuestionTableComponent";

export default function GameComponent(props: any) {
  const selectFirstPlayer = () => {
    const firstPlayer = props.game.players[0];
    props.setGame({
      ...props.game,
      currentPlayer: firstPlayer,
    });
  };

  const selectNextPlayer = () => {
    const newPlayerIndex =
      props.game.players.indexOf(props.game.currentPlayer) + 1;
    newPlayerIndex === props.game.players.length
      ? selectFirstPlayer()
      : props.setGame({
          ...props.game,
          currentPlayer: props.game.players[newPlayerIndex],
        });
  };
  return (
    <>
      <Grid
        container
        columns={12}
        spacing={2}
        justifyContent="center"
        height="100%"
      >
        <Box
          sx={{
            flex: "1 1 33%",
          }}
        >
          <PlayerContainer game={props.game} />
          <Button onClick={selectNextPlayer}>Next</Button>
        </Box>
        <Box
          sx={{
            flex: "3 1 66%",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Level 1</TableCell>
                <TableCell>Level 2</TableCell>
                <TableCell>Level 3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.game.baseQuestions.map((baseQuestion: Category) => (
                <TopicComponent
                  key={baseQuestion.topicTitle}
                  topic={baseQuestion}
                />
              ))}
            </TableBody>
          </Table>
        </Box>
      </Grid>
    </>
  );
}
