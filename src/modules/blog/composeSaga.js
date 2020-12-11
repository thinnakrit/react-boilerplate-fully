import { fork } from 'redux-saga/effects'
// ---
import createSaga from '~/utils/automations/createSaga'
// ---
import { sagas as blogContentSagas } from './blog-content'
// ---
export default createSaga((...ctx) => [
	fork(blogContentSagas, ...ctx),
])
