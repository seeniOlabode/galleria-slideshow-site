<template>
    <section class="slideshow-player">
        <div class="slider-cont">
            <div class="slider-child"></div>
        </div>

        <div class="player-details">
            <div class="painting-slide-details">
                <h3 class="heading-3">
                    {{ data.name }}
                </h3>
                <h5 class="subheading-2 slide-artist-name">
                    {{ data.artist.name }}
                </h5>
            </div>

            <div class="media-buttons">
                <action-button type="media">
                    <img src="/src/assets/shared/icon-back-button.svg" alt="">
                </action-button>
                <action-button type="media">
                    <img src="/src/assets/shared/icon-next-button.svg" alt="">
                </action-button>
            </div>
        </div>
    </section>
</template>

<script>
import ActionButton from '../shared/ActionButton.vue'
export default {
  components: { ActionButton },
  props: ["data"],

}
</script>

<style scoped>
.media-buttons {
    display: flex;
    gap: 30px
}

.player-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.slideshow-player {
    background-color: $colors.white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 17px 24px;
    z-index: 100;

    .slide-artist-name {
        color: rgba(0, 0, 0, 0.75);
    }

}

.slider-cont {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(229, 229, 229, 1);

    .slider-child {
        /* width: 40%; */
        height: 100%;
        background: rgba(0, 0, 0, 1);
        -webkit-box-shadow: -1px -1px 9px 0.5px #ced2ff;
        -moz-box-shadow: -1px -1px 9px 0.5px #ced2ff;
        box-shadow: -1px -1px 9px 0.5px #ced2ff;
        animation: sliderRoll 2s infinite;
    }
}

@keyframes sliderRoll {
    from {
        width: 0%;
    }
    to {
        width: 100%
    }
}

</style>