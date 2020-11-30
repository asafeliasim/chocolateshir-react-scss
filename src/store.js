import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {orderReducer} from "./redux/reducers/orderReucer";
import {userReducer} from "./redux/reducers/userReducers";
import {freezeReducer} from "./redux/reducers/feezeReducers";
import {freshReducer} from "./redux/reducers/freshReucer";

const middleware = [thunk];

const reducers = combineReducers({
    user:userReducer,
    freeze: freezeReducer,
    fresh:freshReducer,
    order:orderReducer
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware)
    ))

export default store;
