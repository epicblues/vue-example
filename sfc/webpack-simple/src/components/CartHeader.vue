<template>
  <h1>{{upperTitle}}</h1>
</template>

<script>
export default {
  
  data() {
    return {
      title: "Vue Cart"
    }
    },
  computed: {
      upperTitle() { return this.title.toUpperCase() }
  }
        };

</script>