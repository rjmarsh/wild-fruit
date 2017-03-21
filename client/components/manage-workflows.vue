<template>
	<div class="body">
		<ul id="workflow-list">
			<li v-for="workflow in workflows">
				{{ workflow.name + ':' + workflow.rootPerson + ', ' + workflow.direction + ', ' + workflow.includeFamily + ', ' + workflow.generations + ', ' + workflow.lastModified }}
			</li>
		</ul>
  	</div>
</template>

<script>
	export default {
		name: 'wf-manage',
		data() {
			return {};
		},
		computed: {
			workflows: function() {
				return this.$store.workflows.state.workflows;
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.body {
		background-color: #ffffff;
		border: 1px solid #f3f4f5;
		border-radius: 6px;
		box-shadow: 0 1px 0 0 rgba(35, 31, 32, .12);

		margin-bottom: 20px;
	}

</style>
