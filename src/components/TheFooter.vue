<template>
    <footer id="TheFooter" class="wrapper">
       <p> © Copyright 2018 | Created by <a href="www.bencasalino.com"> Ben Casalino </a> </p>
    </footer>
</template>

<script>
/* eslint-disable */
export default {
  name: "TheFooter"
};
</script>

<style scoped>
#TheFooter {
  background-color: white;
  color: black;
  height: 10vh;
  display: flex;
  justify-content: center;
  position: sticky;
  align-items: center;
  letter-spacing: 1px;
}

a {
    list-style: none; 
  text-decoration: none; 

}
</style>
