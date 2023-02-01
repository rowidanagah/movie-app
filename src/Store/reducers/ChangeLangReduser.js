
const InitialValue ={
    lang: "en"
}

export default function ChangeLangReduser(state = InitialValue, action ){
    switch(action.type){
        case "ChangeLang": 
            return {
                ...state,
               lang: action.payload
            }
        default: 
            return state
    }
}