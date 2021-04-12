<template>
  <el-table
      :data="tableData.filter(data => !search || data.address.toLowerCase().includes(search.toLowerCase()))"
      v-loading="Loading"
      element-loading-text="Loading..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      @cell-click="HrefToBsc"
      :row-class-name="tableRowClassName">
    <template #header>
      <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
    </template>
    <el-table-column
        prop="address"
        label="address"
        sortable
        width="380"
        >
    </el-table-column>
    <el-table-column
        prop="value_buy"
        label="Value_buy"
        sortable>
    </el-table-column>
    <el-table-column
        prop="value_sold"
        label="value_sold"
        sortable>
    </el-table-column>
    <el-table-column
        prop="value_FromStack"
        label="value_FromStack"
        sortable>
    </el-table-column>
    <el-table-column
        prop="value_ToStack"
        label="value_ToStack"
        sortable
    >
    </el-table-column>
    <el-table-column
        prop="dfxBalance"
        label="dfxBalance"
        sortable>
    </el-table-column>
    <el-table-column
        prop="stDfxBalance"
        label="stDfxBalance"
        sortable>
    </el-table-column>
    <el-table-column
        prop="lpFarmingBalance"
        label="lpFarmingBalance"
        sortable>
    </el-table-column>
    <el-table-column
        prop="userDfxAmountFromStDFX"
        label="userDfxAmountFromStDFX"
        sortable>
    </el-table-column>
    <el-table-column
        prop="userDfxAmountFromCakeLP"
        label="userDfxAmountFromCakeLP"
        sortable>
    </el-table-column>
    <el-table-column
        prop="sumOfDfxOfUser"
        label="sumOfDfxOfUser"
        sortable>
    </el-table-column>

  </el-table>
</template>

<script>
import axios from 'axios';
// import TableData from "../assets/tables.json"

export default {
  name: 'Table',
  data() {
    return {
      loaded: false,
      items: null,
      tableData: [],
      search: '',
      Loading:false
    };
  },
  async mounted() {
    this.Loading = true;
    try {

         const response = await axios.get(`${this.$store.getters.get_server_URL}/addresses`, {
           headers: {
             'Authorization' : `Token ${this.$store.getters.get_token}`
           }
         });
      // console.log(response.data);
      this.tableData = response.data
      // eslint-disable-next-line
      // console.log(this.tableData);
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
    this.Loading = false;
  },
  methods: {
    HrefToBsc(row) {
      // window.location.href = `https://bscscan.com/address/${row.address}`;
      window.open(`https://bscscan.com/address/${row.address}`);
    },
    // eslint-disable-next-line
    tableRowClassName({ row }) {
      // eslint-disable-next-line
      if (row.address == '0x66c47804e2eb462f27c6ef1dfab50753fb8e05d3') {
        return 'warning-row';
      }
      // if (rowIndex === 3) {
      //   return 'success-row';
      // }
      return '';
    },
  },
};

</script>

<style scoped>
.el-table .warning-row {
  background: red;
}

.el-table .success-row {
  background: brown;
}
</style>
