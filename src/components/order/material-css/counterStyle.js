import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    input:{
        fontSize: 18,
        width:40,
        textAlign:'center'

    },
    label:{
        "&::input":{
            fontSize: 16,
        }
    },
    option:{
        fontSize: ' 16px!important',
        "&::placeholder":{
            fontSize: 16,
        },
        "&::label":{
            fontSize: 16,
        }
    },
}));
