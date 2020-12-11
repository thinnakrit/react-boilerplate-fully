import isEqual from 'lodash/isEqual'
import {
	createSelectorCreator,
	defaultMemoize,
} from 'reselect'
// create a "selector creator" that uses lodash.isEqual instead of ===
export const createDeepEqualSelector = createSelectorCreator(
	defaultMemoize,
	isEqual
)

export default (select) => (store) => {
	const getSelect = Object.keys(select).reduce(
		(prev, curr) => {
			// console.log('select', select[curr](store))
			// if (select[curr](store)) {
			return {
				...prev,
				[curr]: select[curr](store),
			}
			// }
			// return prev
		},
		{}
	)
	// console.log('getSelect', getSelect)
	return getSelect
}
