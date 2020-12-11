import createAction from '~/utils/automations/createAction'
// ---
import types from './blogContentActionTypes'

export default createAction({
	getPost: types.GET_POST,
})
