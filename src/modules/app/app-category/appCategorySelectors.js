import { createSelector } from 'reselect'
// ----
export const appCategorySelect = (store) =>
	store.appStore.appCategory

export const categoriesSelector = createSelector(
	appCategorySelect,
	(appCategory) => appCategory.categories
)

export const isFirstLoadingCategorySelector = createSelector(
	appCategorySelect,
	(appCategory) => appCategory.isFirstLoadingCategory
)

export const isLoadingCategorySelector = createSelector(
	appCategorySelect,
	(appCategory) => appCategory.isLoadingCategory
)

export default {
	appCategorySelect,
	categoriesSelector,
	isFirstLoadingCategorySelector,
	isLoadingCategorySelector,
}
