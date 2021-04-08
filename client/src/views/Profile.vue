<template>
  <div id='home'>
    <el-container>
      <el-aside width='200px'>
        <NavMenu />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <TransactionBuy  />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import 'reset-css';

// @ is an alias to /src
import Header from '../../components/Header.vue';
import NavMenu from '../../components/NavMenu.vue';
import Main from '../../components/Test.vue';
import TransactionBuy from "../../components/TransactionBuy";
import axios from "axios";

export default {
  name: 'Profile',
  components: {
    TransactionBuy,
    Main,
    NavMenu,
    Header,
  },
  data() {
    return {
      TransactionData: {}
    }
  },
  created() {
    this.LoadProfiles();
  },
  methods: {
    async LoadProfiles() {
      const response = await axios.get(`${this.$store.getters.get_server_URL}/transactions/${this.$route.params.id}`, {
        headers: {
          'Authorization' : `Token ${this.$store.getters.get_token}`
        }
      });
      this.tableData = response.data;
      console.log(this.tableData);
    },
  }
};
</script>

<style>
.el-header {
  background-color: #010a44;
  text-align: right;
  font-size: 12px
}
</style>
