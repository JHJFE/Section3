import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {
  // state 이전에 가진 Item 정보(item, cartItem 모두 포함)

  switch (action.type) {
    case ADD_TO_CART: //{ items: [{}] ,cartItems: [{}]  }
      //TODO 아마 그냥 담고 넘기면 알아서 해주는 듯
      return Object.assign({}, state, {
        cartItems: [...state.cartItems, action.payload]
      })

    case REMOVE_FROM_CART:
      //TODO
      let removed = state.cartItems.filter((el) => el.itemId !== action.payload.itemId)
      
      console.log(state)
      return {
        ...state,
        cartItems: [...removed]
      }

    case SET_QUANTITY:
      let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId) // inx 증감 눌러준에 요소 Idex 인듯
      //TODO
      let newCart =[...state.cartItems] // cart배열 깊은 복사
      newCart.splice(idx, 1, action.payload) // Idx 자리의 값 하나 지우고 payload로 대체 {idItem,quantity}

       return {
        ...state,
        cartItems: [...newCart]
      }
    
     
    default:
      return state;
  }
}

export default itemReducer;