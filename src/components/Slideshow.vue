<template>
    
    <!-- Collapses the slideshow, if allowed -->
    <button class="btn" v-if="collapsible" @click="show = !show">Toggle</button>

    <!-- Defines the splide entry. Pass in the options, slides and whether or not it has a track-->
    <splide v-if="show" :options="options" :has-track="hasTrack">

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
    <hr/>

</template>

<script>
import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide';

export default {
    props: {
        collapsible: {
          type: Boolean,
          default: true
        },
        show: {
          type: Boolean,
          default: true
        },
        slides: Array,
        options: Object,
        hasTrack: {
          type: Boolean,
          default: false
        }
    },
    components: {
      Splide, SplideTrack, SplideSlide
    }
}
</script>

<style>
@import '../assets/base.css';
@import '../assets/main.css';
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

img {
  margin: auto;
  display: flex;
}

.splide--slide {
    max-width: 900px;
}

.splide--slide label {
  min-height: 50px;
  display: inline-block;
  margin-top: 10px;
}

.splide {
  transition: max-height 0.2s ease-out;
}

button{
  font-size: 16px;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 5px;
}

hr {
  margin-bottom: 10px;
}
</style>