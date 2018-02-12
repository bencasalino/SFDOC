<template>
    <form v-on:submit.prevent="onSubmit">
        <p class="form--title">   Display a single Field: </p>
        <br>
        <input v-model="indoorFormDisplay.name" placeholder="Search by name">
        <br>
        <input v-on="sendData(indoorFormDisplay)" 
            class="form--button" 
            type="submit" 
            value="Submit">
    </form>
</template>

<script>
/* eslint-disable */
export default {
  name: "TheFormSection",
  data(){
    return {
    baseURL:"https://dbsfdoc.herokuapp.com/outdoor",
      indoorFormDisplay: {
        name: "",
      },
    }
  }, 
  methods: {
    sendData(data) {
    fetch(this.baseURL, {
    method: 'GET',
    body: JSON.stringify(data), 
    headers: new Headers({
    'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    }
  }
};
</script>

<style>

</style>
