import React, {useEffect, useState} from 'react';
import CartList from "./CartList";
import Dialog from '@material-ui/core/Dialog';
import {DialogContent} from "@material-ui/core";
import Divider from "../layout/Divider";
import {useSelector,useDispatch} from "react-redux";
import {setCartPopUp} from '../../redux/actions/orderActions';
import {setItemsToMessage,setFinishItemsToMessage} from '../../helepers/index';
import {Alert} from "react-bootstrap";

const CookieCart = () => {

    const order = useSelector(state=>state.order);
    const [msgOrder,setMsgOrder] = useState("");
    const [freezeMsgOrder,setFreezeOrder]= useState("");
    const [freshMsgOrder,setFreshOrder] = useState("");

    const [freezeBool,setFreezeBool] = useState(false);
    const [freshBool,setFreshBool] = useState(false);

    const {cart} = order;
    const dispatch = useDispatch();


    const user = useSelector(state=>state.user);
    const {userName,address,phone} = user;

    const freeze = useSelector(state=> state.freeze);
    const {cookies:freezeCookies,total:freezeTotal} = freeze;

    const fresh = useSelector(state=> state.fresh);
    const {cookies:freshCookies,total:freshTotal} = fresh;

    useEffect(()=>{
        console.log("freezeBool: " + freezeBool)
        console.log("freshBool: " + freshBool)
        if(freezeTotal === 12){
            setFreezeBool(false);
        }
        if(freshTotal%5 === 0){
            setFreshBool(false)
        }
        if(freezeTotal !== 12){
            setFreezeBool(true);

        }
        if(freshTotal%5 !== 0){
            setFreshBool(true);

        }

        const addressOrder = address? `כתובת: ${address}`: "";
        setMsgOrder(`${userName + " " + phone + " " + addressOrder }`);
        if(freezeCookies.length > 0){
            const freezeItems = setItemsToMessage(freezeCookies);
            const lastFreezeOrder = setFinishItemsToMessage(freezeItems);

            setFreezeOrder(`קפואות: ${lastFreezeOrder}`);
        }
        if(freshTotal > 0){
            console.log(freshTotal)
            const freshItems = setItemsToMessage(freshCookies);
            const lastFreshOrder = setFinishItemsToMessage(freshItems);
            setFreshOrder(`טריות: ${lastFreshOrder}`);
        }

    },[order,freshTotal,freshTotal])


    const handleClose = () => {
       dispatch(setCartPopUp())
    };

    return (
        <div className="cart-dialog">
            <Dialog
                open={cart}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogContent className="cart-dialog">
                    <div className="u-center-text ">
                        <h3 className="heading-secondary">
                            <span style={{fontSize:'2.8rem'}}>
                                 סל העוגיות שלי
                            </span>

                        </h3>
                        <div className="u-center-divider-sm cart-divider">
                            <Divider className="solid-divider-small"/>
                        </div>
                    </div>



                    <CartList />
                </DialogContent>
                {
                    !freezeBool && !freshBool && <div className="cart_button">
                    <a
                        href={`https://wa.me/+972544866139/?text=${msgOrder}%0A${freezeMsgOrder}%0A${freshMsgOrder}`}
                        target="_blank"
                        className="button button-success button-success-small"
                    >
                        שליחת ההזמנה
                    </a>
                </div>
                }
                {freezeBool && <Alert variant="danger">מארז של קפואות חייב להכיל 12 עוגיות.</Alert>}
                {freshBool && <Alert variant="danger">נא למלא מארז של טריות בקפיצות של 5. </Alert> }
            </Dialog>
        </div>
    );
};

export default CookieCart;