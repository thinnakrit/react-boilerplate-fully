import { createSelector } from 'reselect'
// ----
export const exampleCoreSelect = (store) =>
	store.exampleStore.exampleCore

export const exampleValueSelector = createSelector(
	exampleCoreSelect,
	(exampleCore) => exampleCore.exampleValue
)

export default {
	exampleCoreSelect,
	exampleValueSelector,
}
