import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';

const Appbar = () => {
  return (
      <AppBar position="relative" color="red">
        <Toolbar>
          <Typography variant="h6" noWrap>
            창업 오픈스페이스
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default Appbar;
