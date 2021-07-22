import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Copyright from "../../components/copyright/Copyright";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
// import CardMedia from '@material-ui/core/CardMedia';

const ProjectDetails = ({ match }) => {
  const [crntPrj, setCrntPrj] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(match.params);
    axios.get("/getProjects").then((res) => {
      console.log(res.data.data);
      setCrntPrj(res.data.data[match.params.projectIndex]);
      setIsLoading(false);
    });
  }, []);

  const comments = [
    {
      name: "창윤",
      text: "피자 맛있겠다.",
    },
    {
      name: "태호",
      text: "이건 못참지",
    },
  ];
  const comments_num = useRef(2);

  const comments_view = comments.map((comment) => {
    return (
      <TableRow>
        <TableCell>{comment.name}</TableCell>
        <TableCell>{comment.text}</TableCell>
      </TableRow>
    );
  });

  if (isLoading) return <div>{console.log("loading")}Loading...</div>;

  return (
    <div>
      <div>
        <Typography variant="h3">
          {console.log("render")}
          {console.log(crntPrj)}
          {crntPrj.title}
        </Typography>
        <img src={crntPrj.image} alt="없어용" />
      </div>

      {/* comments */}
      <div>댓글 {comments_num.current}개</div>
      <hr />
      <Table>
        <TableBody>{comments_view}</TableBody>
      </Table>
      <Copyright />
    </div>
  );
};

export default ProjectDetails;
