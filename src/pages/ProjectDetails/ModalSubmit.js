import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Typography from '@material-ui/core/Typography';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ModalSubmit(props) {
  const { isModalOpen, setIsModalOpen, handleCloseModal } = props;
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    // A single child can be a child of Modal
    <Modal
      open={isModalOpen}
      onClose={handleCloseModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <Typography variant="h3">
          체험 신청서
        </Typography>
        <form>
          <InputLabel>이름</InputLabel>
          <Input />
          <InputLabel>연락처</InputLabel>
          <Input />
          <InputLabel>기타 요청사항</InputLabel>
          <Input />
          <Button onClick={handleCloseModal}>신청</Button>
        </form>
      </div>
    </Modal>
  );
}

export default ModalSubmit;
