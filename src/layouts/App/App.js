import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import Projects from "../../pages/Projects/Projects";
import Buildup from "../../pages/Buildup/Buildup";
import Findteam from "../../pages/Findteam/Findteam";
import ProjectDetails from "../../pages/ProjectDetails/ProjectDetails";
import NewProject from '../../pages/NewProject/NewProject';

import Appbar from "../Appbar/Appbar";
import Categories from "../Categories/Categories";
import Copyright from "../Copyright/Copyright"

function App() {
  let location = useLocation();
  return (
    <>
      <Appbar />
      <Categories />
      <Switch location={location.background} >
        <Route exact path="/">
          <Redirect to="/projects" />
        </Route>
        <Route path="/projects" component={Projects} />
        <Route path="/buildup" component={Buildup} />
        <Route path="/findteam" component={Findteam} />
        <Route path="/projectDetail/:projectIndex" component={ProjectDetails} />
        <Route path="/newproject" component={NewProject}/>
      </Switch>      
      <footer>
        <Copyright />
      </footer>
    </>
  );
}

export default App;
