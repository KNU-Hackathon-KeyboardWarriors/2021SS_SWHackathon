import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    containe: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        paadingLeft: "10%",
        paadingRight: "10%",
        textAlign: "center",
    },
    title_set: {
        fontSize: 34,
        fontWeight: "bold",
        marginBottom: theme.spacing(2),
    },
    
}));

export default useStyles;