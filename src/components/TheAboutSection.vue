<template>
  <div id="TheAboutSection">
    <div class="container--herobanner">
         <img class="drop--shadow image--herobanner"
         src="../../static/banner4.png" alt="Banner Hero Image" />
    </div>
     <div class="shine container--herotext">
<p>This is a directory containting all Colorado indoor/outdoor soccer facilities information.</p>
     </div>
    <div class="container--getstarted">
        <p class="text--getstarted" href="#">Get Started!</p>
          <img class="image--arrow animated zoomInDown"
          src="../../static/white-arrow.png" alt="arrow image" />
        </div>
         <div class="cta--container">
          <!-- <button class="cta--indoor">
            Indoor
          </button>
          <button class="cta--outdoor">
            Outdoor
          </button> -->
        </div>
              <!-- begin outdoor -->
        <div id="logos">
              <h1 class="display--title">
                <img class="header--logo"
                src="../../static/colo2.png" alt="Logo" />INDOOR
              </h1>
              <div id="middle">
                Use the forms before to List, Update, Create & Delete fields in the directory.
                <br/>
                  <hr />
              </div>
              <h1 class="display--title">
                  <img class="header--logo" src="../../static/colo2.png" alt="Logo" />OUTDOOR
              </h1>
        </div>
         <!-- end about section -->
</div>
</template>
// end html ---------------------------------------------------------------------------
<script>
/* eslint-disable */
export default {
  name: "TheAboutSection"
};
</script>
// end js -----------------------------------------------------------------------------
<style scoped>
#TheAboutSection {
  background-color: #2a876a;
  /* width: 100vw; */
  /* display: flex;
  justify-content: center; */
}
.drop--shadow {
  -webkit-box-shadow: 0px 29px 53px -19px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 29px 53px -19px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 29px 53px -19px rgba(0, 0, 0, 0.75);
}
#logos {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header--logo {
  max-height: 50px;
  display: flex;
  padding-left: 2px;
  padding-right: 2px;
  flex-direction: column;

}

.display--title {
  font-size: 1rem;
  background-color: black;
  color: white;
  max-width: 70px;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
}

/* effect-shine -------------------------------------------------------------------*/
.shine:hover {
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
/* end buttons, shine, fallbacks */

.image--herobanner {
  border-top: white 5px solid;
  border-bottom: white 5px solid;
  max-width: 1280px;
}
.container--herotext {
  color: white;
    display:flex;
  justify-content:center; 
  font-size: 2rem;
  margin-top: -90px;
  padding-bottom: 36px;
  width: 100%;
}
/* get started estion */

.container--getstarted {
  background-color: #2a876a;
  color: white;
  display: flex;
  font-weight: 400;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 50px;
  margin-top: 50px;
  margin-bottom: 20px;
  font-family: "Arvo", serif;
}

.image--arrow {
  padding-top: 10px;
  max-height: 40px;
  max-width: 40px;
  color:white;
}

.cta--container {
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
    align-items: center;
}

/* .cta--outdoor{
margin-left:150px;
}

.cta--outdoor{
margin-right:20px;
}

.cta--outdoor:hover{
margin-left:150px;
}

.cta--outdoor:hover{
margin-right:20px;
} */

#middle {
  max-width: 550px;
  font-size: 1.2rem;
  padding-bottom: 10px;
}



</style>
// end css ---------------------------------------------------------------------------
