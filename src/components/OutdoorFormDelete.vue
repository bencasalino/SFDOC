<template>
    <form v-on:submit.prevent="onSubmit">
    <p class="form--title"> Delete a Field: </p>
    <br>
    <input v-model="outdoorFormDelete.name" placeholder="Search by name">
    <br>
    <input v-on="sendData(outdoorFormDelete)" 
        class="form--button" 
        type="submit" 
        value="Submit">
    </form>  
</template>

<script>
export default {
  name: "OutdoorFromDelete",
  data(){
    return {
    baseURL:"https://dbsfdoc.herokuapp.com/outdoor",
      outdoorFormDelete: {
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

