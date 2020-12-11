import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import PropTypes from 'prop-types'
// --- Import utils
import createSelector from '~/utils/automations/createSelector'
// --- Import modules
// --- Main files
import exampleCoreSelectors from './exampleCoreSelectors'
import exampleCoreActions from './exampleCoreActions'
// ---
const mapStateToProp = createSelector({})

const mapDispatchToProps = (dispatch) =>
	bindActionCreators({}, dispatch)

const ExampleCoreContainer = (props) => {
	const { render } = props

	return render({
		// --- state
		// --- props
		// --- function
	})
}

ExampleCoreContainer.propTypes = {
	render: PropTypes.func.isRequired,
}

export default compose(
	connect(mapStateToProp, mapDispatchToProps)
)(ExampleCoreContainer)
