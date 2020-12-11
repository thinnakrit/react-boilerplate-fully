import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {
	ensureReady,
	After,
	getSerializedData,
} from '@jaredpalmer/after'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
// ---
import { th, en } from './configs/locales'
import configureStore from './configs/stores/configureStore'
import routes from './views'
import Cookies from 'universal-cookie'
import i18n from 'i18next'
import {
	useTranslation,
	initReactI18next,
} from 'react-i18next'

const cookies = new Cookies()

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: {
			en: {
				translation: en,
			},
			th: {
				translation: th,
			},
		},
		lng: cookies.get('lang') ? cookies.get('lang') : 'th',
		fallbackLng: cookies.get('lang')
			? cookies.get('lang')
			: 'th',

		interpolation: {
			escapeValue: false,
		},
	})

const preloadedState = getSerializedData('preloaded_state')
const { store, persistor } = configureStore(preloadedState)

const renderApp = () => {
	ensureReady(routes).then((data) =>
		hydrate(
			<BrowserRouter>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<After
							data={data}
							routes={routes}
							store={store}
						/>
					</PersistGate>
				</Provider>
			</BrowserRouter>,
			document.getElementById('root')
		)
	)
}

renderApp()

if (module.hot) {
	module.hot.accept('./views', renderApp)
}
