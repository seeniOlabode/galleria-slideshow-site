<script>
// import HomeComponent from './components/home/HomeComponent.vue';
import ActionButton from './components/shared/ActionButton.vue';
import DetailComponent from './components/detail/DetailComponent.vue';

export default {
  name: "App",
  components: {
    ActionButton,
    DetailComponent,
    // HomeComponent
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
  <!-- <home-component /> -->
  <detail-component />

    
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
