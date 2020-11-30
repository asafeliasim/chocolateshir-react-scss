import {SET_FREEZE_COOKIES} from "../constants/orderConstants";


export const freezeReducer = (state ={cookies:[],total:0},action) => {
    const {type,payload} = action;

    switch (type){
        case SET_FREEZE_COOKIES:
            return{
                ...state,
                cookies: [...state.cookies,payload.newCookies],
                total: state.total + payload.sum
            }
        default:
            return state;
    }
}