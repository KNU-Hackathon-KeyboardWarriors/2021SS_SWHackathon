import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

import useStyles from "./categoriesStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// import ListItemLink from "../../components/ListItemLink";

const Categories = () => {
  const classes = useStyles();

  const menues = [
    { primary: "아이템 둘러보기", to: "/projects" },
    { primary: "아이템 빌드업", to: "/buildup" },
    { primary: "팀원 찾기", to: "/findteam" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = useCallback((event, index) => {
    setSelectedIndex(index);
  }, []);

  const menuIteams = menues.map((menu, index) => {
    return (
      <ListItem
        component={NavLink}
        to={menu.to}
        selected={selectedIndex === index}
        onClick={(e) => handleListItemClick(e, index)}
      >
        <ListItemText primary={menu.primary} />
      </ListItem>
    );
  });

  return <List className={classes.list}>{menuIteams}</List>;
};

export default Categories;
