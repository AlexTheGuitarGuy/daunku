const SET_IS_MOBILE = 'DAUNKU/APP_REDUCER/SET_IS_MOBILE'

const initialState = {
  isMobile: false,
}

export type AppReducerState = typeof initialState

type Action = SetIsMobileAction

const appReducer = (state = initialState, action: Action): AppReducerState => {
  switch (action.type) {
    case SET_IS_MOBILE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

type SetIsMobileAction = { type: typeof SET_IS_MOBILE; payload: { isMobile: boolean } }
export const setIsMobile = (isMobile: boolean) => ({
  type: SET_IS_MOBILE,
  payload: { isMobile },
})

export default appReducer
