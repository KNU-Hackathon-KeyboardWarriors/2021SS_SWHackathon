import React, { useEffect, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useStyles from "./newProjectStyles";

import Container from "@material-ui/core/Container";
import Typograph from "@material-ui/core/Typography";
import FilledInput from '@material-ui/core/FilledInput';
import Button from "@material-ui/core/Button";

export default function NewProject() {
  const classes = useStyles();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  let history = useHistory();

  const handleOnSubmit = useCallback((e) => {
    e.preventDefault();
    if(!title || !title.trim() || !content || !content.trim()) return;
    axios.post('/projects', {
      title: title,
      content: content
    })
    .then(()=>{
      console.log('success');
      history.push('/projects');
    })
    .catch(e=>{
      console.log(e);
    })
  },[content, title]);

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  const handleOnChangeContent = (e) => {
    setContent(e.target.value);
  }
  return (
    <Container className={classes.container}>
      <Typograph className={classes.top}>
        새 프로젝트 등록
      </Typograph>
      <form onSubmit={handleOnSubmit}>
        <FilledInput className={classes.title}
        placeholder="제목 입력"
        value={title} 
        onChange={handleOnChangeTitle} />
        <FilledInput className={classes.content}
        placeholder="프로젝트에 대해 설명해주세요"
        value={content} 
        onChange={handleOnChangeContent} />
        <div className={classes.btnSet}>
          <Button className={classes.btn} type="submit">등록하기</Button>
        </div>
      </form>
    </Container>
  );
};