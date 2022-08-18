import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import navbarReducer from './navbar-reducer'
import shoppingCartReducer from './shopping-cart-reducer'
import appReducer from './app-reducer'

const reducers = combineReducers({
  navbar: navbarReducer,
  shoppingCart: shoppingCartReducer,
  app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.__store__ = store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
