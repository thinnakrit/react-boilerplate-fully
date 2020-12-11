import reduce from 'lodash/reduce'
import urljoin from 'url-join'
import times from 'lodash/times'
import forEach from 'lodash/forEach'
// ---

export default (path, types) => {
	return reduce(
		types,
		(prev, curr) => {
			const createTypes = times(3, String)
			forEach(createTypes, (value) => {
				if (value === '0') {
					prev[curr] = urljoin(path, curr)
				} else if (value === '1') {
					prev[`${curr}_SUCCESS`] = urljoin(
						path,
						`${curr}_SUCCESS`
					)
				} else if (value === '2') {
					prev[`${curr}_FAIL`] = urljoin(
						path,
						`${curr}_FAIL`
					)
				}
			})
			return prev
		},
		{}
	)
}
