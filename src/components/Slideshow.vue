<template>
    
    <!-- Defines the splide entry. Pass in the options, slides and whether or not it has a track-->
    <splide :options="options" :has-track="has-track">

        <div class="splide__progress">
            <div class="splide__progress__bar">
            </div>
        </div>

        <splide-track>
            <SplideSlide v-for="slide in slides" :key="slide.alt">
              <div>
                <label>{{slide.caption}}</label>
                <img :src="slide.src" :title="slide.alt" />
              </div>
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
        hasTrack: {
          type: Boolean,
          default: false
        }
    },
    created() {
      console.log("Options:", this.options, "\nSlides:", this.slides)
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

.splide--slide {
    max-width: 900px;
}

.splide--slide label {
  min-height: 50px;
  display: inline-block;
}
</style>