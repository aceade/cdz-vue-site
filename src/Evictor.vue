<template>
  <Navbar />

  <main>
    <h2>Smash The Evictor's Status</h2>
    <p>In which a pair of serpentoid mercenaries are less than impressed with one of their siblings</p>

    <splide id="splide_comic" aria-labelledby="scenery" :options="options" :has-track="false">

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
  </main>
</template>

<script setup>
import Navbar from './components/Navbar.vue';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide';

const options = {
  rewind  : true,     // go back to the start when done
  gap     : '1rem',   // gap between images
  autoplay: true,
  mediaQuery: 'min',
  autoWidth: false,
  autoHeight: true,
};
const slides = [{
    src: "https://aceade.files.wordpress.com/2022/03/panel1-1.jpg",
    alt: "A humanoid snake trying to look adorable or innocent. A speech bubble says 'Let me get this straight, Sectaa...'",
  },
  {
    src: "https://aceade.files.wordpress.com/2022/03/panel2.jpg",
    alt: "Two humanoid snakes staring out of the page. One has their arms folded and is saying 'After hearing one line from the Fomorian shaman'. The other is facepalming",
  },
  {
    src: "https://aceade.files.wordpress.com/2022/03/panel3.jpg",
    alt: "A monk or priest in the middle of a sermon. He is saying 'Like St Patrick drove the snakes before him', before catching himself",
  },
  {
    src: "https://aceade.files.wordpress.com/2022/03/panel4-1.jpg",
    alt: "A humanoid snake trying to enter a building. They hold a crowbar in their left claw. From offscreen, somebody is saying 'You decided to sneak into the local temple'",
  },
  {
    src: "https://aceade.files.wordpress.com/2022/03/panel5-1.jpg",
    alt: "A statue in the middle of a shaft of light. In the foreground, a humanoid snake's left claw looms out of the shadows, clutching a crowbar. From offscreen, somebody is saying 'And try to smash a statue of a shaman who died centuries ago'",
  },
  {
    src: "https://aceade.files.wordpress.com/2022/03/panel6.jpg",
    alt: "Two humanoid snakes staring out of the page. One has their arms folded and is saying 'In the slide-up to this \"St Patrick's Day\"'. The other is facepalming and asks \"How much tae have you been drinking?\" ",
  }
];
</script>

<style>
@import './assets/base.css';
@import './assets/main.css';
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

#splide_comic {
    max-width: 900px;
}
</style>