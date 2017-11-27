
import App              from './src/views/main.vue'
import historyOrders    from './src/views/pages/historyOrders.vue'
const routes = [
	{ 
		path: '/', 
		component: App,
		children: [
			{
				path: 'history_orders',
				component : historyOrders
			},
			{
				path: 'current_orders',
				component : historyOrders
			}
		]
	}
];
export default routes