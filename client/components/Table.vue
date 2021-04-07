<template>
  <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      @cell-click="HrefToBsc"
      :row-class-name="tableRowClassName">
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
    };
  },
  async mounted() {
    this.loaded = false;
    try {
      this.tableData = (await axios.get('http://91.134.171.38/addresses')).data;
      // eslint-disable-next-line
      console.log(this.items);
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
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
