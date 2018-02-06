<template>
  <div id="TheFormSection">
    <div id="left">
    <!-- <h1 class="display--title">      
                       <img class="header--logo" src="../../static/colo2.png" alt="Logo" />INDOOR</h1> -->
      <div class="inline">
<!-- indoor-delte a field -->
    <div class="animated slideInLeft form--container" id="indoor--form__delete">
        <form action="">
            <p class="form--title">   Delete Indoor Field: </p>
                <br>
                <input v-model="message" placeholder="search by ID">
             <br>
            <input class="form--button" type="submit" value="Submit">
        </form>
    </div>

<!-- indoor-show a single field -->
    <div class="animated slideInLeft form--container" id="indoor--form__display">
        <form action="">
            <p class="form--title">   Display Indoor Field: </p>
                <br>
            <input v-model="message" placeholder="search by ID">
             <br>
            <input class="form--button" type="submit" value="Submit">
        </form>
    </div>
    </div>
    <div class="inline">
    <!-- indoor-add a single field -->
    <div class="animated slideInLeft form--container" id="indoor--form__add">
        <form action="">
            <p class="form--title">   Add Indoor Field: </p>
                <br>
                <input v-model="message" placeholder="ID">
                   <br>
                <input v-model="message" placeholder="Name">
                   <br>
                <input v-model="message" placeholder="City">
                   <br>
                <input v-model="message" placeholder="Field #">
                   <br>
                <input v-model="message" placeholder="Website (if applicable)">
                   <br>
                <input v-model="message" placeholder="Latitude">
                   <br>
                <input v-model="message" placeholder="Longitude">
                <br>
                <input class="form--button" type="submit" value="Submit">
        </form>
    </div>


   <!-- indoor-update a single field -->
    <div class="animated slideInLeft form--container" id="indoor--form__update">
        <form action="">
            <p class="form--title">   Update Indoor Field: </p>
                <br>
                <input v-model="message" placeholder="ID to be updated">
                   <br>
                <input v-model="message" placeholder="Name">
                   <br>
                <input v-model="message" placeholder="City">
                   <br>
                <input v-model="message" placeholder="Field #">
                   <br>
                <input v-model="message" placeholder="Website">
                   <br>
                <input v-model="message" placeholder="Latitude">
                   <br>
                <input v-model="message" placeholder="Longitude">
                <br>
                <input class="form--button" type="submit" value="Submit">
        </form>
    </div>
 </div>
      <!-- <div class="tri animated slideInLeft"></div> -->
      <br/>

      <br/>



  <!-- showforms section -->
  <div class="wrapper">
  <!-- info -->
    <div class="info">
        <p class="name"> Boulder Indoor</p>
        <p class="city"> Boulder</p>
        <p class="fields"> 3</p>
        <p class="id"> 2</p>
            <span class="lat"> 23.32</span>
            <span class="long"> -55.09 </span>
            <button class="url"> Website</button>
    </div>
    <!-- map  -->
    <div class="map">
    </div>
</div>
<!-- end left  -->
</div>
<div id="right">
            <div class="inline">
          <div class="animated slideInRight form--container" id="outdoor--form__delete">
        <form action="">
            <p class="form--title">   Delete Outdoor Field: </p>
                <br>
                <input v-model="message" placeholder="search by ID">
             <br>
            <input class="form--button" type="submit" value="Submit">
        </form>
    </div>

          <!-- outdoor-show a single field -->
    <div class="animated slideInRight  form--container" id="outdoor--form__display">
        <form action="">
            <p class="form--title">   Display Outdoor Field: </p>
                <br>
            <input v-model="message" placeholder="search by ID">
             <br>
            <input class="form--button" type="submit" value="Submit">
        </form>
    </div>
    </div>
      <div class="inline">
    <!-- outdoor-add a single field -->
    <div class="animated slideInRight  form--container" id="outdoor--form__add">
        <form action="">
            <p class="form--title">   Add Outdoor Field: </p>
                <br>
                <input v-model="message" placeholder="ID">
                   <br>
                <input v-model="message" placeholder="Name">
                   <br>
                <input v-model="message" placeholder="City">
                   <br>
                <input v-model="message" placeholder="Field #">
                   <br>
                <input v-model="message" placeholder="Website (if applicable)">
                   <br>
                <input v-model="message" placeholder="Latitude">
                   <br>
                <input v-model="message" placeholder="Longitude">
                <br>
                <input class="form--button" type="submit" value="Submit">
        </form>
    </div>

   <!-- outdoor-update a single field -->
    <div class="animated slideInRight  form--container" id="outdoor--form__update">
        <form action="">
            <p class="form--title">   Update Outdoor Field: </p>
                <br>
                <input v-model="message" placeholder="ID to be updated">
                   <br>
                <input v-model="message" placeholder="Name">
                   <br>
                <input v-model="message" placeholder="City">
                   <br>
                <input v-model="message" placeholder="Field #">
                   <br>
                <input v-model="message" placeholder="Website">
                   <br>
                <input v-model="message" placeholder="Latitude">
                   <br>
                <input v-model="message" placeholder="Longitude">
                <br>
                <input class="form--button" type="submit" value="Submit">
        </form>
    </div>
    </div>
<!-- end right -->
</div>
<!-- end container -->
</div>
</template>

<script>
export default {
  name: "TheFormSection"
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
}

.form--button:hover {
  background-color: gold;
  padding: 8px;
  color: black;
  border-radius: 6px;
  font-family: "Arvo", serif;
  /* margin:1rem 1rem 1rem 1rem; */
  border: 2px rgba(0, 0, 0, 0.05) solid;
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

/* indoor---------------------------------------------------------------------- */
#indoor--form__delete {
  max-height: 300px;
  max-width: 200px;
  background-color: white;
  color: black;
  padding: 20px 2px 20px 20px;
  margin-top: 1rem;
}

#indoor--form__display {
  max-height: 300px;
  max-width: 200px;
  background-color: white;
  color: black;
  padding: 20px 2px 20px 20px;
  margin-top: 1rem;
}
/* indoor---------------------------------------------------------------------- */
#indoor--form__add {
  max-height: 300px;
  max-width: 200px;
  background-color: white;
  color: black;
  padding: 20px 2px 20px 20px;
  margin-top: 1rem;
}

#indoor--form__update {
  max-height: 300px;
  max-width: 200px;
  background-color: white;
  color: black;
  padding: 20px 2px 20px 20px;
  margin-top: 1rem;
}

/* outdoor---------------------------------------------------------------------- */

#outdoor--form__delete {
  max-height: 300px;
  max-width: 200px;
  background-color: white;
  color: black;
  padding: 20px 2px 20px 20px;
  margin-top: 1rem;
}

#outdoor--form__display {
  max-height: 300px;
  max-width: 200px;
  background-color: white;
  color: black;
  padding: 20px 2px 20px 20px;
  margin-top: 1rem;
}
/* outdoor---------------------------------------------------------------------- */

#outdoor--form__add {
  max-height: 300px;
  max-width: 200px;
  background-color: white;
  color: black;
  padding: 20px 2px 20px 20px;
  margin-top: 1rem;
}
#outdoor--form__update {
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
