import React,{useState} from 'react';
import FormControl from "@material-ui/core/FormControl";
import {useStyles} from './material-css/counterStyle';

import Select from "@material-ui/core/Select";


const CookieType = ({setType,types}) => {
    const classes = useStyles();


    const handleChange = (event) => {
        console.log(event.target.value);

        setType(event.target.value);
    }
    return (
        <div className="cookie-counter">
            <div className="">
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                        native

                        onChange={handleChange}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        className={classes.option}
                    >

                        {
                            types.map((item)=>(
                                <option key={item.id} className={classes.option} value={item.id}>{item.title}</option>
                            ))
                        }

                    </Select>
                </FormControl>
            </div>

        </div>
    );
};

export default CookieType;
