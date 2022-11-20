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

import PlayerContainer from "../playerElements/PlayerContainer";
import { Topic as Topic } from "../../models/questions/Topic";
import TopicComponent from "../TopicComponent";
import NavbarComponent from "../NavbarComponent";

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
      <NavbarComponent></NavbarComponent>
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
          <PlayerContainer game={props.game} setGame={props.setGame} />
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
                <TableCell>Topic</TableCell>
                <TableCell>Level 1</TableCell>
                <TableCell>Level 2</TableCell>
                <TableCell>Level 3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.game.baseQuestions.map((topic: Topic) => (
                <TopicComponent
                  key={topic.title}
                  topic={topic}
                  game={props.game}
                  setGame={props.setGame}
                />
              ))}
            </TableBody>
          </Table>
        </Box>
      </Grid>
    </>
  );
}
