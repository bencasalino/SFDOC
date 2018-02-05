<template>
  <header id="TheHeader">
    <img class="shine header--github animated slideInDown" src="../../static/github.png" alt="Github Logo" />
         <a href="https://github.com/bencasalino">
      </a>
      <img class="shine header--logo animated slideInLeft" src="../../static/colo2.png" alt="Logo" />
      <h1 class="header--logo__text">
        Soccer Field
         Directory
       <br />
       <em> of Colorado</em>
      </h1>
  </header>
</template>
// end html ---------------------------------------------------------------------------
<script>
export default {
  name: "TheHeader"
};
</script>
// end js ---------------------------------------------------------------------------
<style scoped>
/* my stlyes  ----------------------------------------------------------------------*/
#TheHeader {
  height: 10vh;
}
.header--logo {
  float: left;
}
.header--logo__text {
  letter-spacing: 0.2rem;
  font-size: 3rem;
  line-height: 3.4rem;
  font-weight: 400;
  color: white;
  font-family: "Arvo", serif;
}

.header--github {
  float: right;
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
</style>
// end styles -----------------------------------------------------------------------
