<template>
  <div>
<div id="Read">
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

  </div>
</template>

<script>
// eslint-disable
export default {
  name: 'read',
  props: ['field']
};

</script>

<style scoped>
</style>
