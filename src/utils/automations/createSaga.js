import {
	all,
	takeEvery,
	take,
	put,
	select,
	takeLatest,
	call,
	cancel,
	fork,
} from 'redux-saga/effects'
import axios from 'axios'
import reduce from 'lodash/reduce'
// ---
// import endpoints from '~/configs/endpoints'
// import { HOSTNAME } from '~/config/hostname'

const restApi = async ({
	params,
	headerParams,
	headers,
	service,
	fullService,
	responseType = 'json',
	responseEncoding = 'utf8',
	method,
	auth,
	body,
}) => {
	try {
		let setRequest = {
			method: method,
			// url: fullService
			// 	? fullService
			// 	: `${endpoints.config.API_URL}${service}`,
			// headers: {
			// 	Accept: 'application/json',
			// },
			responseType,
			responseEncoding,
		}

		if (headers) {
			setRequest.headers = headers
		}

		if (auth) {
			setRequest.auth = auth
		}

		if (params) {
			setRequest.data = params
		}

		if (body) {
			setRequest.data = body
		}

		if (headerParams) {
			setRequest.params = headerParams
		}

		// console.log('fullService', setRequest)
		const response = await axios(setRequest)
		// const { data } = response

		return response
	} catch (error) {
		throw new Error(
			error.response &&
			error.response.data &&
			error.response.data.code
				? error.response.data.code
				: error
		)
	}
}

export const composeSaga = (sagas) =>
	createSaga((options) => {
		const reduceSagas = reduce(
			sagas,
			(prev, curr) => {
				if (curr[0] && curr[1]) {
					prev.push(takeEvery(curr[0], curr[1], options))
				}
				return prev
			},
			[]
		)
		return reduceSagas
	})

const createSaga = (getSagas) =>
	function* saga(...args) {
		const sagas = getSagas(...args, {
			restApi,
		})
		return yield all(sagas)
	}

export default createSaga
