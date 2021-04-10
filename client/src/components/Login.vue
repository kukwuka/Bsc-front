<template>
  <el-row>
  <el-input
      placeholder="Please input username"
      v-model="username"
      clearable
      @change="getUsername">
  </el-input>
  </el-row>
  <el-row>
  <el-input placeholder="Please input password"
            v-model="password"
            show-password>
  </el-input>
  </el-row>
  <el-row>
    <el-button round @click="sendDataByToken">Log In</el-button>
  </el-row>


</template>

<script>
import {defineComponent, ref} from 'vue'
import axios from "axios";

export default defineComponent({
  data() {
    return {
      username: this.username,
      password: this.password,
      token: '',
    }
  },
  methods: {
    async sendDataByToken() {
      const request = await axios.post(`${this.$store.getters.get_server_URL}/auth/token/login/`, {
        username: this.username,
        password: this.password,
      }).then(response => (this.token = response.data.auth_token))
      this.$store.commit('set_token', this.token)
      console.log(this.token);
      this.$store.commit('set_Authorized', this.token)

      console.log(this.$store.getters.get_token)

    }
  }
})
</script>

<style scoped>
.el-input {
  margin-right: auto;
  margin-left: auto;
  width: 200px;
}
.el-row:nth-child(1) {
  margin-top: 350px;
  margin-bottom: 20px;
}

.el-button {
  margin-right: auto;
  margin-left: auto;
  width: 200px;
}

</style>