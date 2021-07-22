import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    list: {
        paddingTop: "3%",
        paddingLeft: "15%",
        paddingRight: "15%",
        display: "flex",
    },
    listItemText: {
        color: "black",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
}));

export default useStyles;