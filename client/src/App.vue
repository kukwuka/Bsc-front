<template>
  <div id='app'>
    <el-container>
      <el-aside width='200px'>
        <NavMenu />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <Main />
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import 'reset-css';
import NavMenu from '../components/NavMenu.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import Main from '../components/Main.vue';

export default {
  name: 'App',
  components: {
    Main, Header, Footer, NavMenu,
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
