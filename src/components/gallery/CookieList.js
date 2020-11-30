import React from 'react';

import CookieCard from "./CookieCard";

import {cookies} from './cookie-data/cookies';


const CookieList = () => {
    return (
        <>
        <div className="orders" id="order_list">
            {
                cookies && cookies.map((product,id)=>(

                        <CookieCard key={id} name={product.name}  bgStyle={product.bgStyle} fills={product.fills} types={product.types} />

                ))
            }
        </div>
        {/*<div className="order-mobile">
            <div className="mobile">
                {
                    cookies && cookies.map((product,id)=>(
                        <div key={id} className="mobile_card">
                            <CookieCard name={product.name} bgStyle={product.bgStyle} fills={product.fills} types={product.types} />
                        </div>
                    ))
                }
            </div>

        </div>*/}
        </>

    );
};

export default CookieList;
