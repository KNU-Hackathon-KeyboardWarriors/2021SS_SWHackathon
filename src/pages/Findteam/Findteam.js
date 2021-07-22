import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import useStyles from "./findTeamStyles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

export default function FindTeam() {
    const classes = useStyles();
    const [findTeam, setProjects] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("/teams");
            setProjects(res.data);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(isLoading);
    }, [isLoading]);

    if (isLoading) return <Typography>Loading...</Typography>;
    if (!findTeam) return <Typography>No Build up...</Typography>;

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.btnn}
                    component={Link}
                    to={"/newfindteam"}
                >
                    팀원찾기 등록
                </Button>
                <Container>
                    <TableContainer component={Paper}>
                        <Table
                            className={classes.table}
                            aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align="center"
                                        className={classes.firstCell}
                                    >
                                        번호
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        className={classes.middleCell}
                                    >
                                        제목
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        className={classes.lastCell}
                                    >
                                        글쓴이
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {findTeam.map((team, index) => (
                                    <TableRow
                                        component={Link}
                                        to={`/findteamDetail/${index}`}
                                    >
                                        <TableCell align="center">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="center">
                                            {team.title}
                                        </TableCell>
                                        <TableCell align="center">
                                            박세영
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </main>
        </React.Fragment>
    );
}
