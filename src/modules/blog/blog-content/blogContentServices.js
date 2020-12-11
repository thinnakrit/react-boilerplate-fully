// import endpoints from '~/configs/endpoints'

export const exampleService = async ({
	restApi,
	authHeader,
	variables,
}) => {
	const { generateTime } = variables
	// return await restApi({
	// 	fullService: `${endpoints.service_version}?uptodate=${generateTime}`,
	// 	method: 'GET',
	// })
	return {}
}

export default {
	exampleService,
}
