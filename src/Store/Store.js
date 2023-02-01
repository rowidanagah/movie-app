
import { createStore } from "redux";
import CombineReducers from "./CombineRedusers/CombineReducers";

import { composeWithDevTools } from "redux-devtools-extension";
import FavCountReducer from "./reducers/FavCountReducer";

const store = createStore(CombineReducers,  composeWithDevTools());


export default store;