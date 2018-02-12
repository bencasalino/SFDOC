<template>
    <form v-on:submit.prevent="onSubmit">
    <p class="form--title"> Delete a Field: </p>
    <br>
    <input v-model="indoorFormDelete.name" placeholder="Search by name">
    <br>
    <input v-on="sendData(indoorFormDelete)" 
        class="form--button" 
        type="submit" 
        value="Submit">
    </form>  
</template>

<script>
export default {
  name: "IndoorFormDelete",
  data(){
    return {
    baseURL:"https://dbsfdoc.herokuapp.com/indoor",
      indoorFormDelete: {
        name: " ",
      },
      }
      },

  methods: {
    sendData(data) {
    fetch(this.baseURL, {
    method: 'DELETE',
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

