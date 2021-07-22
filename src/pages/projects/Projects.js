import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import ProjectDetails from "./ProjectDetails";
import Copyright from "../../components/copyright/Copyright";
import useStyles from "./projectsStyles";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Projects() {
  const classes = useStyles();
  const [projects, setProjects] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const fetchData = async() => {
      const res = await axios.get('/getProjects');
      setProjects(res.data.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if(isLoading) return <Typography>Loading...</Typography>
  if(!projects) return <Typography>No Project..</Typography>

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {/* {console.log(projects)} */}
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  className={classes.card}
                  component={Link}
                  to={`/projects/${index}`}
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
        </Container>
      </main>
      <footer className={classes.footer}>
        <Copyright />
      </footer>

      <Route path="/projects/:projectIndex" component={ProjectDetails} />
    </React.Fragment>
  );
}
