const ADD_TO_CART = 'DAUNKU/SHOPPING_CART_REDUCER/ADD_TO_CART'
const REMOVE_FROM_CART = 'DAUNKU/SHOPPING_CART_REDUCER/REMOVE_FROM_CART'

const initialState = {
  cartItems: ['lorem ipsum'] as string[],
}

export type ShoppingCartReducerState = typeof initialState

type Action = AddToCartAction | RemoveFromCartAction

const shoppingCartReducer = (state = initialState, action: Action): ShoppingCartReducerState => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((element: string) => {
          if (element !== action.payload) return element
        }),
      }
    default:
      return state
  }
}

type AddToCartAction = { type: typeof ADD_TO_CART; payload: string }
export const addToCart = (payload: string) => ({
  type: ADD_TO_CART,
  payload,
})

type RemoveFromCartAction = { type: typeof REMOVE_FROM_CART; payload: string }
export const removeFromCart = (payload: string) => ({
  type: REMOVE_FROM_CART,
  payload,
})

export default shoppingCartReducer
