import { call, put } from 'redux-saga/effects'
//  IMPORT SAGAS UTIL
import { composeSaga } from '~/utils/automations/createSaga'
//  IMPORT MAIN FILE
import types from './appCategoryActionTypes'
import actions from './appCategoryActions'
import services from './appCategoryServices'
// ---
export function* getCategory({ restApi }, action) {
	try {
		const getCategoryServiceResponse = yield call(
			services.getCategoryService
		)
		if (
			getCategoryServiceResponse &&
			getCategoryServiceResponse.isSuccess
		) {
			yield put(
				actions.getCategorySuccess({
					categories: getCategoryServiceResponse.data,
				})
			)
		}
	} catch (error) {
		yield put(actions.getCategoryFail(error.message))
	}
}

export default composeSaga([
	//
	[types.GET_CATEGORY, getCategory],
])
