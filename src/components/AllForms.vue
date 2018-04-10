<template>
  <div id='AllForms'>
      <div id='left'>
      <div class='inline'>
      <IndoorFormAdd class='animated slideInLeft form'/>
      <IndoorFormUpdate class='animated slideInLeft form'/>
       <IndoorFormDelete class='animated slideInLeft form'/>
      </div>
 </div>

  <div id='middle' class='animated zoomIn'>
    SFDOC
    <br>
  <img class="middlelogo"
  src="../../static/wtf_hover.svg"
  alt="SFDOC Main Logo" />
  </div>

<div id='right'>
  <div class='inline'>
  <OutdoorFormDelete class='animated slideInRight form'/>
  <OutdoorFormUpdate class='animated slideInRight form'/>
    <OutdoorFormAdd class='animated slideInRight form'/>
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
  margin-bottom: 2rem;
}

#middle {
  margin-top:20px;
  /* max-width: 550px; */
  font-size: 2rem;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  opacity: 50%;
}

.middlelogo {
  max-height: 200px;
}
.middlelogo:hover {
  opacity: 50%;
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
