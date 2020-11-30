import React, {useState} from 'react';
import {FaCookie} from "react-icons/fa";

const CookieCartCard = ({product}) => {

    console.log(product);
    return (
        <li className="cart_list_item">
            <div>
                <h4 className="cart_list_item-title">
                    {product.name} {" "}{product.type === "2" ? "קקאו" : ""}{" "}
                </h4>
                <p className="cart_list_item_desc">
                    {product.myFill && product.myFill === 1 ? " מריר" : product.myFill === 2 ? "חלב" : product.myFill===3 ? "לבן" : ""}
                </p>
            </div>

            <div className="cart_icons">
                {
                    [...Array(product.sum)].map(i => (
                        <FaCookie key={i}/>
                    ))
                }
            </div>
        </li>
    );
};

export default CookieCartCard;