<template>
  <div id="TheAboutSection">
    <div class="container--image">
         <img class="test" src="../../static/banner4.png" alt="Logo" />
    </div>
    <div class="container--herotext">
     <h2> This is a directory containting all indoor/outdoor soccer facilities in Colorado details and information.  </h2>  
    </div>
        <div class="container--arrow">
        <a href="#" class="to-content animated zoomInDown">Get Started!</a>
          <img class="arrow animated zoomInDown" src="../../static/arrow.png" alt="arrow" />
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
#TheAboutSection {
  	
}
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
  margin-top: -100px;
  padding-bottom: 36px;
  /* height: 100px; */
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



</style>
