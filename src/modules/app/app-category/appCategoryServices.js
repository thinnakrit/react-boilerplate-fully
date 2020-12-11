// import endpoints from '~/configs/endpoints'

export const getCategoryService = async () => {
	return {
		isSuccess: true,
		data: [
			{
				enum: 'blog',
				name: 'Blog',
				iconName: 'BloggingSvg',
			},
			{
				enum: 'story',
				name: 'Story',
				iconName: 'CopywritingSvg',
			},
			{
				enum: 'shop',
				name: 'Shop',
				iconName: 'OnlineShopSvg',
			},
		],
	}
}

export default {
	getCategoryService,
}
