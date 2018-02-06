<template>
  <header id="TheHeader">
    <img class="shine header--github animated slideInDown"
    src="../../static/github.png"
    alt="Github Logo and Link" />
         <a href="https://github.com/bencasalino">
      </a>
      <img class="header--logo animated slideInLeft"
      src="../../static/logoblk.png"
      alt="SFDOC Main Logo" />
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
/* eslint-disable */
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
  border-right: 5px white solid;
  float: left;
  margin-right: 1rem;
}
.header--logo__text {
  letter-spacing: 0.2rem;
  font-size: 3rem;
  line-height: 3.2rem;
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
