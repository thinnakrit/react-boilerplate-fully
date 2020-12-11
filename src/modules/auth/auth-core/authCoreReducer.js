import types from './authCoreActionTypes'
// ---
export const initialState = {
	userID: undefined,
	isAuthentication: false,
	isCheckExitUser: false,
	isExitUser: false,

	isAuth: false,
	accessToken: undefined,

	isLoadingSignout: false,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.EMAIL_AUTH: {
			return {
				...state,
				isAuthentication: true,
			}
		}
		case types.EMAIL_AUTH_SUCCESS: {
			return {
				...state,
				isExitUser: action.payload.isExitUser,
				isCheckExitUser: true,
				isAuthentication: false,
			}
		}
		case types.EMAIL_AUTH_FAIL: {
			return {
				...state,
				isExitUser: false,
				isCheckExitUser: false,
				isAuthentication: false,
			}
		}

		case types.EMAIL_SIGNIN: {
			return {
				...state,
				isAuthentication: true,
			}
		}
		case types.EMAIL_SIGNIN_SUCCESS: {
			return {
				...state,
				isAuthentication: false,
				isAuth: action.payload.isAuth,
				accessToken: action.payload.accessToken,
			}
		}
		case types.EMAIL_SIGNIN_FAIL: {
			return {
				...state,
				isAuthentication: false,
			}
		}

		case types.SIGNOUT: {
			return {
				...state,
				isLoadingSignout: true,
			}
		}
		case types.SIGNOUT_SUCCESS: {
			return initialState
		}
		case types.SIGNOUT_FAIL: {
			return {
				...state,
				isLoadingSignout: false,
			}
		}

		case types.CANCEL_EMAIL_AUTH: {
			return {
				...state,
				isExitUser: false,
				isCheckExitUser: false,
				isAuthentication: false,
			}
		}
		default:
			return state
	}
}
