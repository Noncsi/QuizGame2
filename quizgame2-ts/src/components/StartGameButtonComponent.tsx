import React from "react";

export default function StartGameButtonComponent(props: any) {
  const startGame = () => {
    props.startGame(true);
  };

  return (
    <>
      <button id="start-game-button" onClick={startGame}>
        <div className="start-game-button-background"></div>
        <h3 className="start-game-button-text">START</h3>
      </button>
    </>
  );
}
