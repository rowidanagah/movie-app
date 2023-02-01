
const InitialValue ={
    fav: "false"
}

export default function FavIconReducer(state = InitialValue, action ){
   
    switch(action.type){
        case "ChangeFavIcon": 
            return {
                ...state,
               fav: action.payload
            }
        default: 
            return state
    }
}