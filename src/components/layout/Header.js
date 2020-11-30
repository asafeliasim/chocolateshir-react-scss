import React from 'react';
import img from '../../asserts/images/‏‏headerBG.PNG';
import logo from '../../asserts/images/‏‏shirlogo.PNG';


const style = {
    backgroundImage: `linear-gradient(to right,rgba(201, 230, 247, 0.8),rgba(233, 245, 251, 0.8)),url(${img})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center top'
}
const Header = () => {
    return (
        <header className="header" style={style} id="header">
            <div className="header_text-box">
                <h1 className="heading-primary">
                <span className="heading-primary-main">
                     שוקולד שיר
                </span>
                    <span className="heading-primary-sub">
                    כל ביס מרגיש כמו הפעם הראשונה
                    </span>
                </h1>
            </div>

        </header>
    );
};

export default Header;
