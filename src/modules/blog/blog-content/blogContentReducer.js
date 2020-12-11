import types from './blogContentActionTypes'
// ---
export const initialState = {
	exampleValue: undefined,
	isLoadingValue: false,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_POST: {
			return {
				...state,
				isLoadingValue: true,
			}
		}
		case types.GET_POST_SUCCESS: {
			return {
				...state,
				exampleValue: action.payload.exampleValue,
				isLoadingValue: false,
			}
		}
		case types.GET_POST_FAIL: {
			return {
				...state,
				isLoadingValue: false,
			}
		}
		default:
			return state
	}
}
