import { ADD_TO_SAVED,REMOVE_ITEM} from './action-types/cart-actions'

//add cart action
export const addToSaved= (id)=>{
    return{
        type: ADD_TO_SAVED,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
