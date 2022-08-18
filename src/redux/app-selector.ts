import { RootState } from './store'

export const getIsMobile = (state: RootState): boolean => {
  return state.app.isMobile
}
