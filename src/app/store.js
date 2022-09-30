import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import customerAddress from '../reducers/address'

const reducers = combineReducers({
  address: customerAddress,
})

const persitConfig = {
  key: 'root',
  storage,
}
const persitedReducer = persistReducer(persitConfig, reducers)

const store = configureStore({
  reducer: persitedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export default store
