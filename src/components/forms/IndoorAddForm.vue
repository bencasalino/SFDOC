<template>
        <form v-on:submit.prevent="onSubmit">
            <p class="form--title"> Add a Field: </p>
                   <br>
                <input v-model="indoorFormAdd.name" class="input--default" placeholder="Name"> 
                   <br>
                <input v-model="indoorFormAdd.city" class="input--default" placeholder="City">
                   <br>
                <input v-model="indoorFormAdd.field" 
                class="input--default" 
                type="number" 
                placeholder="Total fields available">
                   <br>
                <input v-model="indoorFormAdd.latitude" class="input--default" 
                type="number" 
                placeholder="Latitude ex: 00.00">
                   <br>
                <input v-model="indoorFormAdd.longitude" class="input--default" type="number"  placeholder="Longitude ex: 00.00">
                <br>
                <!-- <p class="form--title">   Field type: </p> 
                <br>
                <input type="radio" value="true" v-model="formAdd.fieldType">
                <label for="indoor">Indoor</label>
                <br>
                <input type="radio" value="false" v-model="formAdd.fieldType">
                <label for="outdoor">Outdoor</label>
                <br> -->
                <input v-on="sendData(indoorFormAdd)" 
                class="form--button" 
                type="submit" 
                value="Submit">
        </form>
</template>

<script>
export default {
  name: "IndoorAddForm",
  data(){
    return {
    baseURL:"https://dbsfdoc.herokuapp.com/indoor",
      indoorFormAdd: {
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

