<template>
	<div v-if="$route.fullPath === '/'">
 		<p>Home</p>
  	</div>
	<div v-else-if="$route.fullPath === '/learn'">
		<p>Learn</p>
	</div>
	<div v-else-if="$route.fullPath === '/find-duplicates'">
		<div>
			<wf-find-duplicates :showModalProp=true></wf-find-duplicates>
		</div>
	</div>
	<div v-else>
		<p>unexpected route</p>
	</div>

</template>

<script>
	import wfFindDuplicates from './subviews/find-duplicates-form';

	export default {
		name: 'wf-main',
		data() {
			return {};
		},
		components: {
			wfFindDuplicates,
		}
	};
</script>

<style scoped>
</style>
