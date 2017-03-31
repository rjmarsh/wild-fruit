<template>
	<div class="header">
		<router-link class="wild-fruit-logo" to="/">
			<img class="olive-tree" src="/static/img/olive_tree.png"/><span class="header-text">Wild Fruit</span>
		</router-link>
		<div class="wild-fruit-status">
			<div v-if="username.length" class="FamilySearch-login">
				<span class="no-right-margin">
					<span class="FamilySearch-username">
						{{username}}
					</span>
					<span @click="logout" class="FamilySearch-show-log">
						logout
					</span>
				</span>
			</div>
			<div v-else class="FamilySearch-login">
				<div @click="login" class="FamilySearch-show-log">
					login
				</div>
			</div>
			<div class="FamilySearch-logo">
				<img class="fsicon" src="/static/img/icons/FamilySearch%20Logo/FSMosaicTreeLogo.png"/>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'wf-header',
		data() {
			return {};
		},
		computed: {
			username: function() {
				return this.$store.state.familysearch.username;
			}
		},
		methods: {
			login() {
				this.$store.dispatch('login');
			},
			logout() {
				this.$store.dispatch('logout');
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header {
		display: flex;
		background-color: #5A6100;
		color: #ffffff;
	}

	.wild-fruit-logo {
		flex: 2;
		text-decoration: none;
	}

	img {
		height: 6.0em;
		vertical-align: middle;
		padding-right: 1px;
	}

	.header-text {
		margin-left:20px;
		font-size: 30.5px;
		font-family: "Georgia";
		color: #ffffff;
		text-decoration: none;
	}

	.header-text:hover {
		color: #d1d7b3;
	}

	.wild-fruit-status {
		flex: 3;
	}

	.FamilySearch-login {
		display: flex;
		height: 50%;
	}

	.FamilySearch-username {
		font-size: 14px;
		color: #ffffff;
		font-family: "Georgia";
		margin-left: auto;
	}

	.FamilySearch-show-log {
		font-size: 14px;
		color: #ffffff;
		font-family: "Georgia";
		padding-right: 15px;
		margin-left: auto;
	}

	.FamilySearch-show-log:hover {
		text-decoration: underline;
	}

	.no-right-margin {
		margin-left: auto;
	}

	.FamilySearch-logo {
		display: flex;
		height: 50%;
	}

	img.fsicon {
		height: 2.0em;
		padding-right: 5px;
		margin-left: auto;
	}


</style>
