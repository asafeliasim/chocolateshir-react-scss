import React,{useState,useEffect} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {useDispatch,useSelector} from 'react-redux';
import {setDeliveryOrder} from "../../redux/actions/orderActions";
import {SET_FREEZE, SET_FRESH} from "../../redux/constants/orderConstants";

const PickOrderCheckBox = () => {
    const [freeze,setFreeze] = useState(true);
    const [fresh,setFresh] = useState(false);
    const dispatch = useDispatch();

    const order = useSelector(state=>state.order);
    const {freeze:freezeState,fresh:freshOrder} = order;


    const freezeClickHandle = () => {
        setFreeze(!freeze);
        setFresh(!fresh);
            dispatch({
                type: SET_FREEZE
            })
    }

    const freshClickHandle = () => {
        setFresh(!fresh);
        setFreeze(!freeze);
            dispatch({
                type:SET_FRESH
            })

    }
    return (
        <>
            <ul className="pick_list">
                <li className="pick_list-item">
                    <Checkbox
                        checked={freezeState}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        onClick={freezeClickHandle}
                    />
                    <p className="delivery_list-item-p">
                       קפואות
                    </p>
                </li>
                <li className="delivery_list-item fresh">
                    <Checkbox
                        checked={freshOrder}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        onClick={freshClickHandle}
                    />
                    <p className="delivery_list-item-p">
                       טריות
                    </p>
                </li>
            </ul>
        </>
    );
};

export default PickOrderCheckBox;
