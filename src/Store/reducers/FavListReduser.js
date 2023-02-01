
const InitialValue ={
    favLst: []
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