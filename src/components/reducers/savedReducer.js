// import Item1 from '../../images/item1.jpg'
// import Item2 from '../../images/item2.jpg'
// import Item3 from '../../images/item3.jpg'
// import Item4 from '../../images/item4.jpg'

// import { ADD_TO_CART,REMOVE_ITEM} from '../actions/action-types/cart-actions'


// const initState = {
//     items: [
//         {id:1,title:'Sherlock Holmes', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",img:Item1},
//         {id:2,title:'Wurthering Heights', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",img: Item2},
//         {id:3,title:'Romeo & Juliet', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",img: Item3},
//         {id:4,title:'Snow White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",img:Item4},
        
//     ],
//     addedItems:[],
//     total: 0

// }

import search from "../search"
const cartReducer= (state = search,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
}

export default cartReducer