 import { ADD_TO_CART } from "../constants";

const initialstate = {
    cardData :  []
}

 export default function Carditem (state = [],action) {
    switch(action.type){
        case ADD_TO_CART :
        return [

            ...state,
        {cardData : action.data}
        ]
    
    
    default:
        return state
    }
}