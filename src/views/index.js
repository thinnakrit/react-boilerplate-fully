import concat from 'lodash/concat'
// ---
import auth from './auth'
import main from './main'
import blog from './blog'
// ---

const routes = concat(auth, main, blog)

export default routes
