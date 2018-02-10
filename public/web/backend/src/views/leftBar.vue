<template>
	<div class="backend-left-bar">
		<i-Menu ref="sideMenu" :active-name="openStatus.activeName" :accordion="false" @on-select="onchange" theme="dark" width="auto" :open-names="openStatus.openNames">
			<Submenu v-for="submenuItem in menuList" :name="submenuItem.submenuName" :key="submenuItem.submenuName">
				<template slot="title">
					<Icon :type="submenuItem.icon"></Icon>
					{{submenuItem.submenu}}
				</template>
				<menu-item v-for="menuItem in submenuItem.items" :name="menuItem.name" :key="menuItem.name">{{menuItem.show}}</menu-item>
			</Submenu>
		</i-Menu>
	</div>
</template>
<script>
export default {
	created(){
		this.initLeftbar();
	},
	mounted(){

	},
	data(){
		return {
			menuList:[
				{
					submenu: '基本设置',
					icon: 'social-usd',
					submenuName: 'basic',
					items: [
						{show : '系统设置',name : '/basic_system'},
						{show : '邮件设置',name : '/basic_email'},
						{show : '邮件模版设置',name : '/basic_email_template'},
						{show : '代理设置',name : '/basic_proxy'},
						{show : '交易设置',name : '/basic_trade'},
						{show : '代理名称设置',name : '/basic_proxy_level'},
						{show : '支付设置',name : '/basic_payment'},
						{show : 'LOGO设置',name : '/basic_logo'},
						{show : '短信设置',name : '/basic_msg'}
					]
				},
				{
					submenu: '客户管理',
					icon: 'ios-box',
					submenuName: 'customer',
					items: [
						{show : '客户管理',name : '/customer'}
					]
				},
				{
					submenu: '财务管理',
					icon: 'android-apps',
					submenuName: 'finance',
					items: [
						{show : '出金审核',name : '/finance_out_appr'},
						{show : '入金支付记录',name : '/finance_in_list'},
					]
				},
				{
					submenu: '系统管理',
					icon: 'ios-person',
					submenuName: 'system',
					items: [
						{show : '管理员管理',name : '/system_manager'},
						{show : '角色管理',name : '/system_role'}
					]
				},
				{
					submenu: 'MT4设置',
					icon: 'ios-person',
					submenuName: 'MT4',
					items: [
						{show : '基本参数设置',name : '/MT4_basic_init'},
						{show : '初始化',name : '/MT4_init'},
						{show : '组管理',name : '/MT4_group'},
						{show : '符号管理',name : '/MT4_symbol'},
						{show : '用户组分布',name : '/MT4_groups_map'},
					]
				},
				{
					submenu: '统计',
					icon: 'ios-person',
					submenuName: 'statistics',
					items: [
						{show : '交易统计',name : '/statistics_trade'},
						{show : '出入金统计',name : '/statistics_in_out'},
						{show : '佣金统计',name : '/statistics_commission'},
						{show : '持仓交易盈利统计',name : '/statistics_profit'},
						{show : '历史交易盈利统计',name : '/statistics_profit_all'},
					]
				},
				{
					submenu: '其他',
					icon: 'ios-person',
					submenuName: 'other',
					items: [
						{show : '邮件通知',name : '/other_email'},
						{show : '文档管理',name : '/other_documents'}
					]
				},
				{
					submenu: '跟单子系统',
					icon: 'ios-person',
					submenuName: 'follow',
					items: [
						{show : '跟单设置',name : '/follow_setting'},
						{show : '牛人列表',name : '/follow_bigman'},
						{show : '跟单记录',name : '/follow_list'},
					]
				},
			],
			openStatus:{
				openNames: [],
				activeName: ''
			}
		}
	},
    updated () {
        this.$nextTick(() => {              //手动更新menu状态
            if (this.$refs.sideMenu) {
                this.$refs.sideMenu.updateOpened();
                this.$refs.sideMenu.updateActiveName();
            }
        });
    },
	methods:{
		onchange: function(name){
			let vm = this;
			this.$router.push({ path: name });
		},
		initLeftbar: function(){
			let vm = this;
			let path_ = this.$route.path;
			let subName, itemName, headerTitle = [];
			this.menuList.forEach((submenu)=>{
				submenu.items.forEach((item)=>{
					if (path_ === item.name) {
						headerTitle = [submenu.submenu, item.show];   //heade中面包屑导航使用
						vm.openStatus.activeName = item.name;
						vm.openStatus.openNames = [submenu.submenuName];
					}
				})
			})
			if (headerTitle.length === 0) {
				this.openStatus.activeName = '';  //关闭当前已选择项
			}
			this.$store.dispatch('initHeaderTitle',headerTitle);
		}
	},
	watch: {
    	'$route' : 'initLeftbar' // 如果路由有变化，会再次执行该方法
    },
	components:{

	},
	computed:{

	}
}
</script>