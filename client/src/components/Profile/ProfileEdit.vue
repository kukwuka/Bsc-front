<template>


  <div class="user_info">
    <el-form>
      <el-form-item label="User name in tg ">
        <el-input
            placeholder="ot authenticated("
            v-model="user_info['user_name']"
            :disabled="true">
        </el-input>
      </el-form-item>
      <el-form-item label="coefficient  ">
        <el-input-number v-model="user_info['coefficient']" :precision="2" :step="0.1" :max="10"></el-input-number>
      </el-form-item>
      <el-form-item label="password  ">
        <el-input v-model="user_info['password']" autocomplete='off'></el-input>
      </el-form-item>


      <el-form-item label="password_used  ">
        <el-switch
            v-model="user_info['password_used']"
            active-color="#13ce66"
            inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      <el-form-item label="password_used  ">
        <el-switch
            v-model="user_info['disabled']"
            active-color="#13ce66"
            inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
    </el-form>
    <el-button
        type='info'
        @click='GeneratePasswordInForm()'>
      Generate Password
    </el-button>
    <el-button

        type='primary'
        @click='Save()'>
      Save
    </el-button>
  </div>
</template>

<script>
import axios from "axios";

const md5 = require('md5');

export default {
  props: {
    user_info: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  methods: {
    async Save() {
      const request = await axios.put(`${this.$store.getters.get_server_URL}/profile/${this.user_info['id']}`, {
        coefficient: this.user_info['coefficient'],
        disabled: this.user_info['disabled'],
        password: this.user_info['password'],
        password_used: this.user_info['password_used'],
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
      console.log(request.status)
      if (request.status === 200) {
        this.$notify({
          title: 'Success',
          message: 'Всё хорошо , не переживайте',
          type: 'success'
        });
      }
    },
    async GeneratePasswordInForm() {
      this.user_info['password'] = md5(this.user_info['password']
          + new Date().getTime());
      const request = await axios.put(`${this.$store.getters.get_server_URL}/profile/${this.user_info['id']}`, {
        password: this.user_info['password'],
        password_used: false,
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
  },
  name: "ProfileEdit"
}
</script>

<style scoped>
.inline_block {
  display: inline-block;
}

.inline {
  display: block;
}
</style>