
import App                  from './src/views/main.vue'
import homePage             from './src/views/pages/homePage.vue'           // 主页
import notFound             from './src/views/error_pages/404.vue'          // 未开放模块
import historyOrders        from './src/views/pages/data_statistics/historyOrders.vue'        // 历史订单
import currentOrders        from './src/views/pages/data_statistics/currentOrders.vue'        // 当前订单
import inCome               from './src/views/pages/capital_operation/inCome.vue'             // 账户入金
import inComeHis            from './src/views/pages/capital_operation/inComeHis.vue'          // 入金纪录
import outCome              from './src/views/pages/capital_operation/outCome.vue'            // 账户出金
import outComeHis           from './src/views/pages/capital_operation/outComeHis.vue'         // 出金记录
import extractCommission    from './src/views/pages/capital_operation/extractCommission.vue'  // 出金记录

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
				path: 'in_come',
				component : inCome
			},
			{
				path: 'in_come_his',
				component : inComeHis
			},
			{
				path: 'out_come',
				component : outCome
			},
			{
				path: 'out_come_his',
				component : outComeHis
			},
			{
				path: 'extract_commission',
				component : extractCommission
			},
			{
				path: '*',
				component : notFound
			}
		]
	}
];
export default routes