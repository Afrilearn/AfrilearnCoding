import { combineReducers } from "redux";
import { persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";

import registerReducer from "./reducers/registerReducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["registerUser"]
}

const rootReducer = combineReducers({
   registerUser: registerReducer,
});

export default persistReducer(persistConfig, rootReducer)