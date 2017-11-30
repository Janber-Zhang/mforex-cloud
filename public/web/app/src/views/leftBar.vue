<template>
	<div class="left-bar">
		<i-Menu ref="sideMenu" :active-name="openStatus.activeName" @on-select="onchange" theme="dark" width="auto" :open-names="openStatus.openNames">
			<div class="left-bar-logo">mforex-cloud</div>
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
	ready(){

	},
	data(){
		return {
			menuList:[
				{
					submenu: '资金操作',
					icon: 'social-usd',
					submenuName: 'fundOption',
					items: [
						{show : '账户入金',name : '/in_come'},
						{show : '入金记录',name : '/in_come_his'},
						{show : '账户出金',name : '/out_come'},
						{show : '出金记录',name : '/out_come_his'}
					]
				},
				{
					submenu: '数据统计',
					icon: 'arrow-graph-up-right',
					submenuName: 'dataStatistics',
					items: [
						{show : '历史交易订单',name : '/history_orders'},
						{show : '当前交易订单',name : '/current_orders'}
					]
				},
				{
					submenu: '代理商办公室',
					icon: 'social-usd',
					submenuName: 'agentRoom',
					items: [
						{show : '客户名单',name : '/customer_list'},
						{show : '佣金查询',name : '/commission_list'},
						{show : '交易单查询',name : '/transaction_list'},
						{show : '出入金查询',name : '/in_out_come_list'},
						{show : '我的邀请链接',name : '/my_link'}
					]
				},
				{
					submenu: '跟单系统',
					icon: 'android-bicycle',
					submenuName: 'documentary',
					items: [
						{show : '牛人榜',name : '/ranking_list'},
						{show : '成为牛人',name : '/to_be_big'},
						{show : '我的粉丝',name : '/my_fans'},
						{show : '我的牛人',name : '/my_big'}
					]
				},
				{
					submenu: '个人设置',
					icon: 'person',
					submenuName: 'personalSetting',
					items: [
						{show : '账户设置',name : '/prifile'},
						{show : '实名认证',name : '/certification'}
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
			if (['/history_orders'].indexOf(name)==-1){
				this.$Message.warning('暂未开放该模块！');
				return
			}
			this.$router.push({ path: name });
		},
		initLeftbar: function(){
			let vm = this;
			let path_ = this.$route.path;
			let subName, itemName, headerTitle = [];
			this.menuList.forEach((submenu)=>{
				submenu.items.forEach((item)=>{
					if (path_ === item.name) {
						headerTitle = [submenu.submenuName, item.show];   //heade中面包屑导航使用
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