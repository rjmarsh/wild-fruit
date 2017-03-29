<template>
	<div class="nav_container">
		<router-link class="nav_link" to="/learn">Learn</router-link>
		<router-link class="nav_link" to="/find-duplicates">Find Duplicates</router-link>
		<div v-if="duplicatesExist">
			<p class="possible_duplicates">Possible Duplicates</p>
			<ul id="possible-duplicates-list">
				<li v-for="duplicate in dogs">
					{{duplicate}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'wf-navigate',
		data() {
			return {
				dogs: ['beagle', 'poodle'],
			};
		},
		computed: {
			duplicatesExist: function () {
				return this.$store.state.duplicates.duplicates.length > 0;
			}
		}
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
		color: #5a6100;
		text-decoration: none;
	}

	.nav_link:link {
		text-decoration: none;
	}

	.nav_link:visited {
		text-decoration: none;
	}

	.nav_link:hover {
   		text-decoration: underline;
	}

	.nav_link:active {
		text-decoration: none;
	}

	.possible_duplicates {
		flex: 0 0 45px;
		text-align: center;
		justify-content: center;
		color: #5a6100;
		text-decoration: none;
	}

</style>
