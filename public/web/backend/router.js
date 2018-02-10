
import App                  from './src/views/main.vue'
import notFound             from './src/views/error_pages/404.vue'          // 未开放模块

import home                 from './src/views/pages/home/index.vue'

const routes = [
	{ 
		path: '/', 
		component: App,
		children: [
			{
				path: '/',
				component : home
			},
			{
				path: '*',
				component : notFound
			}
		]
	}
];
export default routes