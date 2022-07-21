import { combineReducers } from "redux";
import { persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import loginReducer from "./reducers/loginReducer";

import registerReducer from "./reducers/registerReducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["registerUser", "loginUser"]
}

const rootReducer = combineReducers({
   registerUser: registerReducer,
   loginUser: loginReducer
});

export default persistReducer(persistConfig, rootReducer)