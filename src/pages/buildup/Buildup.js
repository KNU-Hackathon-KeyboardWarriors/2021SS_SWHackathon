import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import useStyles from "./buildupStyles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

export default function Buildup() {
  const classes = useStyles();
  const [buildup, setProjects] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const fetchData = async() => {
      const res = await axios.get('/buildups');
      setProjects(res.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  useEffect(()=> {
    console.log(isLoading);
  }, [isLoading]);

  if(isLoading) return <Typography>Loading...</Typography>
  if(!buildup) return <Typography>No Build up...</Typography>

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {/* {console.log(buildup)} */}
            {buildup.map((project, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  className={classes.card}
                  component={Link}
                  to={`/buildupDetail/${index}`}
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image={project.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography>{project.title}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button component={Link} to={"/newproject"} >새 프로잭트 등록하기</Button>
        </Container>
      </main>
    </React.Fragment>
  );
}