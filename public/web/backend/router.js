
import App                  from './src/views/main.vue'
import notFound             from './src/views/error_pages/404.vue'          // 未开放模块

const routes = [
	{ 
		path: '/', 
		component: App,
		children: [
			{
				path: '/',
				// component : homePage
			},
			{
				path: '*',
				component : notFound
			}
		]
	}
];
export default routes