<template>
	<div class="nav_container">
		<div class="nav_link"><router-link to="/learn">Learn</router-link></div>
	</div>
</template>

<script>
	export default {
		name: 'wf-navigate',
		data() {
			return {};
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	.nav_container {
		display: flex;
		flex-direction: column;
		background-color: #d1d7b3;
		margin-top: 20px;
		margin-bottom: 20px;
		margin-left: 20px;
		margin-right: 20px;
		border-style: solid;
		border-width: thick;
		border-color: #5A6100;
	}

	.nav_link {
		flex: 0 0 45px;
		text-align: center;
		justify-content: center;
	}

	a {
		color: #5a6100;
	}

	a:link {
		text-decoration: none;
	}

	a:hover {
   		text-decoration: underline;
	}

</style>
