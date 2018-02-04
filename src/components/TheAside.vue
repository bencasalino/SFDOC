<template>
  <aside id="TheAside">
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
          <!-- <div class="tri animated slideInLeft"></div> -->
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
          <!-- <div class="tri animated slideInLeft"></div> -->
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
          <!-- <div class="tri animated slideInLeft"></div> -->
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
      <!-- <div class="tri animated slideInLeft"></div> -->
      <br/>
      <!-- begin outdoor -->
          <div class="animated slideInLeft form--container" id="outdoor--form__delete">
        <form action="">
            <p class="form--title">   Delete Outdoor Field: </p>
                <br>
                <input v-model="message" placeholder="search by ID">
             <br>
            <input class="form--button" type="submit" value="Submit">
        </form>
    </div>
          <!-- <div class="tri animated slideInLeft"></div> -->
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
          <!-- <div class="tri animated slideInLeft"></div> -->
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
          <!-- <div class="tri animated slideInLeft"></div> -->
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
      <!-- <div class="tri animated slideInLeft"></div> -->
      <br/>
  
  
  </aside>
</template>



<script>
export default {
  name: 'TheAside'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#TheAside {
    margin-top: 20px;
color: black;
float: left; 
display: block;
}


/* indoor */
#indoor--form__delete {
max-height: 300px;
max-width: 400px; 
background-color: white;
color: black;
padding: 20px;
margin-top: 4rem;
}

#indoor--form__display {
max-height: 300px;
max-width: 400px; 
background-color: white;
color: black;
padding: 20px;
margin-top: 4rem;
}

#indoor--form__add {
max-height: 300px;
max-width: 400px; 
background-color: white;
color: black;
padding: 20px;
margin-top: 4rem;
}
#indoor--form__update {
max-height: 300px;
max-width: 400px; 
background-color: white;
color: black;
padding: 20px;
margin-top: 4rem;
}

/* outdoor */

#outdoor--form__delete {
max-height: 300px;
max-width: 400px; 
background-color: white;
color: black;
padding: 20px;
margin-top: 4rem;
}

#outdoor--form__display {
max-height: 300px;
max-width: 400px; 
background-color: white;
color: black;
padding: 20px;
margin-top: 4rem;
}

#outdoor--form__add {
max-height: 300px;
max-width: 400px; 
background-color: white;
color: black;
padding: 20px;
margin-top: 4rem;
}
#outdoor--form__update {
max-height: 300px;
max-width: 400px; 
background-color: white;
color: black;
padding: 20px;
margin-top: 4rem;
}

.form--button {
margin: 10px 0 0 0;
}


.form--button {
  background-color: #2A876A;
  color: white;
  padding: 8px;
  border-radius: 4px;
   	font-family: 'Arvo', serif;
          /* margin:1rem 1rem 1rem 1rem; */
             border: 2px rgba(0,0,0,0.05) solid;
                          font-size: 1rem;
  
}

.form--button:hover {
  background-color: gold;
  padding: 8px;
  color: black;
  border-radius: 6px;
   	font-family: 'Arvo', serif;
          /* margin:1rem 1rem 1rem 1rem; */
             border: 2px rgba(0,0,0,0.05) solid;
  
}
/* 
.tri {
    float: left;
    width: 0;
height: 0;
border-style: solid;
border-width: 50px 200px 0 0;
border-color: white transparent transparent transparent;
} */

.form--container {
    -webkit-box-shadow: 0px 10px 5px -2px rgba(0,0,0,0.33);
-moz-box-shadow: 0px 10px 5px -2px rgba(0,0,0,0.33);
box-shadow: 0px 10px 5px -2px rgba(0,0,0,0.33);
}

</style>
