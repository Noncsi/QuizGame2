import React, { useContext } from "react";
import { AppBar, Button, Toolbar } from "@mui/material";

import LogoComponent from "../components/LogoComponent";
import { GameContext } from "../GameContext";

function NavbarComponent() {
  const gameContext = useContext(GameContext);
  const renderSaveButton = () => {
    gameContext.game.stage === 2 && <Button color="inherit">Save</Button>;
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: "100px",
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: "rgb(0, 0, 0, 0%)",
        boxShadow: "none",
        padding: "20px",
      }}
    >
      <LogoComponent />
      <Toolbar sx={{ justifyContent: "flex-start" }}>
        <Button color="inherit">About</Button>
        <Button color="inherit">Rules</Button>
        {renderSaveButton()}
      </Toolbar>
    </AppBar>
  );
}

export default NavbarComponent;
