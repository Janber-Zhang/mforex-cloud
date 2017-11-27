import Vue        from 'vue';
import Vuex       from 'vuex';
import getters     from './getters';
import mutations  from './mutations';
import actions     from './actions';

Vue.use(Vuex);

const state = {
	userInfo:{name: 'test'},
	headerTitle: []
};

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})