<template>
	<div class="app-footer">
		<div flex="main:center">
			<a class="tips" @click="showTips('client_agreement')" href="javasctipt:;">客户协议</a>
			<a class="tips" @click="showTips('risk_statement')" href="javasctipt:;">风险免责声明</a>
			<a class="tips" @click="showTips('legal_statement')" href="javasctipt:;">法律免责申明</a>
			<a class="tips" @click="showTips('privacy_policy')" href="javasctipt:;">隐私保护政策</a>
			<a class="tips" @click="showTips('money_laundering')" href="javasctipt:;">反洗钱政策</a>
			<a class="tips" @click="showTips('complaint_suggestion')" href="javasctipt:;">投诉与建议</a>
		</div>
		<p class="copyright">2008-2017 &copy; MT4 用户交易平台。</p>
		<Modal
			v-model="show_tips"
			:title="tips_title"
			:styles="{top: '20px'}"
			ok-text="确定"
			width="60"
			cancel-text="取消">
			<template v-if="tips_type === 'client_agreement'">
				<p>Something...</p>
				<p>Something...</p>
				<p>Something...</p>
			</template>
			<template v-if="tips_type === 'risk_statement'">
				<p>Something...</p>
				<p>Something...</p>
				<p>Something...</p>
			</template>
			<template v-if="tips_type === 'legal_statement'">
				<p>Something...</p>
				<p>Something...</p>
				<p>Something...</p>
			</template>
			<template v-if="tips_type === 'privacy_policy'">
				<p>Something...</p>
				<p>Something...</p>
				<p>Something...</p>
			</template>
			<template v-if="tips_type === 'money_laundering'">
				<p>Something...</p>
				<p>Something...</p>
				<p>Something...</p>
			</template>
			<template v-if="tips_type === 'complaint_suggestion'">
				<p>Something...</p>
				<p>Something...</p>
				<p>Something...</p>
			</template>
		</Modal>
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