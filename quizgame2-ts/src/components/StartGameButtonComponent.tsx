import React from "react";
import { Button } from "@mui/material";

export default function StartGameButtonComponent(props: any) {
  return (
    <>
      <Button
        onClick={startGame}
        variant="contained"
        sx={{
          fontFamily: "BeautySchoolDropOut",
          fontSize: "3pc;",
          color: "white",
          borderRadius: "100px",
          height: "120px",
          width: "250px",
        }}
      >
        New Game
      </Button>
    </>
  );
}
