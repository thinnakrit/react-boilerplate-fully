import { createSelector } from 'reselect'
// ----
export const authCoreSelect = (store) =>
	store.authStore.authCore

export const userIDSelector = createSelector(
	authCoreSelect,
	(authCore) => authCore.userID
)

export const isAuthenticationSelector = createSelector(
	authCoreSelect,
	(authCore) => authCore.isAuthentication
)

export const isExitUserSelector = createSelector(
	authCoreSelect,
	(authCore) => authCore.isExitUser
)

export const isCheckExitUserSelector = createSelector(
	authCoreSelect,
	(authCore) => authCore.isCheckExitUser
)

export const isAuthSelector = createSelector(
	authCoreSelect,
	(authCore) => authCore.isAuth
)

export const accessTokenSelector = createSelector(
	authCoreSelect,
	(authCore) => authCore.accessToken
)

export const isLoadingSignoutSelector = createSelector(
	authCoreSelect,
	(authCore) => authCore.isLoadingSignout
)

export default {
	authCoreSelect,
	userIDSelector,
	isAuthenticationSelector,
	isExitUserSelector,
	isCheckExitUserSelector,
	isAuthSelector,
	accessTokenSelector,
	isLoadingSignoutSelector,
}
