<template>
             <form v-on:submit.prevent='onSubmit'>
              <p class='form--title'>   Update Indoor Field: </p>
                   <br>
                <input v-model='indoorFormUpdate.name'
                class='input--default'
                placeholder='Name'>
                   <br>
                <input v-model='indoorFormUpdate.city'
                class='input--default'
                placeholder='City'>
                   <br>
                <input v-model='indoorFormUpdate.field'
                class='input--default'
                type='number'
                placeholder='Total fields available'>
                   <br>
                <input v-model='indoorFormUpdate.latitude'
                class='input--default'
                type='number'
                placeholder='Latitude ex: 00.00'>
                   <br>
                <input v-model='indoorFormUpdate.longitude'
                class='input--default'
                type='number'
                placeholder='Longitude ex: 00.00'>
                <br>
                <input v-on='sendData(indoorFormUpdate)'
                class='form--button'
                type='submit'
                value='Submit'>
        </form>
</template>

<script>
export default {
  name: 'IndoorFormUpdate',
  data() {
    return {
    baseURL: 'https://dbsfdoc.herokuapp.com/indoor',
      indoorFormUpdate: {
        name: ' ',
        city: ' ',
        field: ' ',
        latitude: ' ',
        longitude: ' ',
      },
      };
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
      // eslint-disable-next-line
      .catch(error => console.error('Error:', error))
      // eslint-disable-next-line
      .then(response => console.log('Success:', response));
    }
  }
};
</script>

<style scoped>
/* fallbacks buttons --------------- */
button {
  display: block;
  background-color: #2a876a;
  color: white;
  padding: 4px;
  border-radius: 4px;
  font-family: 'Arvo', serif;
  margin: 1rem 1rem 1rem 1rem;
  border: 2px rgba(0, 0, 0, 0.05) solid;
  font-size: 1rem;
}

button:hover {
  display: block;
  background-color: gold;
  padding: 4px;
  color: black;
  border-radius: 6px;
  font-family: 'Arvo', serif;
  margin: 1rem 1rem 1rem 1rem;
  border: 2px rgba(0, 0, 0, 0.05) solid;
}

.form--button {
  background-color: #2a876a;
  color: white;
  padding: 8px;
  border-radius: 4px;
  font-family: 'Arvo', serif;
  /* margin:1rem 1rem 1rem 1rem; */
  border: 2px rgba(0, 0, 0, 0.05) solid;
  font-size: 1rem;
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
}

.form--button:hover {
  background-color: gold;
  padding: 8px;
  color: black;
  border-radius: 6px;
  font-family: 'Arvo', serif;
  /* margin:1rem 1rem 1rem 1rem; */
  border: 2px rgba(0, 0, 0, 0.05) solid;
   cursor: pointer;
  -webkit-box-shadow: 0px 10px 5px -2px rgba(124, 42, 42, 0.83);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.83);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.83);
  -webkit-transition: box-shadow 1s ease-in;
  -moz-transition: box-shadow 1s ease-in;
  -o-transition: box-shadow 1s ease-in;
  transition: box-shadow  1s ease-in;
}
/* fallbacks buttons --------------- */
</style>

