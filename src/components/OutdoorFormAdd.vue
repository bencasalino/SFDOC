<template>
             <form v-on:submit.prevent="onSubmit">
            <p class="form--title">   Add a Field: </p>
                   <br>
                <input v-model="outdoorFormAdd.name" class="input--default" placeholder="Name"> 
                   <br>
                <input v-model="outdoorFormAdd.city" class="input--default" placeholder="City">
                   <br>
                <input v-model="outdoorFormAdd.field" 
                class="input--default" 
                type="number" 
                placeholder="Total fields available">
                   <br>
                <input v-model="outdoorFormAdd.latitude" class="input--default" 
                type="number" 
                placeholder="Latitude ex: 00.00">
                   <br>
                <input v-model="outdoorFormAdd.longitude" class="input--default" type="number"  placeholder="Longitude ex: 00.00">
                <br>
                <input v-on="sendData(outdoorFormAdd)" 
                class="form--button" 
                type="submit" 
                value="Submit">
        </form>
</template>

<script>
export default {
  name: "OutdoorFormAdd",
  data(){
    return {
    baseURL:"https://dbsfdoc.herokuapp.com/outdoor",
      OutdoorFormAdd: {
        name: " ",
        city: " ",
        field: " ",
        latitude: " ",
        longitude: " ",
      },
      }
      },

  methods: {
    sendData(data) {
    fetch(this.baseURL, {
    method: 'POST',
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

