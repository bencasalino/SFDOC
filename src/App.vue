<template>
  <div id="app">
    <TheHeader />
    <main>
      <TheAboutSection />
      <TheFormSection/>
      <TheFieldsDisplay />
    </main>
      <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheAboutSection from './components/TheAboutSection';
import TheFormSection from './components/TheFormSection';
import TheFieldsDisplay from './components/TheFieldsDisplay';
import TheFooter from './components/TheFooter';
/* eslint-disable */


export default {
  name: 'App',
  components: {
    TheHeader,
    TheAboutSection,
    TheFormSection,
    TheFieldsDisplay,
    TheFooter
  },
}

// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
</script>


<style scoped>
/* fonts imports------------------------------------------------------------------ */
@import url("https://fonts.googleapis.com/css?family=Lato|Roboto|Roboto+Condensed|PT+Sans+Narrow");
@import url(https://fonts.googleapis.com/css?family=Dosis:300,400);
/* end fonts---------------------------------------------------------------------  */
</style>
