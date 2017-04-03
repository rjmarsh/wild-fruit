<template>
  <div>
    {{url}}
    <!--- <iframe width="100%" height="100%" src="{{url}}"></iframe>  -->
  </div>
</template>

<script>
  export default {
    name: 'wf-process-duplicates',
    props: ['personIdProp'],
    data() {
      return {
        personId: this.personIdProp,
        url: 'https://integration.familysearch.org/tree/person/' + this.personId + '/possible-duplicates',
      };ks
    },
  };
</script>

<style scoped>
</style>
