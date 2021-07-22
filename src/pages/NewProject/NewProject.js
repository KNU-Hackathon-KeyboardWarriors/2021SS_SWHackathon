import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";

import Container from "@material-ui/core/Container";
import Typograph from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const NewProject = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const handleOnSubmit = useCallback((e) => {
    e.preventDefault();
    if(!title || !title.trim() || !content || !content.trim()) return;
    axios.post('/makeProject', {
      title: title,
      content: content
    })
    .then(()=>{
      console.log('success');
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
    <Container>
      <Typograph varient="h4">새 프로젝트 등록</Typograph>
      <form onSubmit={handleOnSubmit}>
        <InputLabel>제목</InputLabel>
        <Input value={title} onChange={handleOnChangeTitle} />
        <InputLabel>본문</InputLabel>
        <Input value={content} onChange={handleOnChangeContent} />
        <Button type="submit">등록하기</Button>
      </form>
    </Container>
  );
};

export default NewProject;