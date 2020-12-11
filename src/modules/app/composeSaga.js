import { fork } from 'redux-saga/effects'
import createSaga from '~/utils/automations/createSaga'
// ---
import { sagas as appCategorySagas } from './app-category'
// ---
export default createSaga((...ctx) => [
	fork(appCategorySagas, ...ctx),
])
