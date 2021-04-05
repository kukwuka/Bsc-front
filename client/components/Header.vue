<template>
  <div class='header-description'>
    Описание проекта
    <button @click='increment'></button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    increment() {
      this.$store.commit('increment');
      // eslint-disable-next-line
      console.log(this.$store.state.count);
    },
  },
};
</script>

<style scoped>

.header-description {
  padding-top: 10px;
  color: white;
  text-align: center;
  font-family: Jost, sans-serif !important;
  font-size: 20px;
  font-weight: 700;
}

</style>
