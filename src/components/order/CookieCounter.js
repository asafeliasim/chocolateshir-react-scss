import React,{useState} from 'react';
import FormControl from "@material-ui/core/FormControl";
import {useStyles} from './material-css/counterStyle';

import TextField from "@material-ui/core/TextField";
import {BsPlusCircleFill} from 'react-icons/bs';
import {AiOutlineMinusCircle} from 'react-icons/ai';


const CookieCounter = ({onCounter,plusOne,minusOne,sum}) => {
    const classes = useStyles();




    const plusChange = () => {
        plusOne();
    }
    const minusChange = () => {

        minusOne()
    }

    return (
        <div className="cookie-counter">
            <div className="">
                <FormControl variant="outlined" className={classes.formControl}>
                    <div className="cookie-counter_input">
                        <AiOutlineMinusCircle
                            className="cookie-counter_icon minus"
                            onClick={minusChange}
                        />
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            value={sum}
                            onChange={e=>onCounter(e.target.value)}
                            inputProps={{
                                className: classes.input,
                            }}
                        />
                        <BsPlusCircleFill
                            className="cookie-counter_icon plus"
                            onClick={plusChange}
                        />
                    </div>

                </FormControl>
            </div>

        </div>
    );
};

export default CookieCounter;
