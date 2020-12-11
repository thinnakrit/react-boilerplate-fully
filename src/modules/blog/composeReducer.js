import { combineReducers } from 'redux'
// ---
import { reducer as blogContentReducer } from './blog-content'
// ---
export default combineReducers({
	blogContent: blogContentReducer,
})
