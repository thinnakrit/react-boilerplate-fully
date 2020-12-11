import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// ---
import { reducer as authCoreReducer } from './auth-core'
// ---
// Apply cache
const authCoreCache = {
	key: 'authCore',
	storage: storage,
	whitelist: ['isAuth', 'accessToken'],
}

export default combineReducers({
	authCore: persistReducer(authCoreCache, authCoreReducer),
})
