import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
// ---
import reducer from './reducer'
import sagas from './sagas'
// ---

const persistConfig = {
	key: 'root',
	storage,
	blackList: [],
	whitelist: [],
}

const persistedReducer = persistReducer(
	persistConfig,
	reducer
)

const configureStore = (preloadedState) => {
	const sagaMiddleware = createSagaMiddleware()

	const devTools =
		process.env.NODE_ENV === 'production'
			? applyMiddleware(sagaMiddleware)
			: composeWithDevTools(applyMiddleware(sagaMiddleware))

	const store = createStore(persistedReducer, devTools)
	const persistor = persistStore(store)

	sagaMiddleware.run(sagas)

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('./reducer', () => {
			const nextRootReducer = require('./reducer').default
			store.replaceReducer(nextRootReducer)
		})
	}

	return { store, persistor }
}

export default configureStore
