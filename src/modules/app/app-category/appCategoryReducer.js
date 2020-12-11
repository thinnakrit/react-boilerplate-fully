import types from './appCategoryActionTypes'
// ---
export const initialState = {
	isFirstLoadingCategory: true,
	isLoadingCategory: false,
	categories: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_CATEGORY: {
			return {
				...state,
				isLoadingCategory: true,
			}
		}
		case types.GET_CATEGORY_SUCCESS: {
			return {
				...state,
				categories: action.payload.categories,
				isFirstLoadingCategory: true,
				isLoadingCategory: false,
			}
		}
		case types.GET_CATEGORY_FAIL: {
			return {
				...state,
				isFirstLoadingCategory: true,
				isLoadingCategory: false,
			}
		}
		default:
			return state
	}
}
