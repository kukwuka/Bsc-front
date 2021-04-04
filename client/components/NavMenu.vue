<template>
  <div class='logo-container'>
    <img src='../assets/logo.svg' alt='logoDFX'>
    <div class='logo-description'>Admin Panel</div>
  </div>
  <el-menu
    default-active='2'
    class='el-menu-vertical-demo'
    @open='handleOpen'
    @close='handleClose'
    background-color='#010a44'
    text-color='#fff'
    active-text-color='#ffd04b'>
    <el-submenu index='1'>
      <template #title>
        <i class='el-icon-user'></i>
        <span class='users'>Users</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index='1-1'><router-link to="/investors">Private Investors</router-link>
        </el-menu-item>
        <el-menu-item index='1-2'>Not Private Investors</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index='2'>
      <i class='el-icon-view'></i>
      <router-link to='/' tag='el-menu-item'>
        <span>Admin</span>
      </router-link>
    </el-menu-item>
    <!--        <el-menu-item index='3' disabled>-->
    <!--          <i class='el-icon-document'></i>-->
    <!--          <span>Navigator Three</span>-->
    <!--        </el-menu-item>-->
    <el-menu-item index='4'>
      <i class='el-icon-setting'></i>
      <span>Settings</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
};
</script>

<style>
.el-aside {
  background-color: #010a44;
  color: #333;
  min-height: 100vh;

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
  font-family: Helvetica Neue,Helvetica,PingFang SC,
  Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
}

.el-menu-item-group {
  font-family: Helvetica Neue,Helvetica,PingFang SC,
  Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
}

.el-menu-item {
  font-family: Helvetica Neue,Helvetica,PingFang SC,
  Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
}

.el-menu-item a {
  text-decoration: none;
}

</style>
