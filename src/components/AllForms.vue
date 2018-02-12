<template>
  <div id='AllForms'>
    <div id='left'>
    <div class='inline'>
        <IndoorFormDelete class='animated slideInLeft form'/>
        <IndoorFormDisplay class='animated slideInLeft form'/>
     </div>
        <div class='inline'>
        <IndoorFormAdd class='animated slideInLeft form'/>
        <IndoorFormUpdate class='animated slideInLeft form'/>
    </div>
    </div>
    <br>
    <div id='right'>
    <div class='inline'>
        <OutdoorFormDelete class='animated slideInRight form'/>
        <OutdoorFormDisplay class='animated slideInRight form'/>
      </div>
    <div class='inline'>
        <OutdoorFormAdd class='animated slideInRight form'/>
        <OutdoorFormUpdate class='animated slideInRight form'/>
    </div>
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
  justify-content: space-between;
}


.inline {
  display: flex;
  flex-direction: row;
}
/* display styles------------------------- */

/* forms ----------------------------- */
.form {
  -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.33);
  max-height: 300px;
  max-width: 200px;
  background-color: white;
  color: black;
  padding: 20px 2px 20px 20px;
  margin-top: 1rem;
}
/* forms ----------------------------- */

</style>
