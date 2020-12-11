import createAction from '~/utils/automations/createAction'
// ---
import types from './exampleCoreActionTypes'

export default createAction({
	getData: types.GET_DATA,
})
