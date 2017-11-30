
import App              from './src/views/main.vue'
import historyOrders    from './src/views/pages/historyOrders.vue'
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
			}
		]
	}
];
export default routes