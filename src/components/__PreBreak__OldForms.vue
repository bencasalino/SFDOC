<template>
  <div id="TheFormSection">
    <div id="left">
      <div class="inline">
    <!-- indoor-delte a field -->
    <div class="animated slideInLeft form--container" id="indoor--form__delete">
           <form v-on:submit.prevent="onSubmit">
            <p class="form--title"> Delete Indoor Field: </p>
                <br>
                <input v-model="indoorFormDelete.id" placeholder="search by ID">
             <br>
            <input class="form--button" type="submit" value="Submit">
        </form>
    </div>

<!-- indoor-show a single field -->
    <div class="animated slideInLeft form--container" id="indoor--form__display">
           <form v-on:submit.prevent="onSubmit">
              <p class="form--title">   Display Indoor Field: </p>
                <br>
            <input v-model="indoorFormDisplay.id" placeholder="search by ID">
             <br>
             <!-- <select v-model="indoorFormDisplay" name="fieldType" id="fieldType">
              <option value="" disable selected> pick a field type </option>
              <option value="true"> Indoor </option>
              <option value="false"> Outdoor </option>
              </select> -->



            <input class="form--button" type="submit" value="Submit">
        </form>
    </div>
    </div>
    <div class="inline">
    <!-- indoor-add a single field -->
    <div class="animated slideInLeft form--container" id="indoor--form__add">
           <form v-on:submit.prevent="onSubmit">
            <p class="form--title">   Add Indoor Field: </p>
                <br>
                <input v-model="indoorFormAdd.id" placeholder="ID">
                   <br>
                <input v-model="indoorFormAdd.name" placeholder="Name">
                   <br>
                <input v-model="indoorFormAdd.city" placeholder="City">
                   <br>
                <input v-model="indoorFormAdd.field" placeholder="Field #">
                   <br>
                <input v-model="indoorFormAdd.website" placeholder="Website (if applicable)">
                   <br>
                <input v-model="indoorFormAdd.latitude" placeholder="Latitude">
                   <br>
                <input v-model="indoorFormAdd.longitude" placeholder="Longitude">
                <br>

<input type="radio" value="true" v-model="picked">
<label for="indoor">Indoor</label>
<br>
<input type="radio" value="false" v-model="picked">
<label for="outdoor">Outdoor</label>
<br>
<span>Picked: {{ picked }}</span>




                <select v-model="indoorFormDisplay" name="fieldType" id="fieldType">
                    <option disable value> pick a field type </option>
                    <option value="true"> Indoor </option>
                    <option value="false"> Outdoor </option>
                </select>
                <input v-on="sendData(indoorFormAdd)" 
                class="form--button" 
                type="submit" 
                value="Submit">
        </form>
    </div>


   <!-- indoor-update a single field -->
    <div class="animated slideInLeft form--container" id="indoor--form__update">
           <form v-on:submit.prevent="onSubmit">
            <p class="form--title">   Update Indoor Field: </p>
                <br>
                <input v-model="indoorFormUpdate.id" placeholder="ID to be updated">
                   <br>
                <input v-model="indoorFormUpdate.name" placeholder="Name">
                   <br>
                <input v-model="indoorFormUpdate.city" placeholder="City">
                   <br>
                <input v-model="indoorFormUpdate.field" placeholder="Field #">
                   <br>
                <input v-model="indoorFormUpdate.website" placeholder="Website">
                   <br>
                <input v-model="indoorFormUpdate.longitude" placeholder="Latitude">
                   <br>
                <input v-model="indoorFormUpdate.latitude" placeholder="Longitude">
                <br>
                <input class="form--button" type="submit" value="Submit">
        </form>
    </div>
 </div>
      <br/>
      <br/>
