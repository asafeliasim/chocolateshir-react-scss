import React from 'react';
import Divider from "../layout/Divider";
import image from '../../asserts/images/‏about.PNG';
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
const Contact = () => {
    return (
        <section id="contact" className="section section-contact">
            <div className="u-center-text cookies-row">
                <h2 className="heading-secondary">
                   צור קשר
                </h2>
                <div className="u-center-divider">
                    <Divider className="solid-divider-medium"/>
                </div>
                <h4 className="heading-secondary-sub contact-sub">
                   אני אשמח לשמוע דעות וטעמים שונים, גם המלצות לטעמים חדשים יתקבלו במתיקות...
                </h4>
            </div>
            <div className="row">
                <div className="col-md-4 col-10 mx-auto">
                    <ContactForm />
                </div>
                <div className="col-md-4 col-10 mx-auto">
                   <ContactDetails />
                </div>
                <div className="col-md-4 col-10 mx-auto">

                    <div className="img_container">
                        <img src={image} alt="image_container-pink" className="img_container-pink"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
