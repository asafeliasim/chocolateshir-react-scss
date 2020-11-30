import {SET_USER_DETAILS} from "../constants/userConstants";

export const setUserDetails = (userName,phone,email,address) => dispatch => {

    dispatch({
        type:SET_USER_DETAILS,
        payload:{userName,phone,email,address}
    })
}
