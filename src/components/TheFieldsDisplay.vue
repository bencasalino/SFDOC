<template>
<div class="container">
  <div v-for="field in data.outdoor" class="indoor">
      <h3>Name: {{ field.name }}</h3>
      <br>
      <p>City: {{ field.city }}</p>
      <br>
      <p>ID#: {{ field.id }}</p>
      <br>
      <p>Field(s): {{ field.fields }}</p>
      <br>
      <p>Website: {{ field.url }}</p>
      <br>
      <p>Latitude: {{ field.latitude }}</p>
      <p>Longitude: {{ field.longitude }}</p>
  </div>
<br>
  <div v-for="field in data.indoor" class="outdoor">
      <h3>Name: {{ field.name }}</h3>
      <br>
      <p>City: {{ field.city }}</p>
      <br>
      <p>ID#: {{ field.id }}</p>
      <br>
      <p>Field(s): {{ field.fields }}</p>
      <br>
      <p>Website: {{ field.url }}</p>
      <br>
      <p>Latitude: {{ field.latitude }}</p>
      <p>Longitude: {{ field.longitude }}</p>
  </div>

</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "TheFieldsDisplay",
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      fetch("https://dbsfdoc.herokuapp.com/")
        .then(res => res.json())
        .then(data => {
          this.data = data;
          // console.log(data);
        });
    }
  }
};
</script>

<style scoped>

.container {
display: flex; 
justify-content: space-between;
}

.indoor {
  max-height: 250px;
  max-width: 200px;
  color: black; 
  background-color: white;
  margin-bottom: 1rem;
}

.outdoor {
  max-height: 250px;
  max-width: 200px;
  color: black; 
  background-color: white;
  margin-bottom: 1rem;
}
</style>
