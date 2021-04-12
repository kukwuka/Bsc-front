<script>
import {Line} from 'vue-chartjs'
//import GraphicsDate from "@/assets/graphics.json";
import axios from "axios";
export default {
  name: "Graph",
  extends: Line,
  data() {
    return {
      loaded: false,
      chartData: {
        labels: null,
        datasets: [
          {
            label: 'Сальдо DFX',
            data: null
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  async mounted() {
    this.loaded = false
    try {
      // Запрос на данные по покупкам и продажам
      const ResponseGraphicsDate = await axios.get('http://91.134.171.38/api/buysold/')
      this.chartData.labels = Object.keys(ResponseGraphicsDate.data)
      let BuyArray = [];
      let SoldArray = [];
      for (let i = 0; i < Object.keys(ResponseGraphicsDate.data).length; i++) {
        BuyArray.push(Object.values(ResponseGraphicsDate.data)[i].valueBusdBuy)
        SoldArray.push(Object.values(ResponseGraphicsDate.data)[i].valueBusdSell)
      }
      let different = [];
      for (let i = 0; i < BuyArray.length; i++) {
        different.push((BuyArray[i] - SoldArray[i]))
      }
      this.chartData.datasets.data = different;
      this.loaded = true
      this.renderChart({
            labels: this.chartData.labels,
            datasets: [
              {
                label: 'Volume BUSD',
                data: this.chartData.datasets.data,
              },
            ]
          },
          this.options)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped>
</style>