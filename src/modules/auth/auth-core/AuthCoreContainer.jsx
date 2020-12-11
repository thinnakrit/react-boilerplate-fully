import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import PropTypes from 'prop-types'
// --- Import utils
import createSelector from '~/utils/automations/createSelector'
// --- Import modules
// --- Main files
import authCoreSelectors from './authCoreSelectors'
import authCoreActions from './authCoreActions'
// ---
const mapStateToProp = createSelector({
	userID: authCoreSelectors.userIDSelector,
	isAuthentication:
		authCoreSelectors.isAuthenticationSelector,
	isExitUser: authCoreSelectors.isExitUserSelector,
	isCheckExitUser:
		authCoreSelectors.isCheckExitUserSelector,

	isAuth: authCoreSelectors.isAuthSelector,
	accessToken: authCoreSelectors.accessTokenSelector,

	isLoadingSignout:
		authCoreSelectors.isLoadingSignoutSelector,
})

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			onGetEmailAuth: authCoreActions.getEmailAuth,
			onCancelEmailAuth: authCoreActions.cancelEmailAuth,
			onGetEmailSignin: authCoreActions.getEmailSignin,
			onGetEmailSignup: authCoreActions.getEmailSignup,
			onGetSignout: authCoreActions.getSignout,
		},
		dispatch
	)

const AuthCoreContainer = (props) => {
	const handleGetEmailAuth = ({ email }) => {
		const { onGetEmailAuth } = props
		onGetEmailAuth({ email })
	}

	const handleGetEmailSignin = ({ email, password }) => {
		const { onGetEmailSignin } = props
		onGetEmailSignin({ email, password })
	}

	const handleGetEmailSignup = ({ email, password }) => {
		const { onGetEmailSignup } = props
		onGetEmailSignup({ email, password })
	}

	const handleCancelEmailAuth = () => {
		const { onCancelEmailAuth } = props
		onCancelEmailAuth()
	}

	const handleGetSignout = () => {
		const { onGetSignout } = props
		onGetSignout()
	}

	useEffect(() => {
		const { closable, isAuth, toggle } = props
		if (closable && isAuth && toggle) {
			toggle()
		}
	})

	const {
		render,
		userID,
		isAuthentication,
		isExitUser,
		isCheckExitUser,

		isAuth,
		accessToken,

		isLoadingSignout,
	} = props

	return render({
		// --- state
		// --- props
		isAuth,
		accessToken,
		userID,
		isAuthentication,
		isExitUser,
		isCheckExitUser,
		isLoadingSignout,
		// --- function
		onGetEmailAuth: handleGetEmailAuth,
		onCancelEmailAuth: handleCancelEmailAuth,
		onGetEmailSignin: handleGetEmailSignin,
		onGetEmailSignup: handleGetEmailSignup,
		onGetSignout: handleGetSignout,
	})
}

AuthCoreContainer.propTypes = {
	render: PropTypes.func.isRequired,

	onGetEmailAuth: PropTypes.func,
	onGetEmailSignin: PropTypes.func,
	onGetEmailSignup: PropTypes.func,
	onGetSignout: PropTypes.func,

	userID: PropTypes.string,
	isAuthentication: PropTypes.bool,
	isExitUser: PropTypes.bool,
	isCheckExitUser: PropTypes.bool,
	isAuth: PropTypes.bool,
	isLoadingSignout: PropTypes.bool,
	accessToken: PropTypes.string,
}

export default compose(
	connect(mapStateToProp, mapDispatchToProps)
)(AuthCoreContainer)
