<template>
  <div class="flexcontainer">
    <wf-header class="row1"></wf-header>
    <span class="row2">
      <div class="row2-columns">
        <div class="row2-column1">
          <wf-sidebar></wf-sidebar>
        </div>
        <div class="row2-column2">
          <wf-main></wf-main>
        </div>
      </div>
    </span>
    <wf-footer class="row3"></wf-footer>
  </div>
</template>

<script>
  import wfHeader from './views/header';
  import wfSidebar from './views/sidebar';
  import wfMain from './views/main';
  import wfFooter from './views/footer';

  export default {
    name: 'app',
    data() {
      return {
      };
    },
    components: {
      wfHeader,
      wfSidebar,
      wfMain,
      wfFooter,
    },
    created: function() {
      this.$store.dispatch('checkFamilySearchLoginStatus');
    }
  };
</script>

<style>

  .flexcontainer {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
  }

  .row1 {
    flex: 0 0 6.0em;
    width: 100%;
  }

  .row2 {
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
  }


  .row3 {
    flex: 0 0 6.0em;
    width: 100%;
  }

  .row2-columns {
    display: -webkit-flex;
    display: flex;
  }

  .row2-column1 {
    flex: 0 0 250px;
  }

  .row2-column2 {
    flex: 0 0 auto;
  }

</style>
