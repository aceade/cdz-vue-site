<script setup>
import Navbar from './components/Navbar.vue';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide';

const stories = [
    {
        src: "https://aceade.files.wordpress.com/2021/03/arrival.pdf",
        title: "Arrival"
    },
    {
        src: "https://aceade.files.wordpress.com/2021/03/whydohumansconstrict.pdf",
        title: "Why Do Humans Constrict?"
    },
    {
        src: "https://aceade.files.wordpress.com/2021/03/fomoritis_confirmed.pdf",
        title: "Fomoritis Confirmed"
    }
]

const options = {
    autoPlay:false,
    autoWidth: true,
    autoHeight: true,
    perPage: 1,
    rewind: true
}
</script>

<template>
    <Navbar/>

    <main>
        <div class="wrapper">
            <splide id="splide_stories" :options="options" :has-track="false">
                <div class="splide__progress">
                    <div class="splide__progress__bar">
                    </div>
                </div>

                <div style="position: relative">
                    <splide-track>
                    <SplideSlide v-for="slide in stories" :key="slide.title">
                        <label id="storyTitle" :data="slide.title"></label>
                        <object aria-labelledby="storyTitle" class="story_embed" type="application/pdf" width="100%" :data="slide.src"></object>
                    </SplideSlide>
                    </splide-track>
                </div>
            </splide>
        </div>
    </main>
</template>

<style>
@import './assets/base.css';
@import './assets/main.css';
@import '@splidejs/splide/dist/css/themes/splide-default.min.css';

.story_embed {
    min-width: 300px;
}

#splide_stories {
  min-height: 500px;
  width: 600px;

}
#splide_stories object{
  min-height: 500px;
  min-width: 600px;
  overflow: hidden;
}

.splide__slide label {
    margin-top: 20px!important;
}
</style>