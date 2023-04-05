<template>
  <main>
    <section class="title">
      <img src="src/assets/girl-with-pearl-earring/hero-small.jpg" alt="">
      <div class="detail-overlay">
        <action-button icon="view-image" type="secondary">View Image</action-button>

        <div class="detail-caption">
          <h2 class="heading-2 painting-name">
            Girl with a Pearl Earring
          </h2>
          <h5 class="subheading-2 artist-name">
            Vincent Van Gogh
          </h5>
        </div>
      </div>
    </section>

    <section class="details">
      <img class="artist-image" src="src/assets/girl-with-pearl-earring/artist.jpg" alt="">
      <h1 class="year display">
        1665
      </h1>

      <p class="body">
        The painting is a tronie, the Dutch 17th-century description of a 'head' that was not m eant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.
      </p>

      <action-button type="misc" class="source">Go to Source</action-button>
    </section>

    <slideshow-player />

  </main>
</template>

<script>
import ActionButton from '../shared/ActionButton.vue';
import SlideshowPlayer from './SlideshowPlayer.vue';

export default {
  name: "DetailComponent",
  components: {
    ActionButton,
    SlideshowPlayer
  }
}
</script>

<style scoped>

main {
  padding-bottom: 195px;
}

.details {
  margin-top: 98px;
  position: relative;
  padding-top: 70px;
  
  .artist-image {
    width: 64px;
    height: 64px;
    position: absolute;
    top: -40px;
  }

  .year {
    position: absolute;
    right: 0;
    top: 1px
  }

  .body {
    position: relative;
    z-index: 10;
  }

  .source {
    margin-top: 40px;
  }

}

.title {
  position: relative;

  > img {
    width: 100%;
  }

  .detail-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;

    .detail-caption {
      background: $colors.white;
      padding: 24px;
      position: absolute;
      bottom: -50px;
      left: 0;
      width: 85%;

      .artist-name {
            color: rgba(125, 125, 125, 1);
            margin-top: 8px;
        }
    }
  }
}


</style>