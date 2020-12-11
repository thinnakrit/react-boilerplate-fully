import { fork } from 'redux-saga/effects'
// ---
import createSaga from '~/utils/automations/createSaga'
// ---
import { sagas as authCoreSagas } from './auth-core'
// ---
export default createSaga((...ctx) => [
	fork(authCoreSagas, ...ctx),
])
