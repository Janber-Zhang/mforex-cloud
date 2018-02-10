<template>
	<div class="backend-footer">
		<p class="copyright">2008-2017 &copy; MT4 CRM 后台管理平台。</p>
	</div>
</template>
<script>
export default {
	created(){

	},
	ready(){

	},
	data(){
		return {
			show_tips: false,
			tips_type: '',
			tips_title: '',
			title_map: {
				'client_agreement': '客户协议',
				'risk_statement': '风险免责声明',
				'legal_statement': '法律免责申明',
				'privacy_policy': '隐私保护政策',
				'money_laundering': '反洗钱政策',
				'complaint_suggestion': '投诉与建议',
			}
		}
	},
	methods:{
		showTips (type) {
			this.tips_type = type;
			this.tips_title = this.title_map[type];
			this.show_tips = true;
		}
	},
	components:{

	},
	computed:{

	}
}
</script>