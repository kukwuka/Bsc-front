<template>
  <div>
    {{buy}}
  </div>
</template>

<script>
export default {
  props: {
    buy:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  name: "TransactionBuy",

  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>