import React from "react";
import { useState } from "react";

export default function NewPlayerForm(props: any) {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  const updateEnteredPlayerName = (event: any) => {
    // getting the value from the input (onchange: updating from char to char is better than getting htmlElement.value)
    setEnteredPlayerName(event.target.value);
  };

  const sendPlayerName = (event: any) => {
    event.preventDefault(); // prevents an unwanted reloading by default on the page
    if (enteredPlayerName != "") {
      props.nameSubmitHandler(enteredPlayerName); // calls the function in parent (Game -> addNewPlayerToPlayers)
      setEnteredPlayerName(""); // resets the value in the input
    }
  };

  return (
    <form onSubmit={sendPlayerName}>
      <div className="column-container">
        <div className="column">
          <div className="row-container">
            <label className="row">Játékos neve</label>
            <input
              className="row"
              id="new-player-input"
              value={enteredPlayerName}
              onChange={updateEnteredPlayerName}
              type="text"
            />
          </div>
        </div>
        <div className="column">
          <button type="submit" className="add-button">
            Játékos hozzáadása
          </button>
        </div>
      </div>
    </form>
  );
}
