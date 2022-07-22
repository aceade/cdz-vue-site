<template>
    <splide id="splide_stories" :options="options" :has-track="false">
        <div class="splide__progress">
            <div class="splide__progress__bar">
            </div>
        </div>

        <div style="position: relative">
            <splide-track v-if="objectType === 'pdf'">
            <SplideSlide v-for="slide in slides" :key="slide.title">
                <object aria-labelledby="storyTitle" class="story_embed" type="application/pdf" width="100%" :data="slide.src">
                    <label id="storyTitle" > {{slide.title}}</label>
                    <!-- This is a fallback for browsers that don't show embedded PDFs -->
                    <p v-for="entry in slide.intro">
                        {{entry}}
                    </p>
                    <hr/>
                    <a :href="slide.src">Download full version</a>
                </object>
            </SplideSlide>
            </splide-track>
        
            <splide-track v-if="objectType === 'video'">
            <SplideSlide v-for="slide in slides" :key="slide.title">
                <label id="storyTitle"> {{slide.title}}</label>
                <iframe :src="slide.src" :width="slide.width" :height="slide.height" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                
            </SplideSlide>
            </splide-track>
        </div>
    </splide>
</template>

<script>
import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide';

export default {
    props: {
        slides: Array,
        options: Object,
        objectType: {
            type: String,
            validator(value) {
                return ["pdf", "video"].includes(value)
            }
        },
        hasTrack: {
          type: Boolean,
          default: false
        }
    },
    created() {
      console.log("Options:", this.options, "\nSlides:", this.slides, "object type:", this.objectType)
    },
    components: {
        Splide, SplideTrack, SplideSlide
    }
}
</script>

<style>

@import '@splidejs/splide/dist/css/themes/splide-default.min.css';

#splide_stories {
  min-height: 500px;
  width: 100%;

}
#splide_stories object{
  min-height: 500px;
  width: 100%;
  overflow: hidden;
}

#splide_stories iframe{
    min-height: 400px;
}

.splide__slide label {
    margin-top: 20px!important;
    margin-left: 50px;
    font-size: 18px;
    font-weight: bold;
}

.splide__slide {
    text-indent: 3ch;
}

.splide__slide a {
    font-size: 18px;
    margin-top: 20px!important;
}

</style>