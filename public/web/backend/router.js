
import App                  from './src/views/main.vue'
import notFound             from './src/views/error_pages/404.vue'          // 未开放模块

import home                 from './src/views/pages/home/index.vue'         // 主页

import basic_system         from './src/views/pages/basic/system.vue'       // 基本设置-系统设置
import basic_email          from './src/views/pages/basic/email.vue'        // 基本设置-邮件设置
import basic_proxy_level    from './src/views/pages/basic/proxy_level.vue'  // 基本设置-代理等级名称设置
import basic_msg            from './src/views/pages/basic/msg.vue'          // 基本设置-短信设置


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
				path: '/basic_system',
				component : basic_system
			},
			{
				path: '/basic_email',
				component : basic_email
			},
			{
				path: '/basic_proxy_level',
				component : basic_proxy_level
			},
			{
				path: '/basic_msg',
				component : basic_msg
			},
			{
				path: '*',
				component : notFound
			}
		]
	}
];
export default routes