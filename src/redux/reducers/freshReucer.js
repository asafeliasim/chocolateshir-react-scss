import {SET_FRESH_COOKIES} from "../constants/orderConstants";


export const freshReducer = (state ={cookies:[],total:0},action) => {
    const {type,payload} = action;

    switch (type){
        case SET_FRESH_COOKIES:
            return{
                ...state,
                cookies: [...state.cookies,payload.newCookies],
                total: state.total + payload.sum
            }
        default:
            return state;
    }
}