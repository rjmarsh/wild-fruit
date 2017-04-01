<template>
  <div class="find-duplicates-form">
    <wf-modal :show="showModal" :on-close="closeModal">
      <span slot="content">
        <div class="form-title">Find Duplicates</div>
        <div class="form-group">
          <div class="column">
            <label>Root Person</label>
            <input class="input-control" placeholder="L2DE-A1Z" v-model="rootPerson"/>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <input type="radio" id="pickAscending" value="Ascending" v-model="direction">
            <label for="pickAscending">Ancestry</label>
            <input type="radio" id="pickDescending" value="Descending" v-model="direction">
            <label for="pickDescending">Descendants</label>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <input type="radio" id="directOnly" value="No" v-model="includeFamily">
            <label for="directOnly">Direct Line</label>
            <input type="radio" id="directPlusImmediate" value="Yes" v-model="includeFamily">
            <label for="directPlusImmediate">Direct Line and Immediate Families</label>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <label>Generations</label>
            <input type="number" class="input-control" placeholder="8" v-model="generations"/>
          </div>
        </div>

        <div class="form-group">
          <div class="column">
            <label>&nbsp;</label>
            <button v-on:click="findDuplicates">Find</button>
            <button v-on:click="closeModal">Cancel</button>
          </div>
        </div>
      </span>
    </wf-modal>
  </div>
</template>

<script>
  import wfModal from '../../components/modal';

  export default {
    name: 'wf-find-duplicates-form',
    props: ['showModalProp'],
    data() {
      return {
        showModal: this.showModalProp,
        rootPerson: '',
        direction: 'Ascending',
        includeFamily: 'No',
        generations: 8,
      };
    },
    components: {
      wfModal,
    },
    methods: {
      closeModal() {
        this.showModal = false;
        this.$router.go(-1); // route back to whatever the active route was before /find-duplicates. Otherwise, we're still at /find-duplicates and we can't go modal again
      },
      findDuplicates() {
/*        console.log('--- findDuplicates ----------------------------------');
        console.log(this.$store);
        this.$store.dispatch('findPossibleDuplicates', {
          rootPerson: this.rootPerson,
          direction: this.direction,
          generations: this.generations,
          includeFamily: this.includeFamily,
        }); */
        this.$store.commit('addDuplicate', {personId: 'L5DH-RCK',  personName: 'Elbert Donnelly', direction: 'Ancestry', generations: 1, includeFamily: true});
        this.$store.commit('addDuplicate', {personId: 'L5DN-76S',  personName: 'Latara Moonbeam', direction: 'Ancestry', generations: 2, includeFamily: false});
        this.$store.commit('addDuplicate', {personId: 'L5DN-QT5',  personName: 'Fluffy Donnelly', direction: 'Ancestry', generations: 3, includeFamily: true});
        this.$store.commit('addDuplicate', {personId: 'L5DN-QHR',  personName: 'Cebus Donnelly', direction: 'Ancestry', generations: 4, includeFamily: false});
        this.$store.commit('addDuplicate', {personId: 'L5DN-QTQ',  personName: 'Terri Lynn Littlefield', direction: 'Ancestry', generations: 5, includeFamily: false});
        this.$store.commit('addDuplicate', {personId: 'L5DN-QTG',  personName: 'Spencer Littlefield', direction: 'Ancestry', generations: 6, includeFamily: true});
        this.$store.commit('addDuplicate', {personId: 'L5DN-QCX',  personName: 'Melba Toast', direction: 'Ancestry', generations: 7, includeFamily: false});
        this.$store.commit('addDuplicate', {personId: 'L5DN-QC4',  personName: 'Ralphus Donnelly', direction: 'Ancestry', generations: 8, includeFamily: true});
        this.$store.commit('addDuplicate', {personId: 'L5DN-QTL',  personName: 'Digger Phelps', direction: 'Ancestry', generations: 9, includeFamily: false});
        this.$store.commit('addDuplicate', {personId: 'L5DC-H73',  personName: 'Splendora Fritella', direction: 'Ancestry', generations: 10, includeFamily: true});
        this.closeModal();
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .find-duplicates-form {
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
  .find-duplicates-form * {
    opacity: 1;
  }
  .find-duplicates-form:hover * {
    opacity: 1;
  }
  /* form specific formatting */
  .form-title {
    text-align: center;
    padding-bottom: 20px;
    font-weight: bold;
    font-size: 1em;
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
