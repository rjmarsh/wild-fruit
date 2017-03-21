<template>
	<div>
		<wf-current></wf-current>
	</div>
</template>

<script>
	import wfCurrent from '../components/current-workflow';

	export default {
		name: 'Current',
		data() {
			return {};
		},
		components: {
			wfCurrent,
		},
	};
</script>
