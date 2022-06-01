import React from "react";
import "../../../src/styles/player.css";

export default function PlayerElement(props: any) {
  return (
    <div
      className={`player ${
        props.player === props.currentPlayer ? "current-player" : ""
      }`}
    >
      <div> {props.player.name}</div>
      {/* <div> {props.player.id.toString()}</div>
      <div> {"Score: " + props.player.score}</div> */}
    </div>
  );
}
