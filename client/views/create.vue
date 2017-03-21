<template>
	<div>
		<wf-create :showModalProp=true></wf-create>
	</div>
</template>

<script>
	import wfCreate from '../components/create-workflow';

	export default {
		name: 'Create',
		data() {
			return {};
		},
		components: {
			wfCreate,
		},
	};
</script>
