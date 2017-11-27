const actions = {
	initUserInfo (context,data){
		context.commit('initUserInfo',data);
	},
	initHeaderTitle (context,data) {
		context.commit('initHeaderTitle',data);
	}
}

export default actions