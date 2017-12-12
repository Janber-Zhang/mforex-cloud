
import App              from './src/views/main.vue'
import notFound         from './src/views/error_pages/404.vue'
import historyOrders    from './src/views/pages/historyOrders.vue'
import currentOrders    from './src/views/pages/currentOrders.vue'
import homePage         from './src/views/pages/homePage.vue'

const routes = [
	{ 
		path: '/', 
		component: App,
		children: [
			{
				path: '/',
				component : homePage
			},
			{
				path: 'history_orders',
				component : historyOrders
			},
			{
				path: 'current_orders',
				component : currentOrders
			},
			{
				path: '*',
				component : notFound
			}
		]
	}
];
export default routes