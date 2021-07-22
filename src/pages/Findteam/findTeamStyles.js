import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    table: {
        minWidth: 650,
    },
    firstCell: {
        width: 100,
    },
    middleCell: {},
    lastCell: {
        width: 200,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    btnn: {
        position: "absolute",
        right: "10%",
        top: 20,
        backgroundColor: "red",
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        "&:hover": {
            backgroundColor: "#E00000",
        },
    },
}));

export default useStyles;
