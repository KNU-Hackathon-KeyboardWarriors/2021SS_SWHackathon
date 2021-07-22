import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "white",
      flexGrow: 1,
    },
    toolbar: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    title: {
      fontSize: 35,
      fontWeight: "bold",
      color: "black",
      flexGrow: 1,
      alignSelf: 'flex-end',
    },
}));

export default useStyles;