import createActionTypes from '~/utils/automations/createActionTypes'
// ---
const path = 'modules/blog/blog-content'

export default createActionTypes(path, ['GET_POST'])
