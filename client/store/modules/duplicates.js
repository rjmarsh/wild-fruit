import {findPossibleDuplicates} from '../backend-apis/familysearch/fs-duplicates';

const state = {
	duplicates: [],
};

const getters = {
	duplicates (state) {
		return state.duplicates;
	}
};

const mutations = {
	addDuplicate(state, duplicate) {
		state.duplicates.push(duplicate);
	},
	removeDuplicateByPersonId(state, personId) {
		state.duplicates.forEach(function(item, index) {
			if (item.personId === personId) {
				state.personId.splice(index, 1); // remove the element from the array
			}
		});
	},
};



const actions = {
	findPossibleDuplicates ({ commit }, searchSpec) {
		const possibleDuplicates = findPossibleDuplicates(searchSpec.rootPerson, searchSpec.direction, searchSpec.generations, searchSpec.includeFamily, -1);
		console.log(possibleDuplicates);
	}

};


export default {
	state,
	getters,
	mutations,
	actions,
};
