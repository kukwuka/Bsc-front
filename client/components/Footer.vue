<template>
  <div class='dropdown'>
  <el-dropdown trigger='click'>
      <i class='el-icon-s-promotion' style='margin-right: 15px'></i>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.dropdown {
  text-align: right;
}
</style>
