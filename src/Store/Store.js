
import { applyMiddleware, createStore } from "redux";
import CombineReducers from "./CombineRedusers/CombineReducers";

import { composeWithDevTools } from "redux-devtools-extension";
import FavCountReducer from "./reducers/FavCountReducer";
import thunk from "redux-thunk"



const store = createStore(CombineReducers, composeWithDevTools(applyMiddleware(thunk)));


export default store;