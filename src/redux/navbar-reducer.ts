import { NavItem } from '../types/types'

const initialState = {
  navItems: [
    { id: 1, to: '/home', text: 'Home' },
    { id: 2, to: '/shop', text: 'Shop' },
    { id: 3, to: '/about-us', text: 'About Us' },
    { id: 4, to: '/contacts', text: 'Contacts' },
  ] as NavItem[],
}

export type NavbarReducerState = typeof initialState

type Action = {
  type: string
}

const navbarReducer = (state = initialState, action: Action): NavbarReducerState => {
  switch (action.type) {
    default:
      return state
  }
}

export default navbarReducer
