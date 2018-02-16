<template>
    <form v-on:submit.prevent='sendData(outdoorFormDelete)'>
    <p class='form--title'> Delete Outdoor Field: </p>
    <br>
    <input v-model='outdoorFormDelete.name' placeholder='Search by name'>
    <br>
    <input
        class='form--button'
        type='submit'
        value='Submit'>
    </form>
</template>

<script>
/* eslint-disable */
export default {
  name: 'OutdoorFormDelete',
  data() {
    return {
      baseURL: 'http://localhost:3000/outdoorfields/',
      outdoorFormDelete: {
        name: ' ',
      },
    };
  },
  methods: {
    sendData() {
      fetch(`${this.baseURL}${this.outdoorFormDelete.name}`, {
        method: 'DELETE',
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
  font-family: "Arvo", serif;
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
  font-family: "Arvo", serif;
  margin: 1rem 1rem 1rem 1rem;
  border: 2px rgba(0, 0, 0, 0.05) solid;
}

.form--button {
  background-color: #2a876a;
  color: white;
  padding: 8px;
  border-radius: 4px;
  font-family: "Arvo", serif;
  margin:1rem 0 0 0;
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
  font-family: "Arvo", serif;
  margin:1rem 0 0 0;
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

