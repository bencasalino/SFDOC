<template>
  <div id="app">
    <TheHeader />
    <main>
      <TheAboutSection />
      <AllForms />
      <TheFieldsDisplay />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheAboutSection from './components/TheAboutSection';
import AllForms from './components/AllForms';
// import Test from './components/Test';
import TheFieldsDisplay from './components/TheFieldsDisplay';
import TheFooter from './components/TheFooter';

/* eslint-disable */
export default {
  name: 'App',
  components: {
    TheHeader,
    TheAboutSection,
    AllForms,
    // Test,
    TheFieldsDisplay,
    TheFooter
  },
}

</script>

<style scoped>
/* fonts imports------------------------------------------------------------------ */
@import url("https://fonts.googleapis.com/css?family=Lato|Roboto|Roboto+Condensed|PT+Sans+Narrow");
@import url(https://fonts.googleapis.com/css?family=Dosis:300,400);
/* end fonts---------------------------------------------------------------------  */

#app {
/* max-width: 100vw; */
}
</style>
