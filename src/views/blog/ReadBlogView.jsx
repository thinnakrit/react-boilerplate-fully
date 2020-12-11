import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
// ---
import createSelector from '~/utils/automations/createSelector'
import { Template } from '~/templates/v1'
// ---
import {
	container as BlogContentContainer,
	actions as blogContentActions,
} from '~/modules/blog/blog-content'
// ---
const ReadBlogView = (props) => {
	return (
		<Fragment>
			<Template
				contentRender={
					<Fragment>
						<BlogContentContainer
							{...props}
							render={({}) => {
								return <Fragment>ReadBlogView</Fragment>
							}}
						/>
					</Fragment>
				}
			/>
		</Fragment>
	)
}

ReadBlogView.getInitialProps = async (props) => {
	try {
		const { store } = props
		store.dispatch(blogContentActions.getPost())
	} catch (error) {}
}

export default ReadBlogView
