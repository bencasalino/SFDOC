<template>
<div id="ShowAField">
            <p class="field--name__text">{{ field.name }}</p>
            <div class="fieldinfo--wrapper">
            <p class="label--text__city">City:
              <span class="displayed--text">{{ field.city }}
              </span>
            </p>
            <p class="label--text">Total Fields:
              <span class="displayed--text">{{ field.fields }}
              </span>
            </p>
          </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "ShowAField",
  data() {
    return {
      displayIndoorField: false
    };
  },
  methods: {
    load() {
      fetch("https://dbsfdoc.herokuapp.com/")
        .then(res => res.json())
        .then(data => {
          this.displayIndoorField = true;
        });
    }
  }
};
</script>

<style scoped>
#ShowAField {
  background-color:gold;
  color: black;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
