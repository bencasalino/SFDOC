<template>
  <div id="AllForms">
    <!-- <div class="inline--flex--row"> -->
        <IndoorFormDelete class="animated slideInLeft form--container form__delete"/>
        <IndoorFormDisplay class="animated slideInLeft form--container form__delete"/>
        <IndoorFormAdd class="animated slideInLeft form--container form__add"/>
        <IndoorFormUpdate class="animated slideInLeft form--container form__add"/>
    <!-- </div>
        <div class="inline--flex--row"> -->
        <OutdoorFormDelete class="animated slideInRight form--container form__delete"/>
        <OutdoorFormDisplay class="animated slideInRight form--container form__delete"/>
        <OutdoorFormAdd class="animated slideInRight form--container form__add"/>
        <OutdoorFormUpdate class="animated slideInRight form--container form__add"/>
    <!-- </div>   -->
  </div>
</template>

<script>
import IndoorFormDelete from './IndoorFormDelete';
import OutdoorFormDelete from './OutdoorFormDelete';

import IndoorFormDisplay from './IndoorFormDisplay';
import OutdoorFormDisplay from './OutdoorFormDisplay';

import IndoorFormAdd from './IndoorFormAdd';
import OutdoorFormAdd from './OutdoorFormAdd';

import IndoorFormUpdate from './IndoorFormUpdate';
import OutdoorFormUpdate from './OutdoorFormUpdate';

export default {
  name: 'AllForms',
  components: {
    IndoorFormDelete,
    OutdoorFormDelete,

    IndoorFormDisplay,
    OutdoorFormDisplay,

    IndoorFormAdd,
    OutdoorFormAdd,

    IndoorFormUpdate,
    OutdoorFormUpdate,
  },
};

</script>

<style scoped>
/* display styles------------------------- */
#AllForms {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
}

.inline--flex--row {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.form--container {
  -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
}
/* display styles------------------------- */


/* forms ----------------------------- */
/* .form__delete {
  max-height: 300px;
  max-width: 200px;
  background-color: white;
  color: black;
  padding: 20px 2px 20px 20px;
  margin-top: 1rem;
}

.form__add {
  max-height: 300px;
  max-width: 200px;
  background-color: white;
  color: black;
  padding: 20px 2px 20px 20px;
  margin-top: 1rem;
} */
/* forms ----------------------------- */

</style>
