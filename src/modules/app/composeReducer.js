import { combineReducers } from 'redux'
// --
import { reducer as appCategoryReducer } from './app-category'

export default combineReducers({
	appCategory: appCategoryReducer,
})
