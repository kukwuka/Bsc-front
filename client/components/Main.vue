<template>
  <el-table
    :data='tableData
    .filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))'
    style='width: 100%'>
    <el-table-column type='expand'>
      <template #default='props'>
        <p>State: {{ props.row.state }}</p>
        <p>City: {{ props.row.city }}</p>
        <p>Address: {{ props.row.address }}</p>
        <p>Zip: {{ props.row.zip }}</p>
        <p>InviteKey: {{ props.row.inviteKey }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label='Date'
      prop='date'>
    </el-table-column>
    <el-table-column
      label='Name'
      prop='name'>
    </el-table-column>
    <el-table-column
      align='right'>
      <template #header>
        <el-input
          v-model='search'
          size='mini'
          placeholder='Type to search' />
      </template>
      <template #default='scope'>
        <el-button
          size='mini'
          @click='handleEdit(scope.$index, scope.row), open1()'>Edit
        </el-button>
        <el-button
          size='mini'
          type='danger'
          @click='handleDelete(scope.$index, scope.row)'>Generate InviteKey
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
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Aneles',
        inviteKey: 1,
      }, {
        date: '2016-05-02',
        name: 'John',
        address: 'No. 189, Grove St, Los ngeles',
        inviteKey: 2,
      }, {
        date: '2016-05-04',
        name: 'Morgan',
        address: 'No. 189, Grove St, Los Angeles',
        inviteKey: 3,
      }, {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angees',
        inviteKey: 4,
      }],
      search: '',
    };
  },
  methods: {
    handleEdit(index, row) {
      // eslint-disable-next-line
      console.log(index, row);
      if (this.tableData[index].inviteKey !== 0) {
        this.tableData[index].inviteKey = md5(this.tableData[index].address + new Date().getTime());
      } else {
        this.$notify({
          title: 'Success',
          message: 'Вы уже установили InviteKey',
          type: 'success',
          duration: 1500,
        });
      }
      // eslint-disable-next-line
      console.log(this.tableData[index].inviteKey);
    },
    handleDelete(row) {
      // eslint-disable-next-line
      console.log(row);
    },
    open1() {
      this.$notify({
        title: 'Success',
        message: 'This is a success message',
        type: 'success',
        duration: 1500,
      });
    },
  },
};
</script>
