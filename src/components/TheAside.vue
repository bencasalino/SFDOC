<template>
  <aside id="TheAside">
      <!-- outdoor-delte a field -->
    <div class="animated slideInLeft form--container" id="indoor--form__delete">
        <form action="">
            <p class="form--title">   Delete a Field: </p>
                <br>
             <input type="text" name="delete" value="enter ID number">
             <br>
            <input class="form--button" type="submit" value="Submit">
        </form>
    </div>
          <!-- outdoor-show a single field -->
    <div class="animated slideInLeft form--container" id="indoor--form__display">
        <form action="">
            <p class="form--title">   Display a Field: </p>
                <br>
             <input type="text" name="show" value="search by ID">
             <br>
            <input class="form--button" type="submit" value="Submit">
        </form>
    </div>
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
color: black;
float: left; 
display: block;
}

#indoor--form__delete {
max-height: 300px;
max-width: 400px; 
background-color: white;
color: black;
padding: 20px;
margin-bottom: 1rem;
}

#indoor--form__display {
max-height: 300px;
max-width: 400px; 
background-color: white;
color: black;
padding: 20px;
margin-bottom: 1rem;
}

.form--button {
margin: 10px 0 0 0;
}


</style>
