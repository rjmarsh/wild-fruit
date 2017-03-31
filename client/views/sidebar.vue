<template>
	<div class="sidebar-container">
		<router-link class="sidebar-link" to="/">Home</router-link>
		<router-link class="sidebar-link" to="/learn">Learn</router-link>
		<router-link class="sidebar-link" to="/find-duplicates">Find Duplicates</router-link>
		<div v-if="duplicatesExist">
			<p class="title">Possible Duplicates</p>
			<ul>
				<li v-for="duplicate in duplicates">
					<span class="duplicate">
						{{duplicate.personId}} {{duplicate.personName}}
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'wf-sidebar',
		data() {
			return {};
		},
		computed: {
			duplicatesExist: function () {
				return this.$store.state.duplicates.duplicates.length > 0;
			},
			duplicates: function () {
				return this.$store.state.duplicates.duplicates;
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	.sidebar-container {
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

	.sidebar-link {
		flex: 0 0 45px;
		text-align: center;
		justify-content: center;
		color: #5a6100;
		text-decoration: none;
	}

	.sidebar-link:link {
		text-decoration: none;
	}

	.sidebar-link:visited {
		text-decoration: none;
	}

	.sidebar-link:hover {
   		text-decoration: underline;
	}

	.sidebar-link:active {
		text-decoration: none;
	}

	.title {
		flex: 0 0 45px;
		text-align: center;
		color: #5a6100;
		text-decoration: none;
	}

	ul{
		list-style-type: none;
		padding: 12px;
		font-size: small;
	}

	li {
		text-align: left;
	}

	.duplicate {
		color: #5a6100;
		text-decoration: none;
	}

	.duplicate:hover {
		text-decoration: underline;
	}

</style>
