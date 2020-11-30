import React from 'react';
import Divider from "../layout/Divider";

import CookieList from "../gallery/CookieList";


const OrderList = () => {

    return (
        <div className="section section_order" id="order">
                    <div className="u-center-text cookies-row">
                        <h2 className="heading-secondary">
                           להזמנות
                        </h2>
                        <div className="u-center-divider">
                            <Divider className="solid-divider-medium"/>
                        </div>
                        <h4 className="heading-secondary-sub">
                            תבחרו את העוגיות שאתם רוצים עם המילוי האהוב עליכם...
                        </h4>
                    </div>
                   <CookieList />
        </div>
    );
};

export default OrderList;
