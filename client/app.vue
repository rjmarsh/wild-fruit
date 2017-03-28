<template>
	<div>
		<div id="outer_wrapper">
			<wf-header></wf-header>
			<wf-navigate></wf-navigate>
			<div id="main_content">
				<router-view></router-view>
			</div>
			<wf-footer></wf-footer>
		</div>
	</div>
</template>

<script>
	import wfHeader from './components/header';
	import wfNavigate from './components/navigation';
	import wfFooter from './components/footer';

	export default {
		name: 'app',
		data() {
			return {
			};
		},
		components: {
			wfHeader,
			wfNavigate,
			wfFooter,
		},
		created: function() {
			this.$store.dispatch('checkFamilySearchLoginStatus');
		}
	};
</script>

<style>

</style>
