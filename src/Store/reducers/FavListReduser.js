
const InitialValue ={
    favLst: [16535, 86938, 597, 945657]
}

export default function FavListReduser(state = InitialValue, action ){
    switch(action.type){
        case "ChangeFavLst": 
            return {
                ...state,
                favLst: action.payload
            }
        default: 
            return state
    }
}