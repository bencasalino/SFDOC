<template>
  <div id="TheAboutSection">
    <div class="container--image">
         <img class="test" src="../../static/banner4.png" alt="Logo" />
    </div>
     
    <div class="container--herotext">
     <h2> This is a directory containting all Colorado indoor/outdoor soccer facilities information.  </h2>  
    </div>
        <div class="container--arrow">
        <p href="#" class="to-content animated zoomInDown shine">Get Started!</p>
          <img class="arrow" src="../../static/white-arrow.png" alt="arrow" />
        </div>
         <div class="cta--container">
          <button> Indoor</button><button>Outdoor</button>
          
      </div>
         <img class="shine header--logo animated slideInLeft" src="../../static/colo2.png" alt="Logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheAboutSection'
    }
</script>

<style scoped>
#TheAboutSection {
background-color: #2A876A;
}
.container--image {
  display:flex;
  justify-content:center; 
  
}

.header--logo {
height: 50px;
padding: 5px;  
opacity: 50%;
}
.test {
  -webkit-box-shadow:  0px 29px 53px -19px rgba(0,0,0,0.75);
-moz-box-shadow:  0px 29px 53px -19px rgba(0,0,0,0.75);
box-shadow:  0px 29px 53px -19px rgba(0,0,0,0.75);
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
  background-color: #2A876A;
  color: white;
  padding: 8px;
  border-radius: 4px;
   	font-family: 'Arvo', serif;
          margin:1rem 1rem 1rem 1rem;
             border: 2px rgba(0,0,0,0.05) solid;
                          font-size: 1rem;
  
}

button:hover {
  background-color: gold;
  padding: 8px;
  color: black;
  border-radius: 6px;
   	font-family: 'Arvo', serif;
          margin:1rem 1rem 1rem 1rem;
             border: 2px rgba(0,0,0,0.05) solid;
  
}

p {
  color: #2A876A;
}


.container--herotext {
  color: white;
    display:flex;
  justify-content:center; 
  font-size: 2rem;
  margin-top: -90px;
  padding-bottom: 36px;
  /* height: 100px; */
}

.cta--container {
    display:flex;
  justify-content:center; 
    /* margin-top: -70px;
    padding-bottom: 56px; */
          color:white;
}

.container--arrow {
      background-color: #2A876A;
      color:white;
      display:flex;
      font-weight: 900;
      flex-direction: column;
      justify-content:center; 
      align-items: center;
      font-size: 2rem;
      height: 180px;
      /* margin:0 0rem 1rem 0rem; */
      	font-family: 'Arvo', serif;
}

.to-content {
    text-decoration: none;
        list-style: none;
              color:white;
}

.arrow {
  padding-top: 10px;
  max-height: 60px;
  max-width: 60px;
        color:white;
}

</style>
