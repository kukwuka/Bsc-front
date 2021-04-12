<script>
import {Line} from 'vue-chartjs'
//import GraphicsDate from "@/assets/graphics.json";
import axios from "axios";

export default {
  name: "Graph",
  extends: Line,
  props: {
    chartPropBuy: {
      type: Array,
      default() {
        return {}
      }
    },
    chartPropSell: {
      type: Array,
      default() {
        return {}
      }
    },
    LabelProp: {
      type: Array,
      default() {
        return {

        }
      }
    }
  },
  data() {
    return {
      different:[],
      loaded: false,
      chartData: {
        labels: null,
        datasets: [
          {
            label: 'Продажа DFX',
            data: null,
          },
          {
            label: 'Покупка DFX',
            data: null,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  },
  async mounted() {

    for (let i = 0; i < this.chartPropBuy.length; i++) {
      this.different.push((this.chartPropBuy[i] - this.chartPropSell[i]))
    }


    this.renderChart({
          labels: this.LabelProp,
          datasets: [
            {
              label: 'Покупка DFX',
              data: this.chartPropBuy,
              borderColor: '#77b7cd',
              pointBackgroundColor: '#E52B50',
              pointRadius: 3,
              fill: false,
            },
            {
              label: 'Продажа DFX',
              data: this.chartPropSell,
              borderColor: '#8B0000',
              pointBackgroundColor: '#44944A',
              pointRadius: 3,
              fill: false,
            },
            {
              label: 'Продажа DFX',
              data: this.different,
              borderColor: '#11349b',
              pointBackgroundColor: '#000207',
              pointRadius: 3,
              fill: true,
              backgroundColor:'#0f6b81',

            }
          ]
        },
        this.options)
    // } catch (e) {
    //   console.error(e)
    // }
  }
}
</script>

<style scoped>
</style>