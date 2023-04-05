<template>
  <main>
    <section class="title">
      <div class="detail-img" :class="{'img-preview': preview}">
        <action-button v-if="preview" type="primary" class="close-prev-button" @click="preview = false">CLOSE</action-button>
        <img class="hero" v-show="!preview" ref="previewImg" :src="`/${paintingData.images.hero.small}`" alt="">
        <img class="gallery" v-show="preview" :src='`/${paintingData.images.gallery}`' alt="">
      </div>
      <div class="placeholder" :style="placeHolderStyles"></div>
      <div class="detail-overlay">
        <action-button v-if="!preview" icon="view-image" type="secondary" @click="preview = true">View Image</action-button>

        <div class="detail-caption">
          <h2 class="heading-2 painting-name">
            {{paintingData.name}}
          </h2>
          <h5 class="subheading-2 artist-name">
            {{ paintingData.artist.name }}
          </h5>
        </div>
      </div>
    </section>

    <section class="details">
      <img class="artist-image" :src="`/${paintingData.artist.image}`" alt="">
      <h1 class="year display">
        {{ paintingData.year }}
      </h1>

      <p class="body">
        {{paintingData.description}}
      </p>

      <a class="link-2 source" :href="paintingData.source">Go to Source</a>
    </section>

    <slideshow-player :data="paintingData" />
  </main>
</template>

<script>
import ActionButton from '../shared/ActionButton.vue';
import SlideshowPlayer from './SlideshowPlayer.vue';
import data from '../../data/data.json';

// console.log(data.find((paint) => paint.name == 'Starry Night'));


export default {
  name: "DetailComponent",
  components: {
    ActionButton,
    SlideshowPlayer
  },
  data() {
    return {
      preview: false,
      data: data,
    }
  },
  computed: {
    paintingData() {
      const paintingName = this.$route.params.name
      return data.find(paint => paint.name == paintingName);
    },
    placeHolderStyles() {
      if (this.preview) {
        const imageHeight = this.$refs.previewImg.height;
        console.log(imageHeight);
        return {
          height: imageHeight + 'px',
          width: '100%',
          display: 'block',
          background: "#7D7D7D",
          transform: 'scale(0.95)',
          "border-radius": "10px",

        }
      } else {
        return {
          display: 'none',
          height: 0,
          width: 0,
        }
      }
        
    }
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
    display: block;
    text-transform: uppercase;
  }

}

.title {
  position: relative;

  > .detail-img {
    width: 100%;
    display: flex;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    .close-prev-button {
      display: none;
    }

    img {
      width: 100%;
    }
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


/* ------- */

section.title {
  > .detail-img.img-preview {
    animation: imageContAnim 1s;
    animation-direction: alternate;
    animation-fill-mode: forwards;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    .close-prev-button {
      display: block;
      color: white;
      font-size: 14px;
      margin-bottom: 42px;
      margin-top: 54px;
    }

    img {
      animation: imageAnim 1s;
      margin-bottom: 100px;
    }
  }
}

@keyframes imageContAnim {
  0 {
    
  }
  50% {
    position: fixed;
    z-index: 300;
  }
  100% {
    position: fixed;
    z-index: 300;
    background: rgba(0, 0, 0, 0.75);
    padding: 0 24px;
  }
}

@keyframes imageAnim {
  0% {
    transform: translate(0, 0) scale(0.8);
  }
  20% {
    transform: translate(0, -200px) scale(1.5);
  }

  30% {
    transform: translate(0,0) scale(1);
  }
  
}
</style>