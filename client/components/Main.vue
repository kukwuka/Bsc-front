<template>
  <el-table
      :data='tableData
    .filter(data => !search || data.blockchain_address.toLowerCase().includes(search
    .toLowerCase()))'
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
            <el-form-item label='Password' :label-width='formLabelWidth'>
              <el-input v-model='formEdit.password' autocomplete='off'></el-input>
            </el-form-item>
            <el-form-item label="Sum To Sell" :label-width='formLabelWidth'>
              <el-input v-model='formEdit.sum_to_sell' autocomplete='off'></el-input>
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
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import TableData from '../assets/TableData.json';

const md5 = require('md5');

export default {
  name: 'Main',
  data() {
    return {
      tableData: TableData,
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
    };
  },
  methods: {
    handleEdit(index, row) {
      // eslint-disable-next-line
      console.log(index, row);
    },
    GeneratePasswordInForm() {
      this.form.password = md5(this.form.blockchain_address
          + new Date().getTime());
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
    addItem() {
      const myObject = {
        blockchain_address: this.form.blockchain_address,
        password: this.form.password,
      };
      this.tableData.push(myObject);
      this.form.blockchain_address = '';
      this.form.password = '';
    },
    EditItem() {
    },
  },
};
</script>

<style>
.el-button {
  margin-top: 10px;
}
</style>
