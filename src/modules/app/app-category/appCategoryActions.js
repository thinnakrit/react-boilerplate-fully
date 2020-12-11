import createAction from '~/utils/automations/createAction'
// ---
import types from './appCategoryActionTypes'

export default createAction({
	getCategory: types.GET_CATEGORY,
})
