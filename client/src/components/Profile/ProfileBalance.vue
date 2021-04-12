<template>
  <div class="balance">
    <table  class="styled-table" >
      <caption>Баланс адреса</caption>
      <tr class="active-row" >
        <th>DfxBalance</th>
        <th>StDfxBalance</th>
        <th>CakeLpBalance</th>
        <th>UserDfxAmountFromStDFX</th>
        <th>UserDfxAmountFromCakeLP</th>
        <th>SumOfDfxOfUser</th>
      </tr>
      <tr>
        <td>{{ balance['DfxBalance'] }}</td>
        <td>{{ balance['StDfxBalance'] }}</td>
        <td>{{ balance['CakeLpBalance'] }}</td>
        <td>{{ balance['UserDfxAmountFromStDFX'] }}</td>
        <td>{{ balance['UserDfxAmountFromCakeLP'] }}</td>
        <td>{{ balance['SumOfDfxOfUser'] }}</td>

      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    balance: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  name: "ProfileBalance"

}

</script>

<style>
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}

</style>