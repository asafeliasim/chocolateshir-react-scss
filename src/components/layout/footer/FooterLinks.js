import React from 'react';

const FooterLinks = () => {
    return (
        <div className="footer_container-links d-flex pt-5 justify-content-around">
            <div className="d-flex">
                <a href="#header" className="footer_container-links-header">
                    ראשי
                </a>
            </div>
            <div className="d-flex">
                    <a href="#gallery" className="footer_container-links-header">
                        גלרייה
                    </a>
                <hr className="footer_container-links-divider"/>
            </div>
            <div className="d-flex">
                <a  href="#contact" className="footer_container-links-header">
                    צור קשר
                </a>
                <hr className="footer_container-links-divider"/>
            </div>
        </div>
    );
};

export default FooterLinks;
