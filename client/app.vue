<template>
	<div>
		<div id="outer_wrapper">
			<wf-header :username="username"></wf-header>
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
				username: ''
			};
		},
		components: {
			wfHeader,
			wfNavigate,
			wfFooter,
		},
		created: function () {
			this.$http.get('/auth/check-signin').then(response => {
				this.username = response.body;
			}, response => {
				this.username = '';
				console.log('Error');
				console.log('Request to \'check-signin\' failed:  ' + response);
			});
		},
	};
</script>

<style>
	html, body {
		height: 100%;
		width: 1000px;
		margin-left: auto;
		margin-right: auto;
		padding: 0;
		font-family: adobe-clean, myriad-pro, sans-serif;
		background-color: #373737;
		font-size: 16px;
		border-left: solid 1px rgba(255, 255, 255, .2);
		border-right: solid 1px rgba(255, 255, 255, .2);
	}

	#outer_wrapper::after {
		content: '';
		display: block;
		height: 75px;
	}

</style>
