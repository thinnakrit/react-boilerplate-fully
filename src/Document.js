import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import {
	AfterRoot,
	AfterData,
	AfterScripts,
	AfterStyles,
	SerializeData,
	__AfterContext,
} from '@jaredpalmer/after'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ScreenClassProvider } from 'react-grid-system'
// ---

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)
// ---
const scripts = Object.keys(assets)
	.map((key) => {
		const script = assets[key].js

		if (typeof script === 'undefined' || script === null) {
			return null
		}

		if (Array.isArray(script)) {
			return script.reduce((prev, curr) => {
				prev.push(<script src={curr}></script>)
				return prev
			}, [])
		}

		return <script src={script}></script>
	})
	.filter((a) => typeof a !== 'undefined' || a !== null)

const styles = Object.keys(assets)
	.map((key) => {
		const style = assets[key].css

		if (typeof style === 'undefined' || style === null) {
			return null
		}

		if (Array.isArray(style)) {
			return style.reduce((prev, curr) => {
				prev.push(<link rel="stylesheet" href={curr} />)
				return prev
			}, [])
		}

		return <link rel="stylesheet" href={style} />
	})
	.filter((a) => typeof a !== 'undefined' || a !== null)

class Document extends React.Component {
	static async getInitialProps({
		req,
		renderPage,
		store,
		persistor,
	}) {
		const sheet = new ServerStyleSheet()

		const page = await renderPage((App) => (props) => {
			return sheet.collectStyles(
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<ScreenClassProvider>
							<App {...props} />
						</ScreenClassProvider>
					</PersistGate>
				</Provider>
			)
		})

		const styleTags = sheet.getStyleElement()
		return { ...page, styleTags }
	}

	render() {
		const { helmet, styleTags } = this.props
		// get attributes from React Helmet
		const htmlAttrs = helmet.htmlAttributes.toComponent()
		const bodyAttrs = helmet.bodyAttributes.toComponent()

		return (
			<html {...htmlAttrs}>
				<head>
					<meta
						httpEquiv="X-UA-Compatible"
						content="IE=edge"
					/>
					<meta charSet="utf-8" />
					<title>Welcome to the Afterparty</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					{helmet.title.toComponent()}
					{helmet.meta.toComponent()}
					{helmet.link.toComponent()}
					{/* here is where we put our Styled Components styleTags... */}
					{styleTags}

					{/* {assets.client.css && (
						<link
							rel="stylesheet"
							href={assets.client.css}
						/>
					)} */}
				</head>
				<body {...bodyAttrs}>
					<AfterRoot />
					<AfterData />
					<ReduxData />
					{/* <AfterStyles /> */}
					{/* <AfterScripts /> */}
					{styles}
					{scripts}
				</body>
			</html>
		)
	}
}

function ReduxData() {
	const { store } = React.useContext(__AfterContext)
	return (
		<SerializeData
			name="preloaded_state"
			data={store.getState()}
		/>
	)
}

export default Document
