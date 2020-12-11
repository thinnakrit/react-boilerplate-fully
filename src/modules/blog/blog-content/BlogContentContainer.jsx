import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import PropTypes from 'prop-types'
// --- Import utils
import createSelector from '~/utils/automations/createSelector'
// --- Import modules
// --- Main files
import blogContentSelectors from './blogContentSelectors'
import blogContentActions from './blogContentActions'
// ---
const mapStateToProp = createSelector({})

const mapDispatchToProps = (dispatch) =>
	bindActionCreators({}, dispatch)

const BlogContentContainer = (props) => {
	const { render } = props

	return render({
		// --- state
		// --- props
		// --- function
	})
}

BlogContentContainer.propTypes = {
	render: PropTypes.func.isRequired,
}

export default compose(
	connect(mapStateToProp, mapDispatchToProps)
)(BlogContentContainer)
