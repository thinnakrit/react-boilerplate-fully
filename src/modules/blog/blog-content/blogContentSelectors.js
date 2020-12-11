import { createSelector } from 'reselect'
// ----
export const blogContentSelect = (store) =>
	store.blogStore.blogContent

export const blogValueSelector = createSelector(
	blogContentSelect,
	(blogContent) => blogContent.blogValue
)

export default {
	blogContentSelect,
	blogValueSelector,
}