</div>
<div id="right">
            <div class="inline">
          <div class="animated slideInRight form--container" id="outdoor--form__delete">
           <form v-on:submit.prevent="onSubmit">
            <p class="form--title"> Delete Outdoor Field: </p>
                <br>
                <input v-model="outdoorFormDelete.id" placeholder="search by ID">
             <br>
            <input class="form--button" type="submit" value="Submit">
        </form>
    </div>

          <!-- outdoor-show a single field -->
    <div class="animated slideInRight  form--container" id="outdoor--form__display">
           <form v-on:submit.prevent="onSubmit">
            <p class="form--title">   Display Outdoor Field: </p>
                <br>
            <input v-model="outdoorFormDisplay.id" placeholder="search by ID">
             <br>
            <input class="form--button" type="submit" value="Submit">
        </form>
    </div>
    </div>
      <div class="inline">
    <!-- outdoor-add a single field -->
    <div class="animated slideInRight  form--container" id="outdoor--form__add">
        <form v-on:submit.prevent="onSubmit">
            <p class="form--title">   Add Outdoor Field: </p>
                <br>
                <input v-model="outdoorFormAdd.id" placeholder="ID">
                   <br>
                <input v-model="outdoorFormAdd.name" placeholder="Name">
                   <br>
                <input v-model="outdoorFormAdd.city" placeholder="City">
                   <br>
                <input v-model="outdoorFormAdd.field" placeholder="Field">
                   <br>
                <input v-model="outdoorFormAdd.website" placeholder="Website (if applicable)">
                   <br>
                <input v-model="outdoorFormAdd.latitude" placeholder="Latitude">
                   <br>
                <input v-model="outdoorFormAdd.longitude" placeholder="Longitude">
                <br>
                <input class="form--button" type="submit" value="Submit">
        </form>
    </div>

   <!-- outdoor-update a single field -->
    <div class="animated slideInRight  test form--container" id="outdoor--form__update">
        <form v-on:submit.prevent="onSubmit">
            <p class="form--title"> Update Outdoor Field: </p>
                <br>
                <input v-model="outdoorFormUpdate.id" placeholder="ID to be updated">
                   <br>
                <input v-model="outdoorFormUpdate.name" placeholder="Name">
                   <br>
                <input v-model="outdoorFormUpdate.city" placeholder="City">
                   <br>
                <input v-model="outdoorFormUpdate.field" placeholder="Field">
                   <br>
                <input v-model="outdoorFormUpdate.website" placeholder="Website">
                   <br>
                <input v-model="outdoorFormUpdate.latitude" placeholder="Latitude">
                   <br>
                <input v-model="outdoorFormUpdate.longitude" placeholder="Longitude">
                <br>
                <input class="form--button" type="submit" value="Submit">
        </form>
    </div>
    </div>
<!-- end right -->
</div>
  <!-- showforms section -->
  <!-- <div class="wrapper">
    <div class="info">
        <p class="name"> Boulder Indoor</p>
        <p class="city"> Boulder</p>
        <p class="fields"> 3</p>
        <p class="id"> 2</p>
        <span class="lat"> 23.32</span>
        <span class="long"> -55.09 </span>
        <button class="url"> Website</button>
    </div>
    <div class="map">
    </div>
</div> -->
<!-- end left  -->
<!-- end container -->
</div>
</template>

<script>

/* eslint-disable */
export default {
  name: "TheFormSection",
  data(){
    return {
    baseURL:"https://dbsfdoc.herokuapp.com/",
      indoorFormDelete: {
        id: "",
      },
      indoorFormDisplay: {
        id: "",
      },
      outdoorFormDelete: {
        id: "",
      },
      outdoorFormDisplay: {
        id: "",
      },
      indoorFormAdd: {
        id: "",
        name: "",
        city: "",
        field: "",
        website: "",
        latitude: "",
        longitude: "",
        selected: ""
      },
      indoorFormUpdate: {
        id: "",
        name: "",
        city: "",
        field: "",
        website: "",
        latitude: "",
        longitude: "",
      },
        outdoorFormAdd: {
        id: "",
        name: "",
        city: "",
        field: "",
        website: "",
        latitude: "",
        longitude: "",
      },
      outdoorFormUpdate: {
        id: "",
        name: "",
        city: "",
        field: "",
        website: "",
        latitude: "",
        longitude: "",
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





.inline {
  display: flex;
  flex-direction: row;
}



</style>


