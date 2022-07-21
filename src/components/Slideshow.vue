<template>
    
    <splide :id="el_id" :options="options" :has-track="has-track">

        <div class="splide__progress">
            <div class="splide__progress__bar">
            </div>
        </div>

        <splide-track>
            <SplideSlide v-for="slide in slides" :key="slide.alt">
              <img :src="slide.src" :alt="slide.alt" />
          </SplideSlide>
        </splide-track>
    </splide>

</template>

<script>
import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide';

export default {
    props: {
        slides: Array,
        options: Object,
        hasTrack: Boolean,
        el_id: String
    },
    components: {
        Splide, SplideTrack, SplideSlide
    }
}
</script>

<style>
@import '@splidejs/splide/dist/css/themes/splide-default.min.css';

@media (min-width: 1024px) {
  .splide img {
    max-width: 800px;
  }
}
@media (min-width: 800px) and (max-width: 900px) {
  .splide img {
    max-width: 750px;
  }
}
@media (max-width: 800px) and (min-width: 700px) {
  .splide img {
    width: 500px
  }
}
@media (max-width: 500px) {
  .splide img {
    max-width: 300px;
  }
}

#splide01 {
    max-width: 900px;
}
</style>