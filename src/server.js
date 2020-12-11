import express from 'express'
import { render } from '@jaredpalmer/after'
const cookiesMiddleware = require('universal-cookie-express')
// ---
import { th, en } from './configs/locales'
import routes from './views'
import Document from './Document'
import configureStore from './configs/stores/configureStore'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)
const chunks = require(process.env.RAZZLE_CHUNKS_MANIFEST)

import i18n from 'i18next'
import {
	useTranslation,
	initReactI18next,
} from 'react-i18next'
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
		lng: 'th',
		fallbackLng: 'th',

		interpolation: {
			escapeValue: false,
		},
	})

const server = express()
server
	.disable('x-powered-by')
	.use(express.static(process.env.RAZZLE_PUBLIC_DIR))
	.use(cookiesMiddleware())
	.get('/*', async (req, res) => {
		const { cookies } = req.universalCookies
		if (cookies && cookies.lang) {
			i18n.changeLanguage(cookies.lang)
		}
		const { store, persistor } = configureStore()
		try {
			const html = await render({
				req,
				res,
				routes,
				assets,
				chunks,
				document: Document,
				store,
				persistor,
			})
			res.send(html)
		} catch (error) {
			console.error(error)
			res.json({
				message: error.message,
				stack: error.stack,
			})
		}
	})

export default server
