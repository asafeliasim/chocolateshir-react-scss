import React from 'react';
import {ImLocation} from 'react-icons/im';
import {AiFillPhone} from 'react-icons/ai';
import {FaEnvelope} from 'react-icons/fa';
const data = [
    {
        title:'כתובת',
        desc: 'האחוזה 62 שדרות',
        icon: <ImLocation />
    }
]

const ContactDetails = () => {
    return (
        <div className="contact_details">
            <div className="contact_details_container">
                <div className="contact_details_headlines">
                    <h3 className="heading-secondary_detail">
                        כתובת
                    </h3>
                    <h5 className="heading-secondary-sub_detail">
                        האחוזה 62 שדרות
                    </h5>
                </div>
                <div className="contact_details_container-icon">
                    <ImLocation />
                </div>
            </div>
            <div className="contact_details_container">
                <div className="contact_details_headlines">
                    <h3 className="heading-secondary_detail">
                       טלפון
                    </h3>
                    <h5 className="heading-secondary-sub_detail">
                        0544866139
                    </h5>
                </div>
                <div className="contact_details_container-icon">
                    <AiFillPhone />
                </div>
            </div>
            <div className="contact_details_container">
                <div className="contact_details_headlines">
                    <h3 className="heading-secondary_detail">
                        דוא"ל
                    </h3>
                    <h5 className="heading-secondary-sub_detail">
                        shiravital.sa@gmail.com
                    </h5>
                </div>
                <div className="contact_details_container-icon">
                    <FaEnvelope />
                </div>
            </div>
            <div className="form_group-btn">
                <a href="#" className="button button-primary">
                    שלח הודעה לוואצאפ
                </a>
            </div>
        </div>
    );
};

export default ContactDetails;
