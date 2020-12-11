import { fork } from 'redux-saga/effects'
// ---
import createSaga from '~/utils/automations/createSaga'
// ---
import appSagas from '~/modules/app/composeSaga'
import authSagas from '~/modules/auth/composeSaga'
import blogSagas from '~/modules/blog/composeSaga'
// ---
export default createSaga((...ctx) => [
	fork(appSagas, ...ctx),
	fork(authSagas, ...ctx),
	fork(blogSagas, ...ctx),
])
