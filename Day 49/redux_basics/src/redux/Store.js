import { createStore, combineReducers } from "redux";

import counterReducer from "./counterReducer";
import authReducer from "./loginReducer";
import themeReducer from "./toggleReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  theme: themeReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

export default store;
