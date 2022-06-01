import React from "react";
import { Player } from "../models/Player";

import NewPlayerForm from "./playerElements/NewPlayerForm";
import PlayerContainer from "./playerElements/PlayerContainer";
import StartGameButtonComponent from "./StartGameButtonComponent";

function PreGameComponent(props: any) {
  const addNewPlayerToPlayers = (playerName: string) => {
    if (!props.players.some((player: Player) => player.name === playerName))
      props.setPlayers((prevPlayers: Player[]) => {
        return [new Player(playerName), ...prevPlayers];
      });
  };

  return (
    <>
      <div className="column-container">
        <div id="column-1" className="column">
          <NewPlayerForm nameSubmitHandler={addNewPlayerToPlayers} />
        </div>
        <div id="column-2" className="column">
          <PlayerContainer players={props.players} />
        </div>
        <div id="column-3" className="column">
          <StartGameButtonComponent
            startGame={props.startGame}
          ></StartGameButtonComponent>
        </div>
      </div>
    </>
  );
}

export default PreGameComponent;
