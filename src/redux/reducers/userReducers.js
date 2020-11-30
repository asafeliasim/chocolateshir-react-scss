import {SET_USER_DETAILS} from "../constants/userConstants";


export const userReducer = (state={userRegister:false},action) => {
    const {type,payload} = action;
    switch (type){
        case SET_USER_DETAILS:
            return{
                userName: payload.userName,
                phone: payload.phone,
                email: payload.email,
                address: payload.address,
                userRegister: true
            }
        default:
            return state;
    }
}
