import React, { useContext } from "react";
import { AppBar, Box, Button, Modal, Toolbar, Typography } from "@mui/material";

import LogoComponent from "../components/LogoComponent";
import { GameContext } from "../GameContext";

function NavbarComponent() {
  const gameContext = useContext(GameContext);
  const renderSaveButton = () => {
    gameContext.game.stage === 2 && <Button color="inherit">Save</Button>;
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toMainPage = () => {
    gameContext.setGame({
      ...gameContext.game,
      stage: 0,
    });
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: "100px",
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: "rgb(0, 0, 0, 0%)",
        padding: "20px",
      }}
    >
      <Button onClick={toMainPage}>
        <LogoComponent />
      </Button>
      <Toolbar sx={{ justifyContent: "flex-start" }}>
        <Button onClick={handleOpen} color="inherit">
          About
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Created by Noémi Lengyel.
            </Typography>
          </Box>
        </Modal>
        <Button color="inherit">Rules</Button>
        {renderSaveButton()}
      </Toolbar>
    </AppBar>
  );
}

export default NavbarComponent;
