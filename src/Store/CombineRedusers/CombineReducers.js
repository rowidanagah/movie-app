import { combineReducers } from "redux";
import FavCountReducer from "../reducers/FavCountReducer";
import FavListReduser from "../reducers/FavListReduser";
import FavIconReducer from "../reducers/FavIconReducer";
import ChangeLangReduser from "../reducers/ChangeLangReduser"


export default combineReducers({
    Rfavicon: FavIconReducer,
    RfavCount : FavCountReducer,
    RfavLst : FavListReduser,
    Rlang : ChangeLangReduser
})

