<template>
  <div id="main-panel">
    <div v-if="$route.fullPath === '/'">
       <p>Home</p>
      </div>
    <div v-else-if="$route.fullPath === '/learn'">
      <p>Learn</p>
    </div>
    <div v-else-if="$route.fullPath === '/find-duplicates'">
      <div>
        <wf-find-duplicates :showModalProp=true></wf-find-duplicates>
      </div>
    </div>
    <div v-else-if="$route.fullPath.substr(0,19) === '/process-duplicates'">
       <wf-process-duplicates></wf-process-duplicates>
    </div>
    <div v-else>
      <p>unexpected route</p>
    </div>
  </div>
</template>

<script>
  import wfFindDuplicates from './subviews/find-duplicates-form';
  import wfProcessDuplicates from './subviews/process-duplicates';

  export default {
    name: 'wf-main',
    data() {
      return {};
    },
    components: {
      wfFindDuplicates,
      wfProcessDuplicates,
    }
  };
</script>

<style scoped>
</style>
