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
					submenuName: 'capitalOperation',
					items: [
						
					]
				},
				{
					submenu: '客户管理',
					icon: 'ios-box',
					submenuName: 'dataStatistics',
					items: [
						{show : '历史交易订单',name : '/history_orders'},
						{show : '当前交易订单',name : '/current_orders'}
					]
				},
				{
					submenu: '财务管理',
					icon: 'android-apps',
					submenuName: 'agentRoom',
					items: [
						
					]
				},
				{
					submenu: '系统管理',
					icon: 'ios-person',
					submenuName: 'personalSetting',
					items: [
						{show : '账户设置',name : '/profile'},
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