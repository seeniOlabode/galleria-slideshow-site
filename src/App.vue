<script>
import ActionButton from './components/shared/ActionButton.vue';
export default {
  name: "App",
  components: {
    ActionButton
  },
}

</script>

<template>
  <header class="website-header">
    <div class="logo">
      <img src="src/assets/shared/logo.svg" alt="">
    </div>
    <action-button type="primary">
      Start Slideshow
    </action-button>
  </header>
    
</template>

<style>
#app {
  background-color: $colors.white;
  width: 100vw;
  height: 100vh;

  .website-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    border-bottom: solid 1px $colors.light-grey;
  }
}
</style>
