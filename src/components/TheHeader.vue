<template>
  <header id="TheHeader">
 <a href="https://github.com/bencasalino">
        <img class="header--github animated slideInDown" src="../../static/github.png" alt="Github Logo" />
      </a>
      <img class="header--logo animated slideInLeft" src="../../static/field.png" alt="Logo" />
      <span class="header--logo__text">
        Soccer Field Directory<br /> of Colorado
      </span>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#TheHeader {
height: 10vh;

}

/* my stlyes  */
.header--github {
float: right; 
}


.header--logo { 
	float: left;
	font-size: 1rem; 

}

.header--logo__text { 
	float: left;
		margin: .5rem 0 .5rem .2rem;
		letter-spacing: .2rem;
	font-size: 3rem; 
	color: white;
	  	font-family: 'Arvo', serif;
}


/* effect-shine */
.header--logo__text:hover {
  -webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
  -webkit-mask-size: 200%;
  animation: shine 2s infinite;
}

@-webkit-keyframes shine {
  from {
    -webkit-mask-position: 150%;
  }
  
  to {
    -webkit-mask-position: -50%;
  }
}

</style>
