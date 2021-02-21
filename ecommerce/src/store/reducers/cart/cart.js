import { ADD_TO_CART, CLEAN_CART, REMOVE_ITEM } from '../../actions/actionsType'

const initialState = {
  cart: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:

      return{
         ...state, cart: [...state.cart, action.payload]
        }
    case CLEAN_CART:
      alert('oi')
      return initialState

    case REMOVE_ITEM:
      const newCart = []
      state.cart.forEach(item => {
        if(item.id!==action.payload.id){
          newCart.push(item)
        }
      })
      return {
        ...state, cart:newCart
      }
    default:
      return state
  }
}
export default reducer