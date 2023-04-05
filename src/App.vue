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
  computed: {
    headerLogoUrl() {
      return new URL('/src/assets/shared/logo.svg', import.meta.url).href
    }
  }
}

</script>

<template>
  <header class="website-header">
    <div class="logo">
      <img :src="headerLogoUrl" alt="">
    </div>
    <action-button type="primary">
      Start Slideshow
    </action-button>
  </header>

  <router-view></router-view>

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
