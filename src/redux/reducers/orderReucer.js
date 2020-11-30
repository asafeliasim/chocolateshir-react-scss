import {
    SET_ITEM_TO_CART,
    SET_DELIVERY,
    SET_CART,
    SEND_ORDER,
    SET_FREEZE,
    SET_FRESH,

} from '../constants/orderConstants';

const initialState = {
    freeze:true,
    fresh:false,
    delivery:false,
    products:[],
    freezeCookies:[],
    freshCookies:[],
    totalFreeze:0,
    totalFresh:0,
    totalProduct:0,
    cart:false,
    successOrder:false,
    loading:false
};


export const orderReducer = (
    state=initialState,
    action)=>{

    const {type,payload} = action;
    switch (type) {
        case SET_CART:
            return{
                ...state,
                cart: !state.cart
            }
        case SET_ITEM_TO_CART:
            return{
                ...state,
                products: [...state.products,payload],
                totalProduct: state.totalProduct + payload.sum,
                loading: true
            }
        case SET_DELIVERY:
            return{
                ...state,
                delivery: !state.delivery,
            }
        case SEND_ORDER:
            return {
                ...state,
                successOrder: true
            }
        case SET_FREEZE:
            return {
                freeze: true,
                fresh: false
            }
        case SET_FRESH:
            return{
                fresh: true,
                freeze:  false
            }
        default:
            return state;
    }
}
