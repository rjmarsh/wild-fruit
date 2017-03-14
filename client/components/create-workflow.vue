<template>
	<div class="create-workflow">
		<button id="show-modal" @click="showModal = true">Show Modal</button>
		<wf-modal :show="showModal" :on-close="closeModal">
			<span slot="content">
				<span class="cw-title">Create a New Workflow</span>
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
				showModal: false,
			};
		},
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
		display: table;
		background-color: #3a3636;
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

	.create-workflow a {
		color: #ffffff;
		text-decoration: none;
	}

	.create-workflow a:hover {
		color: #9ce;
	}

	.cw-title {
		font-size: 1.3em;
	}

</style>
