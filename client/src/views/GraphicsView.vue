<template>
  <div id='home'>
    <el-container>
      <el-aside width='200px'>
        <NavMenu/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          sfa
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import 'reset-css';
import Header from '../../components/Header.vue';
import NavMenu from '../../components/NavMenu.vue';

export default {
  name: 'GraphicsView',
  components: { NavMenu, Header },
};
</script>

<style scoped>

</style>
