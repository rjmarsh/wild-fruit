<template>
	<div class="header">
		<div class="wild_fruit_logo">
			<img class="olive_tree" src="/static/img/olive_tree.png"/><span class="header_text">Wild Fruit</span>
		</div>
		<div class="wild_fruit_status">
			<div v-if="loggedIn" class="FamilySearch_login">
				<div>
					<a href="/auth/signout" class="FamilySearch_show_log">
						logout
					</a>
					<div class="FamilySearch_username">
						{{username}}
					</div>
				</div>
			</div>
			<div v-else class="FamilySearch_login">
				<a href="/auth/signin" class="FamilySearch_show_log">
					login
				</a>
			</div>
			<div class="FamilySearch_logo">
				<img class="fsicon" src="/static/img/icons/FamilySearch Logo/FSMosaicTreeLogo.png"/>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'wf-header',
		data() {
			return {
				loggedIn: false,
				username: '',
			};
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header {
		display: flex;
		background-color: #5A6100;
		color: #ffffff;
		line-height: 2.25em;
		width: 100%;
	}

	.wild_fruit_logo {
		flex: 2;
	}

	img {
		height: 6.0em;
		vertical-align: middle;
		padding-right: 1px;
	}

	.header_text {
		margin-left:20px;
		font-size: 30px;
		font-family: "Georgia";
	}

	.wild_fruit_status {
		flex: 3;
	}

	.FamilySearch_login {
		display: flex;
		height: 50%;
	}

	.FamilySearch_show_log {
		font-size: 14px;
		color: #ffffff;
		font-family: "Georgia";
		padding-right: 15px;
		margin-left: auto;
	}

	.FamilySearch_logo {
		display: flex;
		height: 50%;
	}

	img.fsicon {
		height: 2.0em;
		padding-right: 5px;
		margin-left: auto;
	}


</style>
