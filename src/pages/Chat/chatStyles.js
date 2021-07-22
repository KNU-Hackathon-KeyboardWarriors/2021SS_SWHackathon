import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    Chat: {
        textAlign: "center",
        maxWidth: "728px",
        margin: theme.spacing(0, 'auto'),
    },
    chat_section: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100%",
        backgroundColor: "rgb(40, 37, 53)",
    },
    main: {
        padding: "10px";
        height: "80%";
        margin: theme.spacing("10%", 0, "10%"),
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        '&::-webkit-scrollbar':{
            width: "0.25rem"
        },
        '&::-webkit-scrollbar-thumb': {
        backgroundColor: "#6649b8"
        }
    },
    form: {
        height: "10%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "rgb(24, 23, 23)",
        width: "100%",
        maxWidth: "728px",
        display: "flex",
        fontSize: "1.5rem",
    },
    form_button: {
        width: "20%",
        backgroundColor: "rgb(56, 56, 143)"
    },
    input: {
        lineHeight: "1.5",
        width: "100%",
        fontSize: "1.5rem",
        background: "rgb(58, 58, 58)",
        color: "white",
        outline: "none",
        border: "none",
        paddingTop: "0px",
        paddingBottom: "0px",
        paddingRight: "10px",
        paddingLeft: "10px",
    },
    button: {
        backgroundColor: "#282c34",
        border: "none",
        color: "white",
        paddingTop: "15px",
        paddingBottom: "15px",
        paddingRight: "32px",
        paddingLeft: "32px",
        textAlign: "center",
        display: "inline-block",
        cursor: "pointer",
        fontSize: "1.25rem"
    },
    signin: {
        color: "#282c34",
        background: "white",
        maxWidth: "400px",
        margin: theme.spacing(0, 'auto'),
    },
    p: {
        maxWidth: "500px",
        marginBottom: "12px",
        lineHeight: "24px",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingRight: "20px",
        paddingLeft: "20px",
        borderRadius: "25px",
        position: "relative",
        color: "white",
        textAlign: "center",
    },
    message: {
        display: "flex",
        alignItems: "center",
    },
    img: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        margin: theme.spacing('2px', '5px')
    }
}));

export default useStyles;
