<template>

</template>

<script>
export default {
  name: "TheFields"
};
</script>

<style scoped>
#TheFields {
  background-color: white;
  color: black;
  /* height: 100px; */
  /* display: flex;
  flex-direction: row; */
    /* float: right; */
  margin-top: 5rem;
}

.info {
  background-color: white;
  height: 200px;
  width: 250px;
  -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
}

.map {
  background-color: white;
  height: 200px;
  width: 200px;
  -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
}
.wrapper {
  /* display: flex;
  flex-direction: row;
    float: right; */
}
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

.name {
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
}
</style>
