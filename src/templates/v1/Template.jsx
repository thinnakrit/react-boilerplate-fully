import React, { Fragment } from 'react'
import { setConfiguration } from 'react-grid-system'
// ---
import {
	breakpoints,
	containerWidths,
	defaultScreenClass,
	gridColumns,
	gutterWidth,
	maxScreenClass,
} from '~/configs/layout'
// ---
import 'swiper/swiper.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'

// ---
import Header from './Header'
import Menu from './Menu'
import Body from './Body'
import Footer from './Footer'
// ---
import './styles/style.scss'
// ---
export default ({
	// ---
	contentRender,
}) => {
	setConfiguration({
		breakpoints,
		containerWidths,
		defaultScreenClass,
		gridColumns,
		gutterWidth,
		maxScreenClass,
	})
	return (
		<Fragment>
			<Header />
			<Menu />
			<Body contentRender={contentRender} />
			<Footer />
		</Fragment>
	)
}
