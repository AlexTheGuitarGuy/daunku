import { RootState } from './store'
import { NavItem } from '../types/types'

export const getNavItems = (state: RootState): NavItem[] => {
  return state.navbar.navItems
}
