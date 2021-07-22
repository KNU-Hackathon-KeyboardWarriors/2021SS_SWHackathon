import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

import Comments from "../../components/Comments/Comments";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
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

const FindTeamDetails = ({ match }) => {
  const [crntPrj, setCrntPrj] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("/teams").then((res) => {
      console.log(res.data);
      setCrntPrj(res.data[match.params.findteamIndex]);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div>{console.log("loading")}Loading...</div>;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Typography variant="h3">{crntPrj.title}</Typography>
        <img src={crntPrj.image} alt="" />
        <Typography>
          {crntPrj.content}
        </Typography>
        <Comments data={comments} />
      </Container>
    </React.Fragment>
  );
};

export default FindTeamDetails;