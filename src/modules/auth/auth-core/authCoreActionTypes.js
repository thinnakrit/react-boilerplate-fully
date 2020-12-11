import createActionTypes from '~/utils/automations/createActionTypes'
// ---
const path = 'modules/auth/auth-core'

export default createActionTypes(path, [
	'EMAIL_AUTH',
	'CANCEL_EMAIL_AUTH',
	'EMAIL_SIGNIN',
	'EMAIL_SIGNUP',
	'SIGNOUT',
])
