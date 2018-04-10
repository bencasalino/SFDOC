<template>
  <div id="app">


    <div class="container">
      <div class="Chart__list">
        <div class="Chart">
          <h2>Total Fields</h2>
          <Chart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from '@/components/Chart';

export default {
  name: 'app',
  components: {
    Chart
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 800px;
  margin:  0 auto;
}
</style>
