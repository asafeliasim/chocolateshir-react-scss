import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles(theme=> ({
    root: {

        height: '80vh',
        "& > *": {
            margin: theme.spacing(2)
        }
    },

}));

