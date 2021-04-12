<template>
  <div id='transaction'
       v-loading.fullscreen.lock="!LoadingPage"
  >
    <h1>Пользователь по адресу

        {{ UserInfo['blockchain_address'] }}

    </h1>

    <ProfileBalance :balance="TransactionData.balance"/>
    <ProfileEdit :user_info="UserInfo"/>

    <h2>Транзакции пользователя через PanckeSwap</h2>
    <Transaction :table="TransactionData.buy" :label="'Покупки Dfx'" v-if="LoadingPage"/>
    <Transaction :table="TransactionData.sold" :label="'Продажи Dfx'" v-if="LoadingPage"/>

  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies


// @ is an alias to /src

import Transaction from "../components/Profile/Transaction";
import ProfileBalance from "../components/Profile/ProfileBalance"
import ProfileEdit from "../components/Profile/ProfileEdit"

import axios from "axios";

export default {
  name: 'Profile',
  components: {
    Transaction,
    ProfileBalance,
    ProfileEdit,


  },
  data() {
    return {
      TransactionData: {},
      UserInfo: {},
      LoadingPage: false
    }
  },
  async created() {
    this.LoadingPage = false;
    await this.LoadProfiles();
    await this.LoadUserInfo();
    this.LoadingPage = true;
  },
  methods: {
    async LoadProfiles() {
      const response = await axios.get(`${this.$store.getters.get_server_URL}/transactions/${this.$route.params.id}`, {
        headers: {
          'Authorization': `Token ${this.$store.getters.get_token}`
        }
      });
      this.TransactionData = response.data;
      // console.log(this.TransactionData.balance);

    },
    async LoadUserInfo() {

      const response = await axios.get(`${this.$store.getters.get_server_URL}/profile/${this.$route.params.id}`, {
        headers: {
          'Authorization': `Token ${this.$store.getters.get_token}`
        }
      });
      this.UserInfo = response.data;
      // console.log(this.TransactionData.balance);
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
