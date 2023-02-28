import React, { useContext } from "react";
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
import { GameContext } from "../../GameContext";

export default function GameComponent() {
  const gameContext = useContext(GameContext);

  const selectFirstPlayer = () => {
    const firstPlayer = gameContext.game.players[0];
    gameContext.setGame({
      ...gameContext.game,
      currentPlayer: firstPlayer,
    });
  };

  const selectNextPlayer = () => {
    const newPlayerIndex =
      gameContext.game.players.indexOf(gameContext.game.currentPlayer) + 1;
    newPlayerIndex === gameContext.game.players.length
      ? selectFirstPlayer()
      : gameContext.setGame({
          ...gameContext.game,
          currentPlayer: gameContext.game.players[newPlayerIndex],
        });
  };
  return (
    <>
      <NavbarComponent />
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
          <PlayerContainer
            game={gameContext.game}
            setGame={gameContext.setGame}
          />
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
              {gameContext.game.baseQuestions.map((topic: Topic) => (
                <TopicComponent
                  key={topic.title}
                  topic={topic}
                  game={gameContext.game}
                  setGame={gameContext.setGame}
                />
              ))}
            </TableBody>
          </Table>
        </Box>
      </Grid>
    </>
  );
}
