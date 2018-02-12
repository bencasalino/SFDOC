<template>
  <div id='AllForms'>
    <div class='inline--flex--row'>
        <IndoorFormDelete class='animated slideInLeft form--container form'/>
        <IndoorFormDisplay class='animated slideInLeft form--container form'/>
        <IndoorFormAdd class='animated slideInLeft form--container form'/>
        <IndoorFormUpdate class='animated slideInLeft form--container form'/>
    </div>
        <div class='inline--flex--row'>
        <OutdoorFormDelete class='animated slideInLeft form--container form'/>
        <OutdoorFormDisplay class='animated slideInLeft form--container form'/>
        <OutdoorFormAdd class='animated slideInLeft form--container form'/>
        <OutdoorFormUpdate class='animated slideInLeft form--container form'/>
    </div>
  </div>
</template>

<script>

import IndoorFormDelete from './IndoorFormDelete';
import IndoorFormDisplay from './IndoorFormDisplay';
import IndoorFormUpdate from './IndoorFormUpdate';
import IndoorFormAdd from './IndoorFormAdd';
import OutdoorFormDelete from './OutdoorFormDelete';
import OutdoorFormDisplay from './OutdoorFormDisplay';
import OutdoorFormUpdate from './OutdoorFormUpdate';
import OutdoorFormAdd from './OutdoorFormAdd';

export default {
  name: 'AllForms',
  components: {
    IndoorFormDelete,
    IndoorFormDisplay,
    IndoorFormUpdate,
    IndoorFormAdd,
    OutdoorFormDelete,
    OutdoorFormDisplay,
    OutdoorFormUpdate,
    OutdoorFormAdd,
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

.form {
  max-height: 300px;
  max-width: 200px;
  background-color: white;
  color: black;
  padding: 20px 2px 20px 20px;
  margin-top: 1rem;
}
/* forms ----------------------------- */

</style>
