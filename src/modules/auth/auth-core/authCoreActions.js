import createAction from '~/utils/automations/createAction'
// ---
import types from './authCoreActionTypes'

export default createAction({
	getEmailAuth: types.EMAIL_AUTH,
	cancelEmailAuth: types.CANCEL_EMAIL_AUTH,
	getEmailSignin: types.EMAIL_SIGNIN,
	getEmailSignup: types.EMAIL_SIGNUP,

	getSignout: types.SIGNOUT,
})
