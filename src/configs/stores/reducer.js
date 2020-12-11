import { combineReducers } from 'redux'
// ---
import appStore from '~/modules/app/composeReducer'
import authStore from '~/modules/auth/composeReducer'
import blogStore from '~/modules/blog/composeReducer'
// ---

const mapReducer = combineReducers({
	appStore,
	authStore,
	blogStore,
})

const rootReducer = (state, action) => {
	return mapReducer(state, action)
}

export default rootReducer
