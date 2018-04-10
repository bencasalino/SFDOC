<template>
  <div id='app'>
    <TheHeader />
    <main>
      <TheAboutSection />
      <!-- <AllForms />
      <TheFieldsDisplay />
      <read v-bind:field='field'/>
      <ShowChart /> -->
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheAboutSection from './components/TheAboutSection';
// import AllForms from './components/AllForms';
// import TheFieldsDisplay from './components/TheFieldsDisplay';
// import ShowChart from './components/ShowChart';
// import TheFooter from './components/TheFooter';
// import read from './components/read';

/* eslint-disable */
export default {
  name: 'App',
  components: {
    TheHeader,
    TheAboutSection
    // AllForms,
    // TheFieldsDisplay,
    // read,
    // ShowChart,
    // TheFooter
  },
  methods: {
    getafield() {
    fetch(`${this.baseURL}${this.fieldtype}/${this.name}`).then(res => res.json())
    // eslint-disable-next-line
      .catch(error => console.error('Error:', error))
      // eslint-disable-next-line

      .then(response => {
        console.log(response.outdoorfields[0]);
        this.field = response.outdoorfields[0]
      });
    }
  },
    data() {
    return {
    baseURL: 'https://dbsfdoc.herokuapp.com/',
      field: {},
      fieldtype: 'outdoorfields',
      name: 'Cheeseman'
    };
  },
  created() {
      this.getafield();
  }
}

</script>

<style scoped>
/* fonts imports------------------------------------------------------------------ */
@import url('https://fonts.googleapis.com/css?family=Lato|Roboto|Roboto+Condensed|PT+Sans+Narrow');
@import url(https://fonts.googleapis.com/css?family=Dosis:300,400);
/* end fonts---------------------------------------------------------------------  */

#app {
/* max-width: 100vw; */
}
</style>
