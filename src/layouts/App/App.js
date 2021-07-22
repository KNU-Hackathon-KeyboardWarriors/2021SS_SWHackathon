import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Projects from "../../pages/projects/Projects";
import Buildup from "../../pages/buildup/Buildup";
import Findteam from "../../pages/findteam/Findteam";

import Header from "../../components/appbar/Appbar";
import Categories from "../../components/categories/Categories";

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Switch>
        <Route exact path="/">
          <Redirect to="/projects" />
        </Route>
        <Route path="/projects" component={Projects} />
        <Route path="/buildup" component={Buildup} />
        <Route path="/findteam" component={Findteam} />
      </Switch>
    </>
  );
}

export default App;
