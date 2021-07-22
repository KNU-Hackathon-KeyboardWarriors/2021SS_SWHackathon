import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingLeft: "8%",
        paddingRight: "8%",
    },
    top: {
        marginTop: theme.spacing(5),
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
    },
    title: {
        marginTop: theme.spacing(3),
        width: "100%",
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
        backgroundColor: "#C0C0C0",
    },
    content: {
        marginTop: theme.spacing(4),
        width: "100%",
        paddingBottom: "40%",
        color: "black",
    },
    btn: {
        paddingLeft: "5%",
        paddingRight: "5%",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(5),
        backgroundColor: "red",
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        '&:hover': {
          backgroundColor: "#E00000",
        },
    },
    btnSet: {
        textAlign: "center",
    },
  }));
  
  export default useStyles;