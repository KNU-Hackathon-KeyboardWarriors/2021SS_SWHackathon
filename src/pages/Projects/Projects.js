import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import useStyles from "./projectsStyles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

export default function Projects() {
    const classes = useStyles();
    const [projects, setProjects] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("/projects");
            setProjects(res.data);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(isLoading);
    }, [isLoading]);

    if (isLoading) return <Typography>Loading...</Typography>;
    if (!projects) return <Typography>No Project..</Typography>;

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.btnn}
                    component={Link}
                    to={"/newproject"}
                >
                    프로젝트 등록
                </Button>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {/* {console.log(projects)} */}
                        {projects.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    className={classes.card}
                                    component={Link}
                                    to={`/projectDetail/${index}`}
                                >
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={project.image}
                                        title="Image title"
                                    />
                                    <CardContent
                                        className={classes.cardContent}
                                    >
                                        <Typography>{project.title}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
