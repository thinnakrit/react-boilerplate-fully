import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import PropTypes from 'prop-types'
// --- Import utils
import createSelector from '~/utils/automations/createSelector'
// --- Import modules
// --- Main files
import appCategorySelectors from './appCategorySelectors'
import appCategoryActions from './appCategoryActions'
// ---
const mapStateToProp = createSelector({
	categories: appCategorySelectors.categoriesSelector,
	isFirstLoadingCategory:
		appCategorySelectors.isFirstLoadingCategorySelector,
	isLoadingCategory:
		appCategorySelectors.isLoadingCategorySelector,
})

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			onGetCategory: appCategoryActions.getCategory,
		},
		dispatch
	)

const AppCategoryContainer = (props) => {
	const handleGetCategory = () => {
		const { onGetCategory } = props
		onGetCategory()
	}

	useEffect(() => {
		handleGetCategory()
	}, [])

	const {
		render,
		categories,
		isFirstLoadingCategory,
		isLoadingCategory,
	} = props

	return render({
		// --- state
		// --- props
		categories,
		isFirstLoadingCategory,
		isLoadingCategory,
		// --- function
	})
}

AppCategoryContainer.propTypes = {
	render: PropTypes.func.isRequired,
	onGetCategory: PropTypes.func,
	categories: PropTypes.array,
	isFirstLoadingCategory: PropTypes.bool,
	isLoadingCategory: PropTypes.bool,
}

export default compose(
	connect(mapStateToProp, mapDispatchToProps)
)(AppCategoryContainer)
