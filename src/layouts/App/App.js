import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import Projects from "../../pages/Projects/Projects";
import ProjectDetails from "../../pages/ProjectDetails/ProjectDetails";
import NewProject from "../../pages/NewProject/NewProject";

import Chat from '../../pages/Chat/Chat';

import Buildup from "../../pages/Buildup/Buildup";
import BuildupDetails from "../../pages/BuildupDetails/BuildupDetails";
import NewBuildup from "../../pages/NewBuildup/NewBuildup";

import FindTeam from "../../pages/Findteam/Findteam";
import FindTeamDetails from "../../pages/FindTeamDetails/FindTeamDetails";
import NewFindTeam from "../../pages/NewFindTeam/NewFindTeam";

import Appbar from "../Appbar/Appbar";
import Categories from "../Categories/Categories";
import Copyright from "../Copyright/Copyright";

function App() {
    let location = useLocation();
    return (
        <>
            <Appbar />
            <Categories />
            <Switch location={location.background}>
                <Route exact path="/">
                    <Redirect to="/projects" />
                </Route>
                <Route path="/projects" component={Projects} />
                <Route
                    path="/projectDetail/:projectIndex"
                    component={ProjectDetails}
                />
                <Route path="/newproject" component={NewProject} />

                <Route path="/buildup" component={Chat} />
                <Route
                    path="/buildupDetail/:buildupIndex"
                    component={BuildupDetails}
                />
                <Route path="/newbuildup" component={NewBuildup} />

                <Route path="/findteam" component={FindTeam} />
                <Route
                    path="/findteamDetail/:findteamIndex"
                    component={FindTeamDetails}
                />
                <Route path="/newfindteam" component={NewFindTeam} />
            </Switch>
            <footer>
                <Copyright />
            </footer>
        </>
    );
}

export default App;
