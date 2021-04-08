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
          <TableInvestors />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import 'reset-css';

// @ is an alias to /src
import Header from '../../components/Header.vue';
import NavMenu from '../../components/NavMenu.vue';
import Main from '../../components/Test.vue';
import TableInvestors from "../../components/TableInvestors";


export default {
  name: 'Home',
  components: {
    TableInvestors,
    Main,
    NavMenu,
    Header,
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
