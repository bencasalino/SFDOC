<template>
<div class="container">
  <div v-for="field in data.outdoor" class="indoor">
      <p class="field--name__text">{{ field.name }}</p>
      <p class="label--text">City:
        <span class="displayed--text">{{ field.city }}
        </span>
      </p>
      <p class="label--text">ID:
        <span class="displayed--text">{{ field.id }}
        </span>
      </p>
      <p class="label--text">Field(s):
        <span class="displayed--text">{{ field.fields }}
        </span>
      </p>
      <p class="label--text">Website:
        <span class="displayed--text website--link">
          <a v-bind:href="field.url">{{ field.url }}</a>
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
      <div id="mapid"></div>
  </div>
<br>
  <div v-for="field in data.indoor" class="outdoor">
      <p class="field--name__text">{{ field.name }}</p>
      <p class="label--text">City:
        <span class="displayed--text">{{ field.city }}
        </span>
      </p>
      <p class="label--text">ID:
        <span class="displayed--text">{{ field.id }}
        </span>
      </p>
      <p class="label--text">Field(s):
        <span class="displayed--text">{{ field.fields }}
        </span>
      </p>
      <p class="label--text">Website:
        <span class="displayed--text website--link">
          <a v-bind:href="field.url">{{ field.url }}
            </a>
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
      <div id="mapid"></div>
  </div>
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

</script>

<style scoped>

.container {
  padding: 0 .5rem 1rem .5rem;
display: flex; 
justify-content: space-between;
/* flex-direction: column; */
}

.indoor {
  max-height: 400px;
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
  max-height: 400px;
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
  font-size: 1.5rem;
  padding-bottom: 2px;
}


.label--text { 
  font-size: 1rem;
  font-family: "Arvo", serif;
  padding-top: 5px;
}

.displayed--text {
color: #2a876a; 
font-family: "Dosis", serif;
font-size: 1.2rem;
}

.website--link {
  font-size: .8rem;
}



#mapid{ 
  background-color: red; 
  max-height: 200px;
  max-width: 300px;
  min-height: 200px;
  min-width: 250px;
  padding:10px;

}
</style>
