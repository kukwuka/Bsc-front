<template>
  <div id='home'
       v-loading="Loading"
       element-loading-text="Loading..."
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <el-form>
      <el-form-item label="username">
        <el-input
            placeholder="ot authenticated("
            v-model="AdminInfo.username"
            :disabled="true">
        </el-input>
      </el-form-item>

      <el-form-item label="last_name">
        <el-input
            placeholder="No last name"
            v-model="AdminInfo.last_name"
            :disabled="true">
        </el-input>
      </el-form-item>
      <el-form-item label="email">
        <el-input

            placeholder="no Email"
            v-model="AdminInfo.email"
            :disabled="true">
        </el-input>
      </el-form-item>
    </el-form>

    <h2>Изменить Телеграм Username</h2>
    <el-form>
      <el-form-item label="Tg username">
        <el-input
            v-model="TgName">
        </el-input>
      </el-form-item>
    </el-form>
    <el-button
        type='primary'
        @click='SaveTG()'>
      Save Tg name
    </el-button>


  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'Settings',
  data() {
    return {
      AdminInfo: {},
      loading: true,
      TgName: '',
      NewTgName: '',
    }
  },
  async mounted() {
    this.loading = true;
    await this.LoadAdmin();
    this.loading = false;
  },
  methods: {
    async SaveTG() {
      const request = await axios.post(`${this.$store.getters.get_server_URL}/changetgname/`, {
        new_tg_username: this.TgName,
      }, {
        headers: {
          'Authorization': `Token ${this.$store.getters.get_token}`
        }
      }).catch((err) => {
        this.$notify({
          title: 'Error',
          message: 'Всё плохо , переживайте',
          type: 'error'
        });
      });
      if (request.status === 200) {
        this.$notify({
          title: 'Success',
          message: 'Всё хорошо , не переживайте',
          type: 'success'
        });
      }


    },
    async LoadAdmin() {
      const response = await axios.get(`${this.$store.getters.get_server_URL}/admininfo/`, {
        headers: {
          'Authorization': `Token ${this.$store.getters.get_token}`
        }
      });
      this.AdminInfo = response.data;
      this.TgName = response.data.admin.user_name
    },
  }

};
</script>

<style scoped>

</style>
