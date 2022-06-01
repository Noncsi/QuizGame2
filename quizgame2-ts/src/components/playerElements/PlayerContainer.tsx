import React from "react";
import { useState } from "react";
import { Player } from "../../models/Player";
import "../../styles/player.css";
import PlayerElement from "./PlayerElement";

export default function PlayerContainer(props: any) {
  const [currentPlayer, setCurrentPlayer] = useState(props.players[0]);

  const selectFirstPlayer = () => {
    const firstPlayer = props.players[0];
    setCurrentPlayer(firstPlayer);
  };

  const selectNextPlayer = () => {
    const newPlayerIndex = props.players.indexOf(currentPlayer) + 1;
    newPlayerIndex === props.players.length
      ? selectFirstPlayer()
      : setCurrentPlayer(props.players[newPlayerIndex]);
  };

  return (
    <>
      <div className="player-container">
        {props.players.map((player: Player, index: number) => (
          <PlayerElement
            player={player}
            key={index}
            // currentPlayer={currentPlayer}
          />
        ))}
      </div>
      {/* <button onClick={selectNextPlayer}>Next player</button> */}
    </>
  );
}
