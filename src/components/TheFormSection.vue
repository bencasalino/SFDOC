<template>
  <div id="TheFormSection">
    <div id="left">
      <div class="inline">
        <div class="animated slideInLeft form--container" id="form__delete">
          <!-- form--delete a field -->
           <form v-on:submit.prevent="onSubmit">
            <p class="form--title"> Delete a Field: </p>
            <br>
            <input v-model="formDelete.name" placeholder="Search by name">
            <br>
            <input v-on="sendData(formDelete)" 
                class="form--button" 
                type="submit" 
                value="Submit">
          </form>
        </div>
        <div class="animated slideInLeft form--container" id="form__display">
         <!-- form--display a single a field -->
           <form v-on:submit.prevent="onSubmit">
            <p class="form--title">   Display a single Field: </p>
            <br>
            <input v-model="formDisplay.name" placeholder="Search by name">
            <br>
            <input v-on="sendData(formDisplay)" 
                class="form--button" 
                type="submit" 
                value="Submit">
          </form>
        </div>
    </div>
    <div class="inline">
    <!-- -add a single field -->
    <div class="animated slideInLeft form--container" id="form__add">
           <form v-on:submit.prevent="onSubmit">
            <p class="form--title">   Add a Field: </p>
                   <br>
                <input v-model="formAdd.name" class="input--default" placeholder="Name">
                   <br>
                <input v-model="formAdd.city" class="input--default" placeholder="City">
                   <br>
                <input v-model="formAdd.field" class="input--default" placeholder="Total fields available">
                   <br>
                <input v-model="formAdd.latitude" class="input--default" placeholder="Latitude ex: 00.00">
                   <br>
                <input v-model="formAdd.longitude" class="input--default" placeholder="Longitude ex: 00.00">
                <br>
                <p class="form--title">   Field type: </p> 
                <br>
                <input type="radio" value="true" v-model="formAdd.fieldType">
                <label for="indoor">Indoor</label>
                <br>
                <input type="radio" value="false" v-model="formAdd.fieldType">
                <label for="outdoor">Outdoor</label>
                <br>
                <input v-on="sendData(formAdd)" 
                class="form--button" 
                type="submit" 
                value="Submit">
        </form>
    </div>
   <!-- update a single field -->
    <div class="animated slideInLeft form--container" id="form__update">
           <form v-on:submit.prevent="onSubmit">
            <p class="form--title">   Update Field Details: </p>
                  <br>
                <input v-model="formUpdate.name" class="input--default" placeholder="Name">
                   <br>
                <input v-model="formUpdate.city" class="input--default" placeholder="City">
                   <br>
                <input v-model="formUpdate.field" class="input--default" placeholder="Total fields available">
                   <br>
                 <input v-model="formUpdate.latitude" class="input--default" placeholder="Latitude ex: 00.00">
                   <br>
                <input v-model="formUpdate.longitude" class="input--default" placeholder="Longitude ex: 00.00">
                <br>
                <p class="form--title">   Field type: </p> 
                <br>
                <input type="radio" value="true" v-model="formUpdate.fieldType">
                <label for="indoor">Indoor</label>
                <br>
                <input type="radio" value="false" v-model="formUpdate.fieldType">
                <label for="outdoor">Outdoor</label>
                <br>
                <input v-on="sendData(formUpdate)" 
                class="form--button" 
                type="submit" 
                value="Submit">
        </form>
    </div>
 </div>
      <br/>
      <br/>
</div>
<div id="right">
  <div class="inline">
 <p> im an the left right side </p>
    </div>
</div>
<!-- end right -->
</div>
<!-- end left  -->
<!-- end container -->

</template>

<script>

/* eslint-disable */
export default {
  name: "TheFormSection",
  data(){
    return {
    baseURL:"https://dbsfdoc.herokuapp.com/",
      formDelete: {
        name: "",
      },
      formDisplay: {
        name: "",
      },
      formAdd: {
        name: "",
        city: "",
        field: "",
        latitude: "",
        longitude: "",
        fieldType: ""
      },
      formUpdate: {
        name: "",
        city: "",
        field: "",
        latitude: "",
        longitude: "",
        fieldType: ""
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* fallbacks buttons  */
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
  font-family: "Arvo", serif;
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

/* fallbacks end  */

#TheFormSection {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

#left {
  color:black;
}

#right {
  color:black;
}

/* crud---------------------------------------------------------------------- */
#form__delete {
  max-height: 300px;
  max-width: 200px;
  background-color: white;
  color: black;
  padding: 20px 2px 20px 20px;
  margin-top: 1rem;
}

#form__display {
  max-height: 300px;
  max-width: 200px;
  background-color: white;
  color: black;
  padding: 20px 2px 20px 20px;
  margin-top: 1rem;
}
#form__add {
  max-height: 300px;
  max-width: 200px;
  background-color: white;
  color: black;
  padding: 20px 2px 20px 20px;
  margin-top: 1rem;
}

#form__update {
  max-height: 300px;
  max-width: 200px;
  background-color: white;
  color: black;
  padding: 20px 2px 20px 20px;
  margin-top: 1rem;
}

.form--button {
  margin: 10px 0 0 0;
}



.form--container {
  -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
}

.inline {
  display: flex;
  flex-direction: row;
}

/* .display--title {
  font-size: 1rem;
  background-color: black;
  color: white;
  max-width: 70px;
  padding-top: 5px;
  padding-left: 10px;
  padding-bottom: 5px;
  -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
} */

/* .header--logo {
  max-height: 50px;
  display: flex;
  flex-direction: row;
} */

/* .test {
  float: right;
  color:#2a876a;
} */

/* field show styles  */

/* .info {
  background-color: white;
  height: 200px;
  width: 250px;
  -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
} */

/* .map {
  background-color: white;
  height: 200px;
  width: 200px;
  -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
} */
/* .name {
  font-size: 1.5rem;
  padding: 0.4rem 0rem 1rem 1rem;
}

.city {
  font-size: 1rem;
  padding: 0rem 0rem 0.5rem 1rem;
}

.fields {
  font-size: 1rem;
  padding: 0.2rem 0rem 0.5rem 1rem;
}
.id {
  font-size: 1rem;
  padding: 0.2rem 0rem 0.5rem 1rem;
}

.long {
  font-size: 0.85rem;
  padding: 0.2rem 0rem 0.5rem 1rem;
}

.lat {
  font-size: 0.85rem;
  padding: 0.2rem 0rem 0.5rem 1rem;
} */
</style>
