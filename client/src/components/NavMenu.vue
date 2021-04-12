<template>
  <div>
    <div class='logo-container'>
      <img src='../../assets/logo.svg' alt='logoDFX'>
      <div class='logo-description'>Admin Panel</div>
    </div>
    <el-menu
        default-active='2'
        class='el-menu-vertical-demo'
        background-color='#010a44'
        text-color='#fff'
        active-text-color='#ffd04b'>
      <el-menu-item index='3'>
        <i class='el-icon-user-solid'></i>
        <router-link :to="{name:'PrivateInvestors'}" class='ordinary' active-class='active'>
          <span>Private investors</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index='3'>
        <i class='el-icon-user'></i>
        <router-link :to="{name:'TablePage'}" tag='el-link' class='ordinary' active-class='active'>
          <span>Table of all users</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index='4'>
        <i class='el-icon-s-data'></i>
        <router-link :to="{name:'Graphics'}" tag='el-link' class='ordinary' active-class='active'>
          <span>Graphics</span>
        </router-link>
      </el-menu-item>
      <el-menu-item  index='5'>
        <i class='el-icon-s-tools'></i>
        <router-link :to="{name:'Settings'}" tag='el-link' class='ordinary' active-class='active'>
          <span>Settings</span>
        </router-link>
      </el-menu-item>
      <div class="button">
        <el-button round @click="LogOut()">Log out</el-button>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  methods: {
    LogOut() {
      this.$store.commit('set_token', '')
      this.$store.commit('set_Authoruzed_LogOut', false)
      console.log(this.$store.getters.get_Authorized)
    }
  }
};
</script>

<style>
.button {
  margin-top: 20px;
  margin-left: 20px;
}
.el-aside {
  background-color: #010a44;
  color: #333;
  min-height: 100vh;

}

.active {
  color: rgb(255, 208, 75);
}

.ordinary {
  color: white;
}

.logo-container {
  background: #010a44;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
}

img {
  width: 150px;
}

.logo-description {
  color: white;
  padding-left: 30px;
  font-family: Jost, sans-serif !important;
  font-size: 20px;
  font-weight: 700;
}

.users {
  font-family: Helvetica Neue, Helvetica, PingFang SC,
  Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
}

.el-menu-item-group {
  font-family: Helvetica Neue, Helvetica, PingFang SC,
  Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
}

.el-menu-item {
  color: white;
  font-family: Helvetica Neue, Helvetica, PingFang SC,
  Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
}

.el-menu-item a {
  text-decoration: none;
}

</style>
