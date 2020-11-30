import React from 'react';
import {useSelector} from "react-redux";
import {Alert} from "react-bootstrap";
import CookieCartCard from "./CookieCartCard";
const CartList = () => {
    const freeze = useSelector(state=>state.freeze);
    const {cookies:freezeCookies} = freeze;

    const fresh = useSelector(state=>state.fresh);
    const {cookies:freshCookies} = fresh;
    return (
        <div className="cart_list">
            <h2 className="cart-subtitle">קפואות</h2>
            {freezeCookies.length > 0 ? (
                <>

                    <ul className="cart_list_ul">
                        {
                            freezeCookies.length > 0 && freezeCookies.map((product,index)=>(
                                <CookieCartCard key={index} product={product} />
                            ))
                        }
                    </ul>
                </>
                ):
                (
                   <Alert variant="primary">
                       <h3>
                          ניתן להזמין גם מארז של 12 קפואות ולהכין בעצמך
                       </h3>
                   </Alert>
                )
            }
            <h2 className="cart-subtitle">טריות</h2>
            {freshCookies.length > 0 ?
                (
                    <>
                    <ul className="cart_list_ul">
                        {
                            freshCookies.length > 0 && freshCookies.map((product, index) => (
                                <CookieCartCard key={index} product={product}/>
                            ))
                        }
                    </ul>
                    </>
                )
                :
                (
                    <Alert variant="primary">
                        <h3>
                            הזמנת רק קפואות, מה עם עוגיות טריות לעכשיו?
                        </h3>
                    </Alert>
                )
            }
        </div>
    );
};

export default CartList;