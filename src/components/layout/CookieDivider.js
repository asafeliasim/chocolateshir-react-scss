import React from 'react';

import {FaCookieBite} from 'react-icons/fa';

const style = {
    color: '#8e7b6f',
    fontSize: '40px'
}
const CookieDivider = () => {
    return (
        <div className="u-cookie-divider">
            <div className="cookie-divider">
                <hr className="solid-divider-large" />
            </div>
            <FaCookieBite style={style}/>
            <div className="cookie-divider">
                <hr className="solid-divider-large" />
            </div>

        </div>
    );
};

export default CookieDivider;
