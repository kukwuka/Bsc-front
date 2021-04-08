<template>
  <el-table
      :data="tableData"
      style='width: 100%'>
    <el-table-column type='expand'>
      <template #default='props'>
        <p>external_id: {{ props.row.external_id }}</p>
        <p>userName: {{ props.row.user_name }}</p>
        <p>disabled: {{ props.row.disabled }}</p>
        <p>SumToSell: {{ props.row.sum_to_sell }}</p>
        <p>Password: {{ props.row.password }}</p>
        <p>Password Used: {{ props.row.password_used }}</p>
      </template>
    </el-table-column>
    <el-table-column
        label='Address'
        prop='blockchain_address'>
    </el-table-column>
    <el-table-column
        label='Telegram Username'
        prop='external_id'>
    </el-table-column>
    <el-table-column
        label='Password'
        prop='password'>
    </el-table-column>
    <el-table-column
        align='right'>
      <template #header>
        <el-input
            v-model='search'
            size='mini'
            placeholder='Type to search'/>
        <el-button type='primary' round @click='dialogFormVisible = true'>Add new holder
        </el-button>
        <el-dialog v-model='dialogFormVisible'>
          <el-form :model='form'>
            <el-form-item label='Address' :label-width='formLabelWidth'>
              <el-input v-model='form.blockchain_address' autocomplete='off'></el-input>
            </el-form-item>
            <el-form-item label="Password" :label-width='formLabelWidth'>
              <el-input v-model='form.password' autocomplete='off'></el-input>
              <el-button
                  size='mini'
                  type='info'
                  @click='GeneratePasswordInForm()'>
                Generate Password
              </el-button>
            </el-form-item>
          </el-form>
          <template #footer>
    <span class='dialog-footer'>
      <el-button @click='dialogFormVisible = false'>Cancel</el-button>
      <el-button type='primary' @click='dialogFormVisible = false, addItem()'>Confirm</el-button>
    </span>
          </template>
        </el-dialog>
        <el-dialog v-model='dialogFormVisibleEdit'>
          <el-form :model='formEdit'>
            <el-form-item :label-width='formLabelWidth'>
              <el-checkbox v-model='checked'>Enabled</el-checkbox>
            </el-form-item>
            <el-form-item label="Sum To Sell" :label-width='formLabelWidth'>
              <el-input type="number" v-model='formEdit.sum_to_sell' autocomplete='off'></el-input>
            </el-form-item>
          </el-form>
          <template #footer>
    <span class='dialog-footer'>
      <el-button @click='dialogFormVisibleEdit = false'>Cancel</el-button>
      <el-button type='primary' @click='EditItem(); dialogFormVisibleEdit = false'>
        Confirm
      </el-button>
    </span>
          </template>
        </el-dialog>
      </template>
      <template #default='scope'>
        <el-button
            size='mini'
            @click='dialogFormVisibleEdit = true'
        >Edit
        </el-button>
        <el-button
            size='mini'
            type='info'
            @click='GeneratePassword(scope.$index)'>
          Generate Password
        </el-button>
        <el-popconfirm
            confirmButtonText='OK'
            @confirm='DeleteUser(scope.$index)'
            cancelButtonText='No, Thanks'
            icon="el-icon-info"
            iconColor="red"
            title="Are you sure to delete this?"
        >
        <template #reference>
          <el-button type="danger" icon="el-icon-delete"  circle>
        </el-button>
        </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// import TableData from '../assets/TableData.json';
// import {mapGetters, mapActions} from 'vuex'
// import Row from './Row.vue';

const md5 = require('md5');
const axios = require('axios');

export default {
  name: 'Main',
  components: {},
  data() {
    return {
      tableData: '',
      search: '',
      dialogFormVisible: false,
      dialogFormVisibleEdit: false,
      form: {
        blockchain_address: '',
        delivery: false,
        password: '',
      },
      formEdit: {
        password: '',
        sum_to_sell: '',
      },
      formLabelWidth: '120px',
      checked: false,
    };
  },
  created() {
    this.LoadProfiles();
  },
  computed: {
  },
  methods: {
    async LoadProfiles() {
      const response = await axios.get(`${this.$store.getters.get_server_URL}/profile/`, {
       headers: {
         'Authorization' : `Token ${this.$store.getters.get_token}`
       }
      });
      this.tableData = response.data;
    },
    GeneratePasswordInForm() {
      this.form.password = md5(this.form.blockchain_address
          + new Date().getTime());
    },
    async DeleteUser(index) {
      const response = await axios.delete(`${this.$store.getters.get_server_URL}/profile/${this.tableData[index].id}`, {
        headers: {
          'Authorization' : `Token ${this.$store.getters.get_token}`
        }
      });
      // eslint-disable-next-line
      console.log(response.status);
      await this.LoadProfiles();
    },
    GeneratePassword(index) {
      // eslint-disable-next-line
      // console.log(this.tableData[index].inviteToken);
      if (!this.tableData[index].password) {
        this.tableData[index].password = md5(this.tableData[index].blockchain_address
            + new Date().getTime());
        this.$notify({
          title: 'Success',
          message: 'Вы установили InviteToken',
          type: 'success',
          duration: 1500,
        });
      } else {
        this.$notify({
          title: 'Warning',
          message: 'InviteToken уже установлен',
          type: 'warning',
          duration: 1500,
        });
      }
    },
    async addItem() {
      const myObject = {
        blockchain_address: this.form.blockchain_address,
        password: this.form.password,
      };
      this.tableData.push(myObject);
      const request = await axios.post(`${this.$store.getters.get_server_URL}/profile/`, {
        blockchain_address: this.form.blockchain_address,
        password: this.form.password,
        disabled: false,
      },{
        headers: {
          'Authorization' : `Token ${this.$store.getters.get_token}`
        }
      });
      // eslint-disable-next-line
      console.log(request.status);
      await this.LoadProfiles();
      this.form.blockchain_address = '';
      this.form.password = '';
    },
    EditItem(index) {
      // eslint-disable-next-line
      console.log();
      const response = axios.put(`${this.$store.getters.get_server_URL}/profile/${this.tableData[index].id}`);
      // eslint-disable-next-line
      console.log(response.status);
    },

  },
  mounted() {

  },

};
</script>

<style>
.el-button {
  margin-top: 10px;
}
</style>
