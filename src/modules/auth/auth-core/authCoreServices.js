// import endpoints from '~/configs/endpoints'

export const emailAuthService = async ({
	restApi,
	variables,
}) => {
	const { email } = variables
	// return await restApi({
	// 	fullService: `${endpoints.service_version}?uptodate=${generateTime}`,
	// 	method: 'GET',
	// })
	if (email === 'example@mail.com') {
		return {
			isSuccess: true,
			data: {
				isExitUser: true,
			},
		}
	} else {
		return {
			isSuccess: true,
			data: {
				isExitUser: false,
			},
		}
	}
}

export const signinService = async ({
	restApi,
	variables,
}) => {
	const { username, password, authType } = variables
	// return await restApi({
	// 	fullService: `${endpoints.service_version}?uptodate=${generateTime}`,
	// 	method: 'GET',
	// })
	if (
		authType === 'EMAIL' &&
		username === 'example@mail.com' &&
		password === 'password'
	) {
		return {
			isSuccess: true,
			data: {
				isAuth: true,
				accessToken: 'abcdefghijklmnopqrstuvwxyz1234567890',
			},
		}
	} else {
		return {
			isSuccess: true,
			data: {
				isAuth: false,
				accessToken: null,
			},
		}
	}
}

export default {
	emailAuthService,
	signinService,
}
