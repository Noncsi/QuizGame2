import { Button, InputBase, Box } from "@mui/material";
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
    if (enteredPlayerName === "") return;
    props.nameSubmitHandler(enteredPlayerName); // calls the function in parent (Game -> addNewPlayerToPlayers)
    setEnteredPlayerName(""); // resets the value in the input
  };

  return (
    <form onSubmit={sendPlayerName}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <InputBase
          color="secondary"
          sx={{ backgroundColor: "white" }}
          value={enteredPlayerName}
          onChange={updateEnteredPlayerName}
          type="text"
        />
        <Button type="submit" variant="contained">
          Add player
        </Button>
      </Box>
    </form>
  );
}
