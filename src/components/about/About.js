import React from 'react';
import Divider from "../layout/Divider";
import shirLogo from '../../asserts/images/‏‏shirlogo.PNG';
import product3 from '../../asserts/images/product-3.PNG';
import ScrollUp from "../layout/ScrollUp";

const About = () => {
    return (
        <div className="section section_about" id="about">
            <div className="row">
                <div className="col-md-6 mx-auto col-sm-12 ">
                    <div className="u-center-text cookies-row">
                        <h2 className="heading-secondary">
                            טעימה משוקולד שיר
                        </h2>
                        <div className="u-center-divider">
                            <Divider className="solid-divider-medium"/>
                        </div>
                        <h4 className="heading-secondary-sub">
                            אני שיר אביטל, נולדתי וגדלתי בשדרות. את התשוקה לאפייה קיבלתי עם השנים,<br/> הבנתי שלשמח אנשים דרך טעמים עושה אותי מאושרת.<br/> ב2015 השתחררתי מצה״ל ואמא שלי ראתה את החיבור שיש לי עם המטבח ורשמה אותי ללימודי קונדיטוריה.<br/> את שוקולד שיר הקמתי תוך כדי תנועה, ומהר מאוד הבנתי ששם הלב שלי שלם.<br/> כל יום בשבילי מביא איתו תחושת סיפוק יחד עם רצון להמשיך, להתפתח ולהתרחב וכך להגיע<br/> לכמה שיותר אנשים שיוכלו להנות מהטעמים היחודיים שיצרתי במהלך השנים.
                           {/* שוקולד שיר, עסק מתחיל וכבר מוצלח שהוקם ע"י שיר אביטן בעיר שדרות. שיר לקחה את העוגיית שוקולד צ'יפס הקלאסית והאהובה על כולנו והפכה אותה למאנצ' המושלם במגוון טעמים מיוחדים עם מתיקות מעודנת שמתאימה לכל גיל וכל שלב ביום.
                            <br></br>
                            <br></br>
                            בנוסף, שיר גם מכינה חבילת עוגיות קפואות עם הוראות הכנה פשוטות בשביל לקבל עוגיות טריות כל יום בשבוע.*/}
                        </h4>
                    </div>
                    <div className="logo_container">
                        <img src={shirLogo} alt="" className="logo_container-logo"/>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 ">
                    <div className="img_container mx-auto">
                        <img src={product3} alt="" className="img_container-img"/>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center scroll">
                <ScrollUp />
            </div>
        </div>
    );
};

export default About;
