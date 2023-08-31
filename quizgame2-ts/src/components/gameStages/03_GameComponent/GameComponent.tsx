import React, { useContext, useEffect, useState } from "react";
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

import PlayerContainer from "../../playerElements/PlayerContainer";
import { Topic as Topic } from "../../../models/questions/Topic";
import TopicComponent from "../../TopicComponent";
import NavbarComponent from "../../NavbarComponent";
import { GameContext } from "../../../GameContext";
import SpotifyPlayerComponent from "../../SpotifyComponents/SpotifyPlayerComponent";
import { SongQuestion } from "../../../models/questions/SongQuestion";
import { loadIntoQueue } from "../../../helperFunctions/SpotifyService";
import { take, tap } from "rxjs";

export default function GameComponent() {
  const gameContext = useContext(GameContext);
  const [showSpotifyComponent, setShowSpotifyComponent] = useState(false);
  const [trackArrayStepper, settrackArrayStepper] = useState(0);

  const [is_paused, setPaused] = useState(true);
  const [is_active, setActive] = useState(false);
  const [deviceId, setDeviceId] = useState("");
  const [currentTrack, setCurrentTrack] = useState<SongQuestion>();
  const [player, setPlayer] = useState<Spotify.Player>();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new Spotify.Player({
        name: "Smartini Quizgame",
        getOAuthToken: (cb) => {
          cb(window.localStorage.getItem("token") as string);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        setDeviceId(device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      // player.addListener("player_state_changed", (state) => {
      //   console.log("player state was changed to ", state);
      //   if (!state) {
      //     return;
      //   }

      //   setCurrentTrack(currentTrack);
      //   setPaused(state.paused);

      //   player.getCurrentState().then((state) => {
      //     !state ? setActive(false) : setActive(true);
      //   });
      // });

      player.connect();

      if (!currentTrack) {
        player.disconnect();
      }
    };
  }, []);

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

  const giveMeASong = () => {
    // array is already shuffled
    if (gameContext.game.songQuestions) {
      const song = gameContext.game.songQuestions[trackArrayStepper];
      settrackArrayStepper(trackArrayStepper + 1);
      setCurrentTrack(song);
      console.log("Selected song: ", song.answer);
      setShowSpotifyComponent(true);
      const token = window.localStorage.getItem("token");
      if (token && song) {
        loadIntoQueue(token, song.track.uri, deviceId).subscribe();
      }
    }
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
            textAlign: "center",
          }}
        >
          <PlayerContainer
            game={gameContext.game}
            setGame={gameContext.setGame}
          />
          <Button
            sx={{ backgroundColor: "#59b9ff" }}
            onClick={selectNextPlayer}
          >
            Next
          </Button>
        </Box>
        <Box
          sx={{
            flex: "3 1 66%",
          }}
        >
          <Table sx={{ backgroundColor: "rgba(455, 455, 455, 0.2)" }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Topic</TableCell>
                <TableCell sx={{ color: "white" }}>Level 1</TableCell>
                <TableCell sx={{ color: "white" }}>Level 2</TableCell>
                <TableCell sx={{ color: "white" }}>Level 3</TableCell>
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
          <Button onClick={giveMeASong}>Give me a song!</Button>
          {showSpotifyComponent ? (
            <SpotifyPlayerComponent
              player={player}
              track={currentTrack}
              isPaused={is_paused}
            />
          ) : null}
        </Box>
      </Grid>
    </>
  );
}
