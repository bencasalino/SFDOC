<template>
<div class="container">
  <div v-bind:key="field.id" v-for="field in data.outdoor" class="indoor">
      <p class="field--name__text">{{ field.name }}</p>
            <div class="fieldinfo--wrapper">
      <p class="label--text__city">City:
        <span class="displayed--text">{{ field.city }}
        </span>
      </p>
      <span class="label--text">ID#:
        <span class="displayed--text">{{ field.id }}
        </span>
      </span>
      <span class="label--text">Total Fields:
        <span class="displayed--text">{{ field.fields }}
        </span>
      </span>
        <!-- <span class="displayed--text website--link">
          <button>
          <a v-bind:href="field.url"> Website
            </a>
          </button>
        </span> -->
      <p class="label--text">Latitude:
        <span class="displayed--text">{{ field.latitude }}
        </span>
      </p>
      <span class="label--text">Longitude:
        <span class="displayed--text">{{ field.longitude }}
        </span>
      </span>
      <!-- field info wrapper  -->
      </div>
       <br>
      <div id="map"></div>
      <!-- indoor wrapper  -->
  </div>
<!-- <br> -->
  <div v-bind:key="field.id" v-for="field in data.indoor" class="outdoor">
      <p class="field--name__text">{{ field.name }}</p>
      <div class="fieldinfo--wrapper">
      <p class="label--text__city">City:
        <span class="displayed--text">{{ field.city }}
        </span>
      </p>
      <span class="label--text">ID#:
        <span class="displayed--text">{{ field.id }}
        </span>
      </span>
      <span class="label--text">Total Fields:
        <span class="displayed--text">{{ field.fields }}
        </span>
      </span>
        <!-- <span class="displayed--text website--link">
          <button>
          <a v-bind:href="field.url"> Website
            </a>
          </button>
        </span> -->
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
      fetch("https://dbsfdoc.herokuapp.com/")
        .then(res => res.json())
        .then(data => {
          this.data = data;
          // console.log(data);
        });
    }
  }
};

// map function 
      // var map;
      // function initMap() {
      //   map = new google.maps.Map(document.getElementById('map'), {
      //     center: {lat: -34.397, lng: 150.644},
      //     zoom: 8
      //   });
      // }
</script>

<style scoped>

.container {
  height:500px;
  padding: 0 .5rem 1rem .5rem;
display: flex; 
justify-content: space-between;
/* flex-direction: column; */
}

.indoor {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 320px;
  max-width: 300px;
  min-height: 250px;
  min-width: 250px;
  color: black; 
  background-color: white;
  padding:10px;
    -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
}

.outdoor {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 320px;
  max-width: 300px;
  min-height: 250px;
  min-width: 250px;
  color: black; 
  background-color: white;
  padding:10px;
    -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
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
</style>
