<template>
  <div id="TheAboutSection">
    <div class="container--hero__banner">
         <img class="drop-shadow hero--banner__image" src="../../static/banner4.png" alt="Banner Hero Image" />
    </div>
     
    <div class="shine container--herotext">
     <h2> This is a directory containting all Colorado indoor/outdoor soccer facilities information.  </h2>  
    </div>
    <div class="container--getstarted">
        <div class="">
        <p href="#" class="">Get Started!</p>
          <img class="arrow--image" src="../../static/white-arrow.png" alt="arrow image" />
        </div>  
    </div>
         <!-- <div class="cta--container">
          <button> Indoor</button><button>Outdoor</button>
        </div> -->
         <!-- <img class="shine header--logo animated slideInLeft" src="../../static/colo2.png" alt="Logo" /> -->
    </div>
  </div>
</template>
// end html ---------------------------------------------------------------------------
<script>
export default {
  name: "TheAboutSection"
};
</script>
// end js ---------------------------------------------------------------------------
<style scoped>
#TheAboutSection {
  background-color: #2a876a;
}

.hero--banner__image {
  border-top: white 5px solid;
  border-bottom: white 5px solid;
}

.container--getstarted {
  background-color: #2a876a;
  color: white;
  display: flex;
  font-weight: 400;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  /* height: 180px; */
  font-family: "Arvo", serif;
}

.header--logo {
  height: 50px;
  padding: 5px;
  opacity: 50%;
}
.drop-shadow {
  -webkit-box-shadow: 0px 29px 53px -19px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 29px 53px -19px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 29px 53px -19px rgba(0, 0, 0, 0.75);
}

/* effect-shine -------------------------------------------------------------------*/
.header--logo__text:hover {
  -webkit-mask-image: linear-gradient(
    -75deg,
    rgba(0, 0, 0, 0.6) 30%,
    #000 50%,
    rgba(0, 0, 0, 0.6) 70%
  );
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
/* end shine --------------------------------------------------------------------- */

button {
  background-color: #2a876a;
  color: white;
  padding: 8px;
  border-radius: 4px;
  font-family: "Arvo", serif;
  margin: 1rem 1rem 1rem 1rem;
  border: 2px rgba(0, 0, 0, 0.05) solid;
  font-size: 1rem;
}

button:hover {
  background-color: gold;
  padding: 8px;
  color: black;
  border-radius: 6px;
  font-family: "Arvo", serif;
  margin: 1rem 1rem 1rem 1rem;
  border: 2px rgba(0, 0, 0, 0.05) solid;
}

p {
  color: #2a876a;
}

.container--herotext {
  color: white;
    display:flex;
  justify-content:center; 
  font-size: 2rem;
  margin-top: -90px;
  padding-bottom: 36px;
}

.container--getstarted {
  margin-top: 20px;
}

/* .cta--container {
    display:flex;
  justify-content:center; 
          color:white;
} */

/* .to-content {
    text-decoration: none;
        list-style: none;
              color:white;
} */

.arrow--image {
  padding-top: 10px;
  max-height: 40px;
  max-width: 40px;
  color:white;
}
</style>
// end css ---------------------------------------------------------------------------
