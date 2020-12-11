import reduce from 'lodash/reduce'
import times from 'lodash/times'
import forEach from 'lodash/forEach'
// ---
export const types = {
	request: 'request',
	success: 'success',
	fail: 'fail',
}

export const request = (type) => {
	return (params) => ({
		type,
		payload: {
			...params,
		},
	})
}

export const success = (type) => {
	return (data) => ({
		type,
		payload: {
			...data,
		},
	})
}

export const fail = (type) => {
	return (error) => ({
		type,
		payload: {
			error,
		},
	})
}

export default (actions) => {
	const renderActions = reduce(
		actions,
		(prev, curr, currIndex) => {
			const createTypes = times(3, String)
			forEach(createTypes, (value) => {
				if (value === '0') {
					prev[currIndex] = request(curr)
				} else if (value === '1') {
					prev[`${currIndex}Success`] = success(
						`${curr}_SUCCESS`
					)
				} else if (value === '2') {
					prev[`${currIndex}Fail`] = fail(`${curr}_FAIL`)
				}
			})
			return prev
		},
		{}
	)
	return renderActions
}
