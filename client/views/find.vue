<template>
	<div>
		<wf-find-duplicates :showModalProp=true></wf-find-duplicates>
	</div>
</template>

<script>
	import wfFindDuplicates from '../components/find-duplicates-form';

	export default {
		name: 'FindDuplicates',
		data() {
			return {};
		},
		components: {
			wfFindDuplicates,
		},
	};
</script>
