<template>
    <section class="gallery-painting">
        <img :src="previewImage" alt="">

        <div class="painting-caption">
            <h2 class="heading-2 painting-name">
                {{paintingData.name}}
            </h2>
            <h5 class="subheading-2 artist-name">
                {{paintingData.artist.name}}
            </h5>
        </div>
    </section>
</template>

<script>
export default {
    name: "PaintingPreview",
    props: ["paintingData"],
    computed: {
        previewImage() {
            return new URL(`/${this.paintingData.images.gallery}`, import.meta.url).href
        }
    }
}
</script>

<style scoped>

.gallery-painting {
    position: relative;
    cursor: pointer;
    overflow: hidden;

    img {
        width: 100%;
        transition: transform 0.5s ease-in-out;
    }

    .painting-caption {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 6px;
        padding: 32px;

        .painting-name {
            color: white;
            display: inline-block;
            position: relative;
        }

        /* .painting-name::after {
            content: '.';
            width: 0%;
            display: block;
            background-color: white;
            position: absolute;
            height: 1px;
            bottom: 3px;
            transition: width 0.5s;
            color: rgba(0,0,0,0);
        } */

        .artist-name {
            color: rgba(255, 255, 255, 0.75)
        }

        /* Caption Gradient */

        background: rgb(0,0,0);
        background: -moz-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 36%);
        background: -webkit-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 36%);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 36%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#ffffff",GradientType=1); 
    }
}

.gallery-painting:hover {
        img {
            transform: scale(1.1);
        }

        /* .painting-name::after {
            width: 100%;
        } */
    }

</style>