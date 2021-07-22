import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import img1 from "../../images/mark.jpg"
import img2 from "../../images/knu.jpg"

const Appbar = () => {
  return (
      <AppBar position="relative" color="red">
        <Toolbar>
          <img src={img1} width="45" height="43"/>
          <img src={img2} width="80" height="25" hspace="10"/>
          <Typography variant="h6" noWrap>
            창업 오픈스페이스
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default Appbar;
