<template>
<graphs-buy-sold-busd :chart-data="chartData" :options="options"/>
  <graphs-saldo-busd/>
</template>

<script>
import GraphsBuySoldBusd from "./components/graphsBuySoldBusd";
import GraphsSaldoBusd from "./components/graphsSaldoBusd";
export default {
  name: "WrapperBusd",
  components: {GraphsSaldoBusd, GraphsBuySoldBusd},
  data () {
    return {
      loaded: false,
      chartData: {
        labels: null,
        datasets: [
          {
            label: 'Покупка DFX в BUSD',
            data: null
          },
          {
            label: 'Продажа DFX в BUSD',
            data: null
          }
        ]
      },
      options: null
    }
  },
 async mounted() {
    this.loaded = false
   try {

   } catch (e) {
     console.log(e);
   }
  }
}
</script>

<style scoped>

</style>