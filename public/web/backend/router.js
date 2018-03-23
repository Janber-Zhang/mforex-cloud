
import App                   from './src/views/main.vue'

import notFound              from './src/views/error_pages/404.vue'                 // 未开放模块

import home                  from './src/views/pages/home/index.vue'                // 主页

import basic_system          from './src/views/pages/basic/system.vue'              // 基本设置-系统设置
import basic_email           from './src/views/pages/basic/email.vue'               // 基本设置-邮件设置
import basic_email_template  from './src/views/pages/basic/email_template.vue'      // 基本设置-邮件模版
import basic_proxy_level     from './src/views/pages/basic/proxy_level.vue'         // 基本设置-代理等级名称设置
import basic_msg             from './src/views/pages/basic/msg.vue'                 // 基本设置-短信设置
import basic_proxy           from './src/views/pages/basic/proxy.vue'               // 基本设置-代理设置
import basic_trade           from './src/views/pages/basic/trade.vue'               // 基本设置-交易设置
import basic_payment         from './src/views/pages/basic/payment.vue'             // 基本设置—支付设置
import basic_logo            from './src/views/pages/basic/logo.vue'                // 基本设置-logo设置

import customer              from './src/views/pages/customer/index.vue'            // 客户管理

import finance_out_appr      from './src/views/pages/finance/outAppr.vue'           // 出金审核
import finance_in_list       from './src/views/pages/finance/inList.vue'            // 入金支付记录

const routes_map = {
	basic_system,
	basic_email,
	basic_email_template,
	basic_proxy_level,
	basic_msg,
	basic_proxy,
	basic_trade,
	basic_payment,
	basic_logo,
	customer,
	finance_out_appr
}

const routes = [
	{ 
		path: '/', 
		component: App,
		children: [
			{
				path: '/',
				component : home
			}
		]
	}
];

/* 路由注册 */
Object.keys(routes_map).forEach((key) => {
	routes[0].children.push({
		path: '/'+key,
		component: routes_map[key]
	})
});

routes[0].children.push({
	path: '*',
	component : notFound
})

export default routes