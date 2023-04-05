<template>
    <main class="galleria-layout">
        <painting-preview v-for="painting in paintingsData" :key="painting.name + painting.year" :paintingData="painting" @click="$router.push(`detail/${painting.name}`)" />
    </main>
</template>

<script>
import PaintingPreview from './PaintingPreview.vue';
import data from '../../data/data.json'

export default {
    name: "HomeComponent",
    components: {
        PaintingPreview,
    },
    data() {
        return {
            paintingsData: data,
        }
    }
}
</script>

<style>

</style>