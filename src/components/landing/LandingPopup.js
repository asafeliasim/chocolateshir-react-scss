import React,{useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import {AiOutlineCloseCircle} from 'react-icons/ai';
const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
        width:'6rem',
        fontSize:22
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <AiOutlineCloseCircle />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});
const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


const LandingPopup = () => {

    const [open, setOpen] = useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog onClose={handleClose}  aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>

                </DialogTitle>
                <DialogContent className="popup_container" dividers>

                        <h1 className="popup_header">
                            מחירון והסבר
                        </h1>

                    <Typography gutterBottom>
                        <p className="popup_desc">
                            נא בחר/י את העוגייה שתרצה/י, הכמות, המילויים ותמלא לעצמך את האריזה... <br/> <strong>ניתן להזמין כמות בקפיצות של 5.</strong>
                        </p>

                    </Typography>
                    <Typography gutterBottom>
                        <p className="popup_desc">
                            מחיר עוגייה אחת היא 8₪.
                        </p>
                    </Typography>
                    <Typography gutterBottom>
                        <p className="popup_desc">
                            אם קונים 10 עוגיות כל עוגייה ב7.5₪.
                        </p>
                    </Typography>
                    <Typography gutterBottom>
                        <p className="popup_desc">
                            ניתן להזמין גם עוגיות קפואות, 12 באריזה ב75₪.
                        </p>
                    </Typography>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </div>
    );
};

export default LandingPopup;
/*
import React,{useState} from 'react';

const LandingPopup = () => {
    const [popUp,setPopUp] = useState(true)
    return (
        <div className="popup_container">
            <siv className="popup_content">

            </siv>
        </div>
    );
};

export default LandingPopup;*/
