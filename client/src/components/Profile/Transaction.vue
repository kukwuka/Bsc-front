<template>
  <div>
    <table class="styled-table">
      <caption>{{ label }}</caption>
      <tr class="active-row">
        <th>hash</th>
        <th>date</th>
        <th>valueDFX</th>
        <th>from</th>
        <th>valueBusd</th>
        <th>to</th>
      </tr>
      <tr v-for="(trans,index) in table" :key="trans">
        <td>{{ index }}</td>
        <td>{{ trans['timeStampDFX'] }}</td>
        <td>{{ trans['valueDFX'] }}</td>
        <td>{{ trans['personDFX'] }}</td>
        <td>{{ trans['valueBusd'] }}</td>
          <td>{{ trans['personBusd'] }}</td>


      </tr>
    </table>

  </div>
</template>

<script>
export default {
  props: {
    table: {
      type: Object,
      default() {
        return {}
      }
    },
    label: {
      type: String,
      default() {
        return {}
      }
    },
  },
  name: "Transaction",

  data() {
    return {}
  }
}
</script>

<style scoped>

</style>