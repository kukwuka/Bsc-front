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
          Действия админа
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from '../../components/NavMenu.vue';
import Header from '../../components/Header.vue';

export default {
  name: 'Home',
  components: { Header, NavMenu },
};
</script>

<style scoped>

</style>
