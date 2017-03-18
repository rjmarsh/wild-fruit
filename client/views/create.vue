<template>
	<div>
		<wf-create :showModalProp=true :workflows="workflows"></wf-create>
	</div>
</template>

<script>
	import wfCreate from '../components/create-workflow';

	export default {
		props: ['workflows'],
		data() {
			return {};
		},
		components: {
			wfCreate,
		},
	};
</script>
