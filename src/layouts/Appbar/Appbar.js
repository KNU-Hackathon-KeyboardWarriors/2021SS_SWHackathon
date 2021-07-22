import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import img1 from "../../images/mark.jpg"
import img2 from "../../images/knu.jpg"

import useStyles from "./appbarStyles";

export default function Appbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img src={img1} width="50" height="47"/>
        <img src={img2} width="120" height="35" hspace="18" vspace="7"/>
        <Typography className={classes.title}>
          창업 오픈스페이스
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
