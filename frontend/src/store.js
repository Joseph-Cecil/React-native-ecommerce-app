import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import {productDetailsReducer, productReducer} from "./reducers/productReducer"
import { forgotPasswordReducer, profileReducer, userReducer } from "./reducers/userReducer";
import {cartReducer} from "./reducers/cartReducer";

const reducer = combineReducers({
    products:productReducer,
    productDetails:productDetailsReducer,
    user:userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,

});

// let initialState={
//     cart: {
//         cartItems: localStorage.getItem("cartItems")
//         ? JSON.parse(localStorage.getItem("cartItems"))
//         : [],

//         deliveryInfo: localStorage.getItem("deliveryInfo")
//         ? JSON.parse(localStorage.getItem("deliveryInfo"))
//         : {},
//     },
    
// };

const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;