import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
// ---------- COMPONENTS -------------------//
import CookieCounter from "./CookieCounter";
import Delivery from "./Delivery";
// MATERIAL UI COMPONENTS //
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from "../layout/Divider";
import DialogContent from "@material-ui/core/DialogContent";
import UserForm from "../user-details/UserForm";
import {useStyles} from "./material-css/orderStyle";

import shirLogo from '../../asserts/images/‏‏shirlogo.PNG';
import {setUserDetails} from "../../redux/actions/userActions";
import {setProductToOrder,setCookieToFreeze,setCookieToFresh} from '../../redux/actions/orderActions';
import Checkbox from "@material-ui/core/Checkbox";
import CookieType from "./CookieType";
import PickOrderCheckBox from "./PickOrderCheckBox";
const OrderModal = ({openDialog,closeHandle,fills,name,types}) => {
    console.log("open dialog")
    console.log(openDialog)
    const dispatch = useDispatch();

    const [open,setOpen] = useState(false);
    const [noFill,setNoFill] = useState(true);
    const [bitter,setBitter] = useState(false);
    const [vanilla,setVanilla] = useState(false);
    const [milk,setMilk] = useState(false);
    const [type,setType] = useState(1);
    const [userName,setUserName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [myFill,setMyFill] = useState(0)
    const [address,setAddress] = useState("");
    const [sum,setSum] = useState(0);
    const classes = useStyles();

    const user= useSelector(state=>state.user)
    const {userRegister} = user;

    const order= useSelector(state=>state.order);
    const {freeze,fresh} = order;

    useEffect(()=>{
        setOpen(openDialog)
    },[openDialog])

    const plusOne = () => {
        setSum(sum+1);
    }
    const minusOne = () => {
        if(sum > 0){
            setSum(sum-1);
        }
    }

    const handleNoFill = () => {
        setNoFill(!noFill);
        setBitter(false);
        setMilk(false);
        setMilk(false);
        setMyFill(0)

    }
    const handleBitter = () => {
        setBitter(!bitter);
        setNoFill(false);
        setMilk(false);
        setVanilla(false);
        setMyFill(1)
    }
    const handleMilk = () => {
        setMilk(!milk);
        setNoFill(false);
        setVanilla(false);
        setBitter(false);
        setMyFill(2)

    }
    const handleVanilla = () => {
        setVanilla(!vanilla);
        setNoFill(false);
        setBitter(false);
        setMilk(false);
        setMyFill(3)

    }
    const handleClose = () => {
        setOpen(false);
        closeHandle();
    }
    const addToCookies = (name,type,sum) => {
        console.log(myFill)
       /* const addon = type===2 ? "קקאו" : "רגילה" ;*/
        if(!userRegister){
            console.log("user register")
            dispatch(setUserDetails(userName,phone,email,address));
        }
        if(freeze){
            dispatch(setCookieToFreeze(name,type,sum,myFill))
        }else{
            dispatch(setCookieToFresh(name,type,sum,myFill))
        }
    }

    /*const order = `שם: ${userName} <br/>טלפון: ${phone} <br/>`*/
    return (
        <Dialog open={open} onClose={handleClose}>
            <div className={classes.root}>

                <DialogTitle id="simple-dialog-title">
                    <h2 className="heading-secondary heading-secondary-modal">
                        <div className="d-flex justify-content-center mb-2" style={{display:'block'}}>
                            החלק הכי חשוב!
                        </div>

                        <span style={{display:'block'}}>
                         בחר/י במילוי האהוב עלייך
                        </span>
                    </h2>
                    <div className="u-center-divider">
                        <Divider className="solid-divider-large"/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src={shirLogo} alt="" style={{width:"8rem"}} />
                    </div>

                </DialogTitle>
                <DialogContent>
                    {!userRegister &&
                        <>
                        <UserForm setUserName={setUserName} setPhone={setPhone} setEmail={setEmail}/>
                        <Delivery setAddress={setAddress}/>

                        </>

                    }
                    <PickOrderCheckBox />
                    {fills && fills.length > 0 &&
                        <div className="checked">
                            <ul className="">
                                <li className="checked_list-item">
                                    <Checkbox
                                        size="medium"
                                        checked={noFill}
                                        onClick={handleNoFill}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                    <p className="text-muted mt-2 checked_list-item_p">ללא מילוי</p>
                                </li>
                                <li className="checked_list-item">
                                    <Checkbox
                                        size="medium"
                                        checked={bitter}
                                        onClick={handleBitter}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                        value="מריר"
                                    />
                                    <p className="text-muted mt-2 checked_list-item_p">מריר</p>
                                </li>
                                <li className="checked_list-item">
                                    <Checkbox
                                        size="medium"
                                        checked={milk}
                                        onClick={handleMilk}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                    <p className="text-muted mt-2 checked_list-item_p">חלב</p>
                                </li>
                                <li className="checked_list-item">
                                    <Checkbox
                                        size="medium"
                                        checked={vanilla}
                                        onClick={handleVanilla}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                    <p className="text-muted mt-2 checked_list-item_p">לבן</p>
                                </li>
                            </ul>
                        </div>
                    }

                    <CookieCounter onCounter={setSum} plusOne={plusOne} minusOne={minusOne} sum={sum}/>

                    {types && types.length > 0 && <CookieType types={types} setType={setType}/>}

                    {!userRegister ?
                        <div className="d-flex justify-content-center mt-5">

                        <a
                            /*     href={`https://api.whatsapp.com/send?phone=972548115850/?text=${order}`}*/
                            target="_blank"
                            onClick={()=>addToCookies(name,type,sum)}
                            className={`${userName && phone ? 'button button-success button-success-small': 'button-disabled'}`}

                        >
                            להזמנה
                        </a>
                    </div>:
                        <div className="d-flex justify-content-center mt-5">

                            <a
                                /*     href={`https://api.whatsapp.com/send?phone=972548115850/?text=${order}`}*/
                                target="_blank"
                                onClick={()=>addToCookies(name,type,sum)}
                                className="button button-success button-success-small"

                            >
                                להזמנה
                            </a>
                        </div>
                    }


                </DialogContent>

            </div>
        </Dialog>
    );
};

export default OrderModal;
