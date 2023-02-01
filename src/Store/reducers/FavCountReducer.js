const InitialValue ={
    count: 0
}

export default function FavCountReducer(state = InitialValue, action ){
    switch(action.type){
        case "ChangeFavCount": 
            return {
                ...state,
               count: action.payload
            }
        default: 
            return state
    }
}