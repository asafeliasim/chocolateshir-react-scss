import React,{useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {useDispatch} from 'react-redux';
import {setDeliveryOrder} from "../../redux/actions/orderActions";

const Delivery = ({setAddress}) => {
    const [noDelivery,setNoDelivery] = useState(true);
    const [withDelivery,setWithDelivery] = useState(false);
    const dispatch = useDispatch();


    const noDeliveryClicked = () => {
        setNoDelivery(!noDelivery);
        setWithDelivery(!withDelivery);
        dispatch(setDeliveryOrder());
    }

    const withDeliveryClicked = () => {
        setWithDelivery(!withDelivery);
        setNoDelivery(!noDelivery);
        dispatch(setDeliveryOrder());
    }
    return (
        <>
        <ul className="delivery_list">
            <li className="delivery_list-item">
                <Checkbox
                    checked={noDelivery}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    onClick={noDeliveryClicked}
                />
                <p className="delivery_list-item-p">
                    ללא משלוח
                </p>
            </li>
            <li className="delivery_list-item">
                <Checkbox
                    checked={withDelivery}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    onClick={withDeliveryClicked}
                />
                <p className="delivery_list-item-p">
                    עם משלוח
                </p>
            </li>
        </ul>
         <div className={`delivery_address ${withDelivery ? "delivery_address-with": ""}`}>
             <div className="form_group">
                 <input

                     type="text"
                     className="form_input"
                     placeholder="רשום כאן את הכתובת למשלוח"
                     id="כתובת"
                     required
                     onChange={e=>setAddress(e.target.value)}
                 />

             </div>
         </div>
        </>
    );
};

export default Delivery;
