import {
    SET_DELIVERY,
    SET_ITEM_TO_CART,
    SET_CART, SET_FREEZE_COOKIES,
    SET_FRESH_COOKIES, SET_FRESH, SET_FREEZE
} from "../constants/orderConstants";
/*
import axios from 'axios';
function reversedString(str) {
    return str.map((s)=>{
        s.reverse().join();
    })
}
*/

//+12543848654
// account sid ACf14671bcf7c8de5f83a1e1eecdcc0630
// auth token 904828eb6da8d1ea37a19314d72a9e57
export const setDeliveryOrder = () => dispatch => {
    dispatch({
        type: SET_DELIVERY
    })
}

export const setCookieToFreeze = (name,type,sum,myFill) => dispatch => {
    dispatch({type:SET_FREEZE});
    const newCookies = {
        name,
        type,
        sum,
        myFill
    }
    dispatch({
        type:SET_FREEZE_COOKIES,
        payload: {newCookies,sum}
    })
}
export const setCookieToFresh = (name,type,sum,myFill) => dispatch => {
    dispatch({type:SET_FRESH})

    const newCookies = {
        name,
        type,
        sum,
        myFill
    }

    dispatch({
        type:SET_FRESH_COOKIES,
        payload: {newCookies,sum}
    })

}
export const setProductToOrder = (name,type,sum,myFill) => dispatch => {


    const newProduct = {
        name,
        type,
        sum,
        myFill
    }

    dispatch({
        type:SET_ITEM_TO_CART,
        payload:newProduct
    })
}
export const setCartPopUp = () => dispatch => {
    dispatch({
        type:SET_CART
    })
}

/*
export const sendTheOrder = (userName,address,phone,products) => async dispatch => {
    console.log("send action")
    console.log("address: " + address);
    console.log("phone: " + phone);
    const items = products.map(item=>{
        const type = item.type === "2" ? "קקאו" : " ";
        const fill = !item.myFill? "ללא מילוי" : item.myFill === 1 ? "מריר" : item.myFill === 2 ? "חלב" : item.myFill === 3 ? "לבן" : "ללא מילוי"
        return  item['sum'] + " " + item['name'] + " " +type + " " +fill + " ";
    })
    console.log(items.join())
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }

    const {data} = await axios.post('http://localhost:4001/order',{userName,address,phone,items},config);
    console.log(data);
    if(data.status === "200"){
        dispatch({
            type: SEND_ORDER
        })
    }
}*/
