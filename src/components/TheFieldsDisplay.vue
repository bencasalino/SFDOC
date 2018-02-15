<template>
<div id="field--display--container">
  <div id="indoor">
    <div v-bind:key="field.name" v-for="field in data.indoorfields" class="card">
                <div class="corner">Indoor
                </div>
                <p class="field--name__text">{{ field.name }}</p>
              <div class="fieldinfo--wrapper">
                <p class="label--text__city">City:
                  <span class="displayed--text">{{ field.city }}
                  </span>
                <p class="label--text">Total Fields:
                  <span class="displayed--text">{{ field.fields }}
                  </span>
                </p>
                <p class="label--text">Latitude:
                  <span class="displayed--text">{{ field.latitude }}
                  </span>
                </p>
                <span class="label--text">Longitude:
                  <span class="displayed--text">{{ field.longitude }}
                  </span>
                </span>
                </div>
                <br>
                <div id="map"></div>
          </div>
    </div>
<!-- <br> -->
  <div id="outdoor">
    <div v-bind:key="field.name" v-for="field in data.outdoorfields" class="card">
                <div class="corner">Outdoor
                </div>
            <p class="field--name__text">{{ field.name }}</p>
            <div class="fieldinfo--wrapper">
            <p class="label--text__city">City:
              <span class="displayed--text">{{ field.city }}
              </span>
            </p>
            <p class="label--text">Total Fields:
              <span class="displayed--text">{{ field.fields }}
              </span>
            </p>
            <p class="label--text">Latitude:
              <span class="displayed--text">{{ field.latitude }}
              </span>
            </p>
            <p class="label--text">Longitude:
              <span class="displayed--text">{{ field.longitude }}
              </span>
            </p>
            <br>
            <!-- info wrapper -->
            </div>
            <div id="map"></div>
            <!-- outdoor -->
    </div>
  </div>
  <!--  main cont -->
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "TheFieldsDisplay",
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      fetch("http://localhost:3000/")
        .then(res => res.json())
        .then(data => {
          this.data = data;
          // console.log(data);
        });
    }
  }
};
</script>

<style scoped>

#field--display--container {
/* height:500px; */
padding: 0 .5rem 1rem .5rem;
display: flex; 
justify-content: space-between;
/* flex-direction: column; */
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 420px;
  max-width: 300px;
  min-height: 250px;
  min-width: 250px;
  color: black; 
  background-color: white;
  padding:10px;
    -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  margin-bottom: 3.5rem;
}

.card:hover {
  background-color: #eeecec;
  border-radius: 3px;
  -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.93);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.93);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.93);
  -webkit-transition: box-shadow .3s ease-in;
  -moz-transition: box-shadow .3s ease-in;
  -o-transition: box-shadow .3s ease-in;
  transition: box-shadow  .3s ease-in;
}

#indoor {
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
}
#outdoor {
   display: flex;
  justify-content: space-around;
  flex-flow: wrap; 
}


.field--name__text { 
  font-weight: 900;
  font-size: 1.5rem;
  padding-bottom: 6px;
  text-align: center;
  
}


.label--text { 
  font-size: 1rem;
  font-family: "Arvo", serif;
  padding-top: 5px;
}

.label--text__city { 
  font-size: 1rem;
  font-family: "Arvo", serif;
  padding-bottom: 5px;
}

.displayed--text {
color: #2a876a; 
font-family: "Dosis", serif;
font-size: 1.2rem;
padding-left:2px;
padding-top:4px;
}

.website--link {
  font-size: .8rem;
}

#map{ 
  background-color: black; 
  max-height: 200px;
  max-width: 200px;
  min-height: 200px;
  min-width: 200px;
  padding:10px;
  -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
    cursor: pointer;
}

#map:hover{ 
  background-color: gray; 
  max-height: 200px;
  max-width: 200px;
  min-height: 200px;
  min-width: 200px;
  padding:10px;
  -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.73);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.73);
  -webkit-transition: box-shadow 2s ease-in;
  -moz-transition: box-shadow 2s ease-in;
  -o-transition: box-shadow 2s ease-in;
  transition: box-shadow  2s ease-in;
  cursor: pointer;
}

button {
  display: block;
  background-color: #2a876a;
  color: white;
  padding: 5px;
  border-radius: 4px;
  font-family: "Arvo", serif;
  margin-top: 10px;
  border: 2px rgba(0, 0, 0, 0.05) solid;
  font-size: 1rem;
  list-style: none; 
  text-decoration: none; 
}

button:hover {
  display: block;
  background-color: gold;
  padding: 5px;
  color: black;
  border-radius: 6px;
  font-family: "Arvo", serif;
  /* margin: 1rem 1rem 1rem 1rem; */
  border: 2px rgba(0, 0, 0, 0.05) solid;
    list-style: none; 
  text-decoration: none;
}

a {
      list-style: none; 
  text-decoration: none;
}

a:hover {
        list-style: none; 
  text-decoration: none;
}


.fieldinfo--wrapper {
float: left;
}


.corner {
  display: flex;
  justify-content: flex-start;
  color: #2a876a;
  padding-bottom: 10px;
}
</style>
