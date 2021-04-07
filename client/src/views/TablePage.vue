<template>
  <div id='home'>
    <el-container>
      <el-aside width='200px'>
        <NavMenu />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <Table/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import 'reset-css';

// @ is an alias to /src
import NavMenu from '../../components/NavMenu.vue';
import Header from '../../components/Header.vue';
import Table from '../../components/Table.vue';

export default {
  name: 'TablePage',
  components: { Table, Header, NavMenu },
};
</script>

<style scoped>

</style>
