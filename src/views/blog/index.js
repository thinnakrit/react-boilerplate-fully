import BlogListViiew from './BlogListViiew'
import ReadBlogView from './ReadBlogView'
// ---

const routes = [
	{
		path: '/blog',
		exact: true,
		component: BlogListViiew,
	},
	{
		path: '/blog/:postID',
		exact: true,
		component: ReadBlogView,
	},
]

export default routes
