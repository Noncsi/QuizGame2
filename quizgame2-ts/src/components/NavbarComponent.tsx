import React from "react";
import { AppBar, Button, Toolbar } from "@mui/material";

import LogoComponent from "../components/LogoComponent";

function NavbarComponent(props: any) {
  return (
    <AppBar
      position="static"
      sx={{
        height: "200px",
        justifyContent: "flex-start",
        backgroundColor: "rgb(0, 0, 0, 0%)",
        boxShadow: "none",
        padding: "20px",
      }}
    >
      <LogoComponent></LogoComponent>
      <Toolbar sx={{ justifyContent: "flex-start" }}>
        {<Button color="inherit">Rules</Button>}
      </Toolbar>
    </AppBar>
  );
}

export default NavbarComponent;
