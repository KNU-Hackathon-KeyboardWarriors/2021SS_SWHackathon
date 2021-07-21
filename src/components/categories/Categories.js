import React from "react";

import useStyles from './categoriesStyles';
import List from "@material-ui/core/List";
import ListItemLink from "../ListItemLink/ListItemLink";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";

const Categories = () => {
  const classes = useStyles();

  const menues = [
    { primary: "아이템 둘러보기", to: "/projects" },
    { primary: "아이템 빌드업", to: "/buildup" },
    { primary: "팀원 찾기", to: "/findteam" },
  ];

  const menuIteams = menues.map((menu, index) => {
    return <ListItemLink key={index} to={menu.to} primary={menu.primary} />;
  });

  return <List className={classes.list}>{menuIteams}</List>;
};

export default Categories;
