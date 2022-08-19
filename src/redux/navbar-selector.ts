import { NavItem } from '../types/types'
import { RootState } from './store'

export const getNavItems = (state: RootState): NavItem[] => {
  return state.navbar.navItems
}
