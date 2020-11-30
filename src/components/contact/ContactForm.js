import React,{useState} from 'react';

const ContactForm = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [msg,setMsg] = useState("");

    const removeFields = () => {
        setName("");
        setEmail("");
        setPhone("");
        setMsg("");
    }
    const sendEmail = () => {
        console.log(
            name,
            email,
            phone,
            msg
        )
        removeFields()
    }
    return (
        <div className="contact_form">
           <form action="#" className="form">
               <div className="form_group">
                   <label htmlFor="name" className="form_label">שם מלא</label>
                   <input
                       onChange={e=>setName(e.target.value)}
                       type="text"
                       className="form_input"
                       placeholder="שם מלא"
                       id="name"
                       required
                   />

               </div>
               <div className="form_group">
                   <label htmlFor="email" className="form_label">דוא"ל</label>
                   <input
                       onChange={e=>setEmail(e.target.value)}
                       type="email"
                       className="form_input"
                       placeholder='דוא"ל'
                       id="email"
                       required
                   />

               </div>
               <div className="form_group">
                   <label htmlFor="phone" className="form_label">טלפון</label>
                   <input
                       onChange={e=>setPhone(e.target.value)}
                       type="text"
                       className="form_input"
                       placeholder="טלפון"
                       id="phone"
                   />

               </div>
               <div className="form_group">
                   <label htmlFor="msg" className="form_label">הודעה</label>
                   <textarea
                       onChange={e=>setMsg(e.target.value)}
                       className="form_input form_input-msg"
                       placeholder="אהבתי מאוד את הכרמל מלוח, אני ממליץ על...."
                       id="msg"
                   />
               </div>
               <div className="form_group-btn">
                   <a
                       href="#contact"
                       onClick={sendEmail}
                       className="button button-success"
                   >
                       שלח הודעה
                   </a>
               </div>
           </form>
        </div>
    );
};

export default ContactForm;
