import { combineReducers } from "redux";
import FavCountReducer from "../reducers/FavCountReducer";
import FavListReduser from "../reducers/FavListReduser";
import FavIconReducer from "../reducers/FavIconReducer";
import ChangeLangReduser from "../reducers/ChangeLangReduser"
import LoaderReducer from "../reducers/LoaderReducer";


export default combineReducers({
    Rfavicon: FavIconReducer,
    RfavCount : FavCountReducer,
    RfavLst : FavListReduser,
    Rlang : ChangeLangReduser,
    Rloader: LoaderReducer

})

