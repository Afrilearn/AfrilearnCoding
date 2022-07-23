import { combineReducers } from "redux";
import { persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import loginReducer from "./reducers/loginReducer";
import paymentReducer from "./reducers/paymentReducer";

import registerReducer from "./reducers/registerReducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["registerUser", "loginUser", "payMe"]
}

const rootReducer = combineReducers({
   registerUser: registerReducer,
   loginUser: loginReducer,
   payMe: paymentReducer
});

export default persistReducer(persistConfig, rootReducer)