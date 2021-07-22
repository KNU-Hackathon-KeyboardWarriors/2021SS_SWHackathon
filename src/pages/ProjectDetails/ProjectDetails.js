import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

import Comments from "../../components/Comments/Comments";
import ModalSubmit from "./ModalSubmit";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

const comments = {
  data: [
    {
      name: "창윤",
      text: "피자 맛있겠다.",
    },
    {
      name: "태호",
      text: "이건 못참지",
    },
  ],
  num: 2,
};

const ProjectDetails = ({ match }) => {
  const [crntPrj, setCrntPrj] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios.get("/getProjects").then((res) => {
      console.log(res.data.data);
      setCrntPrj(res.data.data[match.params.projectIndex]);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div>{console.log("loading")}Loading...</div>;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Typography variant="h3">{crntPrj.title}</Typography>
        <img src={crntPrj.image} alt="없어용" />
        <Button variant="outlined" color="primary" onClick={()=>setIsModalOpen(true)}>
          신청하기
        </Button>
        <ModalSubmit
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleCloseModal={handleCloseModal}
        />
        <Comments data={comments} />
      </Container>
    </React.Fragment>
  );
};

export default ProjectDetails;
