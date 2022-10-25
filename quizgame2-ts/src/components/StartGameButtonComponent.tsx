import React from "react";
import { Button } from "@mui/material";

export default function StartGameButtonComponent(props: any) {
  const startGame = () => {
    props.setGame({
      ...props.game,
      isGameStage: true,
    });
  };

  return (
    <>
      <Button
        onClick={startGame}
        variant="contained"
        sx={{
          boxShadow:
            "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 82px #f400ff, 0 0 92px #f400ff, 0 0 102px #f400ff",
          fontFamily: "BeautySchoolDropOut",
          fontSize: "3pc;",
          background: "transparent",
          color: "white",
          borderRadius: "100px",
          height: "200px",
          width: "200px",
        }}
      >
        Start
      </Button>
    </>
  );
}
