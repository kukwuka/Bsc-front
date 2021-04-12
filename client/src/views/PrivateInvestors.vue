<template>
  <div id='home'>
    <TableInvestors />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies


// @ is an alias to /src

import TableInvestors from "../components/TableInvestors";


export default {
  name: 'Home',
  components: {
    TableInvestors,
  },
};
</script>

<style>
.el-header {
  background-color: #010a44;
  text-align: right;
  font-size: 12px
}
</style>
