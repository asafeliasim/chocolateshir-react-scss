import React from 'react';
import FooterLinks from "./FooterLinks";
import CookieDivider from "../CookieDivider";
import FooterIcons from "./FooterIcons";
const Footer = () => {
    return (
        <footer className="section_footer">
            <div className="row d-flex">
                <div className="col-md-6 col-10 mx-auto">
                    <FooterLinks />
                </div>
                <div className="col-md-6 col-10 mx-auto">
                       <FooterIcons />
                </div>
            </div>
            <CookieDivider />
            <div className="footer_copy d-flex justify-content-center">
                <h2 className="footer_copy-name">
                   <a href="http://eliasim.com/" target="_blank" className="footer_copy-cv">
                       Asaf Eliasim
                   </a>  &copy;
                </h2>
            </div>
        </footer>
    );
};

export default Footer;
