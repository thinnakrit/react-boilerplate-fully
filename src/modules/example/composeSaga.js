import { fork } from 'redux-saga/effects'
// ---
import createSaga from '~/utils/automations/createSaga'
// ---
import { sagas as exampleCoreSagas } from './example-core'
// ---
export default createSaga((...ctx) => [
	fork(exampleCoreSagas, ...ctx),
])
