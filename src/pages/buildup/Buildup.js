import React from "react";

import Header from "../../components/appbar/Appbar";
import Categories from "../../components/categories/Categories";
import Copyright from "../../components/copyright/Copyright";
// import useStyles from "./projectsStyles";

import CssBaseline from "@material-ui/core/CssBaseline";

export default function Buildup() {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <Categories/>
      <footer>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}
