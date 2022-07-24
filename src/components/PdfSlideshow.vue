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
                    <p class="intro" v-for="entry in slide.intro">
                        {{entry}}
                    </p>
                    <hr/>
                    <a :href="slide.src">Download full version</a>
                </object>
            </SplideSlide>
            </splide-track>
        
            <!-- Videos are embedded Youtube links, using Youtube's own embbeding code -->
            <!-- This does mean the sizes may be off, but the user can view on Youtube for a better experience -->
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

    // properties that must be passed in
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
    components: {
        Splide, SplideTrack, SplideSlide
    }
}
</script>

<style>

@import '@splidejs/splide/dist/css/themes/splide-default.min.css';

/**
    The width settings here and in the object/PDF entry are to account for the scrollbar in the PDF
 */
.splide__slide {
    min-height: 500px;
    width: calc(100% - 10px)

}
.splide__slide object{
    min-height: 500px;
    overflow: hidden;
    width: calc(100% - 20px);
    margin-left: -10px;
}

/* Iframes with videos will be centred. PDFs will NOT because this screws around with the fallback text */
.splide__slide iframe{
    min-height: 400px;
    margin: auto!important;
    display: flex!important;
}

.splide__slide label {
    margin-top: 20px!important;
    margin-left: 50px;
    font-size: 18px;
    font-weight: bold;
}

.splide__slide {
    /* Fallback text will have indentation */
    text-indent: 3ch;
}

.splide__slide a {
    font-size: 18px;
    margin-top: 20px!important;
}

p.intro {
    padding-top: 5px;
}

</style>