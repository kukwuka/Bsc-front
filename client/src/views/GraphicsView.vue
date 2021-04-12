<template>
  <div id='graphics'>
    <h2>Покупка продажи Dfx</h2>
    <Graph
        :label-prop="DfxLabel"
        :chart-prop-buy="BuyArrayDfx"
        :chart-prop-sell="SoldArrayDfx"
        v-if="Loaded"
    />

    <h2>Покупка продажи Dfx В Busd</h2>
    <Graph
        :label-prop="DfxLabel"
        :chart-prop-buy="BuyArrayBusd"
        :chart-prop-sell="SoldArrayBusd"
        v-if="Loaded"
    />

    <h2>Залили Слили с Стейкинга</h2>
    <Graph
        :label-prop="StDfxLabel"
        :chart-prop-buy="StackArrayStDfx"
        :chart-prop-sell="MergeArrayStDfx"
        v-if="Loaded"
    />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies

import Graph from "../components/Graph";
import axios from "axios";

export default {
  name: 'GraphicsView',
  data() {
    return {
      DfxLabel: [],
      BuyArrayDfx: [],
      SoldArrayDfx: [],
      BuyArrayBusd: [],
      SoldArrayBusd: [],


      StDfxLabel: [],
      StackArrayStDfx: [],
      MergeArrayStDfx: [],


      Cake_lpLabel: [],
      StackArrayCake_lp: [],
      MergeArrayCake_lp: [],


      Loaded: false,

    };
  },
  components: {Graph},
  async mounted() {
    this.Loaded = false

    // Запрос на данные по покупкам и продажам
    const ResponseGraphicsDate = await axios.get('http://91.134.171.38/api/buysold/')
    this.DfxLabel = Object.keys(ResponseGraphicsDate.data)


    for (let i = 0; i < Object.keys(ResponseGraphicsDate.data).length; i++) {
      this.BuyArrayDfx.push(Object.values(ResponseGraphicsDate.data)[i].valueDFXBuy)
      this.SoldArrayDfx.push(Object.values(ResponseGraphicsDate.data)[i].valueDFXSell)
      this.BuyArrayBusd.push(Object.values(ResponseGraphicsDate.data)[i].valueBusdBuy)
      this.SoldArrayBusd.push(Object.values(ResponseGraphicsDate.data)[i].valueBusdSell)
    }


    // const ResponseGraphicsDateSt = await axios.get('http://91.134.171.38/api/stackmergest/');
    // this.StDfxLabel = Object.keys(ResponseGraphicsDateSt.data.stack_merge_StDfx);
    //
    // for (let i = 0; i < Object.keys(this.StDfxLabel).length; i++) {
    //   this.StackArrayStDfx.push(Object.values(ResponseGraphicsDate.data)[i].value_Stack)
    //   this.MergeArrayStDfx.push(Object.values(ResponseGraphicsDate.data)[i].value_Merge)
    // }
    this.Loaded = true;


  }
};
</script>

<style scoped>

</style>
