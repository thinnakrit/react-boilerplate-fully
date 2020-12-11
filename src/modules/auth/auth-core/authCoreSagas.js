import {
	call,
	takeEvery,
	put,
	select,
	all,
} from 'redux-saga/effects'
//  IMPORT SAGAS UTIL
import { composeSaga } from '~/utils/automations/createSaga'
//  IMPORT MAIN FILE
import types from './authCoreActionTypes'
import actions from './authCoreActions'
import services from './authCoreServices'
// ---
export function* getEmailAuth({ restApi }, action) {
	try {
		const {
			payload: { email },
		} = action
		const emailAuthServiceResponse = yield call(
			services.emailAuthService,
			{
				restApi,
				variables: {
					email,
				},
			}
		)
		if (
			emailAuthServiceResponse &&
			emailAuthServiceResponse.isSuccess
		) {
			yield put(
				actions.getEmailAuthSuccess({
					isExitUser:
						emailAuthServiceResponse.data.isExitUser,
				})
			)
		}
	} catch (error) {
		yield put(actions.getEmailAuthFail(error.message))
	}
}

export function* getEmailSignin({ restApi }, action) {
	try {
		const {
			payload: { email, password },
		} = action
		const signinServiceResponse = yield call(
			services.signinService,
			{
				restApi,
				variables: {
					username: email,
					password: password,
					authType: 'EMAIL',
				},
			}
		)
		if (
			signinServiceResponse &&
			signinServiceResponse.isSuccess
		) {
			yield put(
				actions.getEmailSigninSuccess({
					isAuth: signinServiceResponse.data.isAuth,
					accessToken:
						signinServiceResponse.data.accessToken,
				})
			)
		}
	} catch (error) {
		yield put(actions.getEmailSigninFail(error.message))
	}
}

export function* getSignout({ restApi }, action) {
	try {
		yield put(actions.getSignoutSuccess())
	} catch (error) {
		yield put(actions.getSignoutFail(error.message))
	}
}

export default composeSaga([
	//
	[types.EMAIL_AUTH, getEmailAuth],
	[types.EMAIL_SIGNIN, getEmailSignin],
	[types.SIGNOUT, getSignout],
])
