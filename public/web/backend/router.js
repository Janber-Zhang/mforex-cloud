
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

import customer              from './src/views/pages/customer/index.vue'            // 客户管理-客户管理

import finance_out_appr      from './src/views/pages/finance/outAppr.vue'           // 财务管理-出金审核
import finance_in_list       from './src/views/pages/finance/inList.vue'            // 财务管理-入金支付记录

import system_manager        from './src/views/pages/system/manager.vue'            // 系统管理-管理员管理
import system_role           from './src/views/pages/system/role.vue'               // 系统管理-角色管理

import mt4_basic_param       from './src/views/pages/mt4/basicParam.vue'            // MT4设置-基本参数设置
import mt4_init              from './src/views/pages/mt4/init.vue'                  // MT4设置-初始化
import mt4_group             from './src/views/pages/mt4/group.vue'                 // MT4设置-组管理
import mt4_symbol            from './src/views/pages/mt4/symbol.vue'                // MT4设置-符号管理
import mt4_groups_map        from './src/views/pages/mt4/groupsMap.vue'             // MT4设置-用户组分布

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
	finance_out_appr,
	finance_in_list,
	system_manager,
	system_role,
	mt4_basic_param,
	mt4_init,
	mt4_group,
	mt4_symbol,
	mt4_groups_map
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