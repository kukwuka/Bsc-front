<template>
  <div id='table'>
          <Table/>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies


// @ is an alias to /src
import NavMenu from '../components/NavMenu.vue';
import Header from '../components/Header.vue';
import Table from '../components/Table.vue';

export default {
  name: 'TablePage',
  components: { Table, Header, NavMenu },
};
</script>

<style scoped>

</style>
