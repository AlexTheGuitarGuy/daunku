import { RootState } from './store'

export const getCartItems = (state: RootState): string[] => {
  return state.shoppingCart.cartItems
}
