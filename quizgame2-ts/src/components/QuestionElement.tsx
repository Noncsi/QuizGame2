import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { Player } from "../models/Player";
import { Question } from "../models/questions/Question";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function QuestionElement(props: any) {
  const [question, setQuestion] = React.useState(new Question("", ""));
  const [open, setOpen] = React.useState(false);

  const rollQuestion = () => {
    return props.questions[Math.floor(Math.random() * props.questions.length)];
  };

  const handleClickOpen = () => {
    setQuestion(rollQuestion());
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const wrongAnswerHandler = () => {
    handleClose();
  };

  const rightAnswerHandler = () => {
    const cloneOfPlayers = props.game.players;
    cloneOfPlayers.forEach((player: Player) => {
      if (player.id.equals(props.game.currentPlayer.id)) {
        player.score++;
      }
    });
    props.setGame({
      ...props.game,
      players: cloneOfPlayers,
    });

    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        ?
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        sx={{ textAlign: "center" }}
      >
        <DialogTitle sx={{ color: "black" }}>{question.question}</DialogTitle>
        <DialogActions sx={{ color: "black" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ color: "black" }}
            >
              <Typography>Válasz</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "black" }}>{question.answer}</Typography>
            </AccordionDetails>
          </Accordion>
          <Button onClick={wrongAnswerHandler}>Wrong answer</Button>
          <Button onClick={rightAnswerHandler}>Right answer</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
