import Vue from 'vue';
import Vuex from 'vuex';
import duplicates from './modules/duplicates';
import familysearch from './modules/familysearch';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		duplicates: duplicates,
		familysearch: familysearch
	},
	strict: true // In strict mode, whenever Vuex state is mutated outside of mutation handlers, an error will be thrown.
})
