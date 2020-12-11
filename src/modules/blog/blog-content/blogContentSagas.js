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
import types from './blogContentActionTypes'
import actions from './blogContentActions'
import services from './blogContentServices'
// ---
export function* getPost({ restApi }, action) {
	try {
		const {
			payload: { accessToken, refreshToken },
		} = action
		console.log('getPostSuccess')
		yield put(actions.getPostSuccess())
	} catch (error) {
		yield put(actions.getPostFail(error.message))
	}
}

export default composeSaga([
	//
	[types.GET_POST, getPost],
])
