import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// ---
import { reducer as exampleCoreReducer } from './example-core'
// ---
// Apply cache
// const exampleCoreCache = {
// 	key: 'exampleCoreReducer',
// 	storage: storage,
// }

export default combineReducers({
	exampleCore: exampleCoreReducer,
})
