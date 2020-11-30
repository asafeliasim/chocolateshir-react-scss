import React from 'react';
import {AiOutlineWhatsApp} from "react-icons/ai";
import {FaFacebook, FaInstagram} from "react-icons/fa";

const defaultMsg = "שיר, הודעה דרך כפתור באתר, תאשרי לי שקיבלת..."

const FooterIcons = () => {
    return (
        <div className="footer_container-icons d-flex pt-5 justify-content-around">

            <a
                href={`https://wa.me/972544866139/?text=${defaultMsg}`}
                target="_blank"
                className="button-tag"
            >
                <AiOutlineWhatsApp className="icon" />
            </a>
            <a
                href="https://www.instagram.com/chocolate_shir/"
                target="_blank"
                className="button-tag"
            >
                <FaInstagram className="icon" />
            </a>

            <a
                href="https://www.facebook.com/chocolateshir"
                target="_blank"
                className="button-tag"
            >
                <FaFacebook className="icon"/>
            </a>

        </div>
    );
};

export default FooterIcons;
