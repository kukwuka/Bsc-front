<template>
  <div id='home' v-if="this.$store.getters.get_Authorized" >
    <el-container>
      <el-aside width='200px'>
        <NavMenu />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>

  <Login v-else/>

</template>

<script>
import Header from './components/Header.vue';
import NavMenu from './components/NavMenu.vue';
import Main from './components/Test.vue';


import Login from "./components/Login";
import TableInvestors from "./components/TableInvestors";
export default {
  components: {
    TableInvestors,
    Main,
    NavMenu,
    Header,
    Login,
  },
}
</script>

<style>
body {
  display: block;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
