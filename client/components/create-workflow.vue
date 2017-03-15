<template>
	<div class="create-workflow">
		<wf-modal :show="showModal" :on-close="closeModal">
			<span slot="content">
				<div class="form-title">Create a New Workflow</div>
				<div class="form-group">
					<div class="column">
						<label>New Workflow Name</label>
						<input class="input-control" placeholder="Descendancy of Splendora Fritella"/>
						<label>Root Person</label>
						<input class="input-control" pattern="" placeholder="L2DE-A1Z"/>
					</div>
				</div>

				<div class="form-group">
					<div class="row">
						<input type="radio" id="pickUp" value="Up" v-model="upDown">
						<label for="pickUp">Ascending</label>
						<input type="radio" id="pickDown" value="Down" v-model="upDown">
						<label for="pickDown">Descending</label>
					</div>
				</div>

				<div class="form-group">
					<div class="row">
						<input type="radio" id="pickDirect" value="Direct" v-model="directPicked">
						<label for="pickDirect">Direct Line</label>
						<input type="radio" id="pickPlus" value="Plus" v-model="directPicked">
						<label for="pickPlus">Direct Line and Immediate Families</label>
					</div>
				</div>

				<div class="form-group">
					<div class="row">
						<label>Generations</label>
						<input class="input-control" placeholder="4"/>
					</div>
				</div>

				<div class="form-group">
					<div class="column">
						<label>&nbsp;</label>
						<button>Save</button>
						<button>Cancel</button>
					</div>
				</div>
			</span>
		</wf-modal>
	</div>
</template>

<script>
	import wfModal from './modal';

	export default {
		name: 'wf-create-workflow',
		data() {
			return {
				workflowName: '',
				upDown: 'Up',
				directPicked: 'Direct',
			};
		},
		props: ['showModal'],
		components: {
			wfModal,
		},
		methods: {
			closeModal() {
				this.showModal = false;
			},
			changeLang(lang) {
				this.$changeLanguage(lang);
				this.closeModal();
			}
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.create-workflow {
		display: flex;
		background-color: #ffffff;
		color: #999;
		padding: 15px;
		margin: 0;
		border-top: solid 1px rgba(255, 255, 255, .2);
		font-size: 14px;
		width: 100%;
		box-sizing: border-box;
	}

	.create-workflow * {
		opacity: 0.8;
	}

	.create-workflow:hover * {
		opacity: 1;
	}

	/* form specific formatting */
	.form-title {
		text-align: center;
		padding-bottom: 20px;
	}

	.form-group {
		border-width: thick;
		border-color: #5a6100;
		border-top-style: solid;
		padding: 20px 5px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.form-group .row {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.form-group .column {
		display: flex;
		flex-direction: column;
	}

	.form-group label {
		flex: 1 1 auto;
		display: block;
		font-weight: bold;
		font-size: 1em;
		padding-left: 5px;
		padding-right: 10px;
	}

	.form-group .input-control {
		flex: 1 1 auto;
		display: block;
		margin-bottom: 10px;
		margin-right: 8px;
		padding: 4px;
		margin-top: 4px;
	}

	button {
		padding: 5px 15px;
		margin: 5px;
		min-width: 100px
	}

</style>
