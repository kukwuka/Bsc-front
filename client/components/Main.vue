<template>
  <el-table
    :data='tableData
    .filter(data => !search || data.address.toLowerCase().includes(search.toLowerCase()))'
    style='width: 100%'>
    <el-table-column type='expand'>
      <template #default='props'>
        <p>State: {{ props.row.state }}</p>
        <p>City: {{ props.row.city }}</p>
        <p>Address: {{ props.row.address }}</p>
        <p>Zip: {{ props.row.zip }}</p>
        <p>InviteKey: {{ props.row.inviteToken }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label='Address'
      prop='address'>
    </el-table-column>
    <el-table-column
      label='Telegram Username'
      prop=''>
    </el-table-column>
    <el-table-column
      align='right'>
      <template #header>
        <el-input
          v-model='search'
          size='mini'
          placeholder='Type to search' />
        <el-button type='primary' round @click='dialogFormVisible = true'>Add new holder
        </el-button>
        <el-dialog v-model='dialogFormVisible'>
          <el-form :model='form'>
            <el-form-item label='Address' :label-width='formLabelWidth'>
              <el-input v-model='form.address' autocomplete='off'></el-input>
            </el-form-item>
          </el-form>
          <template #footer>
    <span class='dialog-footer'>
      <el-button @click='dialogFormVisible = false'>Cancel</el-button>
      <el-button type='primary' @click='dialogFormVisible = false, addItem()'>Confirm</el-button>
    </span>
          </template>
        </el-dialog>
      </template>
      <template #default='scope'>
        <el-button
          size='mini'
          @click='handleEdit(scope.$index, scope.row)'>Edit
        </el-button>
        <el-button
          size='mini'
          type='danger'
          @click='handleDelete(scope.$index, scope.row,open1(scope.$index))'>Generate InviteKey
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
const md5 = require('md5');

export default {
  name: 'Main',
  data() {
    return {
      tableData: [
        {
          id: 1,
          address: '0x0',
          inviteToken: '12312321321',
          tgChatId: null,
          tgUsername: null,
          ratio: null,
          disabled: true,
        },
        {
          id: 2,
          address: '0x01',
          inviteToken: null,
          tgChatId: null,
          tgUsername: null,
          ratio: null,
          disabled: true,
        },
      ],
      search: '',
      dialogFormVisible: false,
      form: {
        address: '',
        delivery: false,
        inviteToken: '',
      },
      formLabelWidth: '120px',
    };
  },
  methods: {
    handleEdit(index, row) {
      // eslint-disable-next-line
      console.log(index, row);
    },
    handleDelete(row) {
      // eslint-disable-next-line
      console.log(row);
    },
    open1(index) {
      // eslint-disable-next-line
      // console.log(this.tableData[index].inviteToken);
      if (!this.tableData[index].inviteToken) {
        this.tableData[index].inviteToken = md5(this.tableData[index].address
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
        address: this.form.address,
      };
      this.tableData.push(myObject);
    },
  },
};
</script>

<style>
.el-button {
  margin-top: 10px;
}
</style>
