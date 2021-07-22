import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import useStyles from "./projectDetailsStyles";

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
    const classes = useStyles();
    const [crntPrj, setCrntPrj] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        axios.get("/projects").then((res) => {
            console.log(res.data);
            setCrntPrj(res.data[match.params.projectIndex]);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <div>{console.log("loading")}Loading...</div>;

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.containe}>
                <Typography className={classes.title_set}>
                    {crntPrj.title}
                </Typography>
                <img src={crntPrj.image} alt="" />
                <Typography>{crntPrj.content}</Typography>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setIsModalOpen(true)}
                >
                    신청하기
                </Button>
                <ModalSubmit
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    handleCloseModal={handleCloseModal}
                />
                <Button variant="outlined" component={Link} to={"/projects"}>
                    목록
                </Button>
                <Comments data={comments} />
            </Container>
        </React.Fragment>
    );
};

export default ProjectDetails;
