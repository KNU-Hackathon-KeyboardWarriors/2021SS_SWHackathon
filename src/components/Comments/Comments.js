import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import TextField from '@material-ui/core/TextField';

const Comments = ({ data }) => {
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState(data);

  const handleCommentChage = useCallback((e) => {
    setCommentInput(e.target.value);
  }, []);

  const handleCommentSubmit = useCallback(() => {
    let newComments = comments;
    newComments.data = newComments.data.concat({ name: "세영", text: commentInput });
    newComments.num++;
    console.log(newComments);
    setComments(newComments);
    setCommentInput("");
  }, [commentInput, comments]);

  const handleKeyPress = useCallback((e)=> {
    if(e.key === 'Enter')
      handleCommentSubmit();
  }, [handleCommentSubmit]);

  const comments_view = comments.data.map((comment) => {
    return (
      <TableRow>
        <TableCell>{comment.name}</TableCell>
        <TableCell>{comment.text}</TableCell>
      </TableRow>
    );
  });

  return (
    <>
      <div>댓글 {comments.num}개</div>
      <Button variant="outlined" component={Link} to={"/projects"}>
        목록
      </Button>
      <hr />
      <Table>
        <TableBody>{comments_view}</TableBody>
      </Table>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={commentInput}
        fullWidth
        placeholder="댓글을 입력하세요"
        onChange={handleCommentChage}
        onKeyPress={handleKeyPress}
      />
      <Button variant="outlined" onClick={() => handleCommentSubmit(commentInput)}>등록</Button>
    </>
  );
};

export default Comments;
