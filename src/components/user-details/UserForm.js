import React from 'react';

const UserForm = ({setUserName,setPhone,setEmail}) => {
    return (
        <div className="user_details">
            <div className="form_group">
                <input
                    type="name"
                    className="form_input"
                    placeholder="שם מלא"
                    id="name"
                    onChange={e=>setUserName(e.target.value)}
                    required
                />
            </div>
            <div className="form_group">
                <input
                    type="phone"
                    className="form_input"
                    placeholder="טלפון נייד"
                    id="phone"
                    onChange={e=>setPhone(e.target.value)}
                    required
                />
            </div>
            <div className="form_group">
                <input
                    type="email"
                    className="form_input"
                    placeholder='דוא"ל'
                    id="email"
                    onChange={e=>setEmail(e.target.value)}
                />
            </div>
        </div>
    );
};

export default UserForm;
