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
import types from './exampleCoreActionTypes'
import actions from './exampleCoreActions'
import services from './exampleCoreServices'
// ---
export function* getData({ restApi }, action) {
	try {
		const {
			payload: { accessToken, refreshToken },
		} = action
		yield put(
			actions.getDataSuccess({
				exampleValue: 'test',
			})
		)
	} catch (error) {
		yield put(actions.getDataFail(error.message))
	}
}

export default composeSaga([
	//
	[types.GET_DATA, getData],
])
