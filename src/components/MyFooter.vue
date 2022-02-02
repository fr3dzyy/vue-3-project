<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  #footer {
    text-align: center;
    margin-top: 50px;
    width: 100%;
    background-color: #2f2f2f;
  }
</style>

<template>
  <footer id="footer">Single-page application made by {{ this.name }}</footer>
</template>
