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
</script>


<style scoped>
/* fonts imports------------------------------------------------------------------ */
@import url("https://fonts.googleapis.com/css?family=Lato|Roboto|Roboto+Condensed|PT+Sans+Narrow");
@import url(https://fonts.googleapis.com/css?family=Dosis:300,400);
/* end fonts---------------------------------------------------------------------  */


main{
/* max-width: 100%; */
}
/* end reset styles-------------------------------------------------------------  */

</style>
