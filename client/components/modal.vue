<template>
  <div v-if="show">
    <div class="container" @click="close"></div>
    <div class="content">
      <div class="content-body">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wf-modal',
    props: {
      show: {
        type: Boolean,
        default: false,
      },
      onClose: {
        type: Function,
      }
    },
    data() {
      return {
      };
    },
    methods: {
      close() {
        this.onClose();
      },
    },
  };
</script>

<style scoped>

  .container {
    background-color: rgba(0, 0, 0, .75);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
  }

  .content {
    position: fixed;
    height: auto;
    width: auto;
    max-width: 80vw;
    max-height: 80vh;
    color: #666;
    background: #fff;
    top: 50%;
    left: 50%;
    margin: auto;
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 100;
    overflow-y: scroll;
  }

  .content-body {
    padding: 36px;
  }

</style>
