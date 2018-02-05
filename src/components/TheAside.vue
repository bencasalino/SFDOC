<template>
  <aside id="TheAside">

                <h1 class="display--title">      
                       <img class="header--logo" src="../../static/colo2.png" alt="Logo" />INDOOR</h1>
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
      <!-- begin outdoor -->
                <h1 class="display--title">      
                       <img class="header--logo" src="../../static/colo2.png" alt="Logo" />OUTDOOR</h1>
            <div class="inline">
        
          <div class="animated slideInLeft form--container" id="outdoor--form__delete">
        <form action="">
            <p class="form--title">   Delete Outdoor Field: </p>
                <br>
                <input v-model="message" placeholder="search by ID">
             <br>
            <input class="form--button" type="submit" value="Submit">
        </form>
    </div>

          <!-- outdoor-show a single field -->
    <div class="animated slideInLeft form--container" id="outdoor--form__display">
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
    <div class="animated slideInLeft form--container" id="outdoor--form__add">
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
    <div class="animated slideInLeft form--container" id="outdoor--form__update">
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
    
      <br/>
  </aside>
</template>



<script>
export default {
  name: "TheAside"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#TheAside {
  margin-top: 20px;
  color: black;
  /* float: left; */
  /* display: block; */
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

.form--container {
  -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
}

.inline {
  display: flex;
  flex-direction: row;
}

.display--title {
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
}

.header--logo {
  max-height: 50px;
  display: flex;
  flex-direction: row;
}
</style>
