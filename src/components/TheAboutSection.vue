<template>
  <div id="TheAboutSection">
    <div class="container--image">
         <img class="test" src="../../static/banner4.png" alt="Logo" />
    </div>
      <div class="cta--container">
          <button> Indoor</button><button>Outdoor</button>
      </div>
    <div class="shine container--herotext">
     <h2> This is a directory containting all Colorado indoor/outdoor soccer facilities information.  </h2>  
    </div>
        <div class="container--arrow">
        <a href="#" class="to-content animated zoomInDown">Get Started!</a>
          <img class="shine arrow" src="../../static/arrow.png" alt="arrow" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheAboutSection'
    }
</script>

<style scoped>
/* #TheAboutSection {
  	
} */
.container--image {
  display:flex;
  justify-content:center; 
  
}
.test {
  -webkit-box-shadow:  0px 29px 53px -19px rgba(0,0,0,0.75);
-moz-box-shadow:  0px 29px 53px -19px rgba(0,0,0,0.75);
box-shadow:  0px 29px 53px -19px rgba(0,0,0,0.75);
}

.container--herotext {
    display:flex;
  justify-content:center; 
  font-size: 2rem;
  margin-top: -150px;
  padding-bottom: 36px;
  /* height: 100px; */
}

.cta--container {
    display:flex;
  justify-content:center; 
    margin-top: -70px;
    padding-bottom: 56px;
}

.container--arrow {
  background-color: white;
  color: #2A876A;
      display:flex;
      font-weight: 900;
      flex-direction: column;
      justify-content:center; 
      align-items: center;
      font-size: 2rem;
      height: 200px;
      margin:0 0rem 2rem 0rem;
      	font-family: 'Arvo', serif;
        border: 2px rgba(0,0,0,0.05) solid;
}

.to-content {
    text-decoration: none;
        list-style: none;
}

.arrow {
  padding-top: 10px;
  max-height: 60px;
  max-width: 60px;
}



/* effect-shine */
.shine:hover {
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

button {
  background-color: goldenrod;
  padding: 5px;
  border-radius: 2px;
   	font-family: 'Arvo', serif;
          margin:1rem 1rem 1rem 1rem;
             border: 2px rgba(0,0,0,0.05) solid;
                          font-size: 1rem;
  
}

button:hover {
  background-color: #2A876A;
  padding: 5px;
  border-radius: 2px;
   	font-family: 'Arvo', serif;
          margin:1rem 1rem 1rem 1rem;
             border: 2px rgba(0,0,0,0.05) solid;
  
}



</style>
