<template>
  <Navbar />

  <main>
    <div class="wrapper">
    <h2 id="scenery">Scenes</h2>
    <!-- functionally, this means I just need to define the character_slides entry, and the library handles the rest -->
    <splide id="splide_scenes" aria-labelledby="scenery" :options="options" :has-track="false">
      <div class="splide__progress">
        <div class="splide__progress__bar">
        </div>
      </div>

      <div style="position: relative">
        <splide-track>
          <SplideSlide v-for="slide in scenery_slides" :key="slide.alt">
            <a :href="slide.src" target="_newtab">
              <img :src="slide.src" :alt="slide.alt" />
            </a>
          </SplideSlide>
        </splide-track>
      </div>

    </splide>

    <h2 id="characters">Characters</h2>
    <splide id="splide_characters" aria-labelledby="characters" :options="character_options" :has-track="false">
      <div class="splide__progress">
        <div class="splide__progress__bar">
        </div>
      </div>

      <div style="position: relative">
        <splide-track>
          <SplideSlide v-for="slide in character_slides" :key="slide.alt">
            <a :href="slide.src" target="_newtab">
              <img :src="slide.src" :alt="slide.alt" />
            </a>
          </SplideSlide>
        </splide-track>
      </div>

    </splide>
    </div>

  </main>
</template>

<script setup>
import Navbar from './components/Navbar.vue';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide';

// full list of options: https://splidejs.com/guides/options/
const options = {
  rewind  : true,     // go back to the start when done
  gap     : '1rem',   // gap between images
  autoplay: true,
  height  : '15rem',  // slide height. 'rem' units are based upon the font size of the root element
  autoWidth: true,
  autoHeight: true
};

// Slightly larger height here, because all of these are around the same dimensions
const character_options = {
  rewind  : true,
  gap     : '1rem',
  autoplay: true,
  height  : '20rem',
  autoWidth: true,
  autoHeight: true
}

const scenery_slides = [{
    src: "https://aceade.files.wordpress.com/2020/11/waitingforthetrain-1.jpg",
    alt: "A pencil sketch of some shady characters ducking behind a wall with a train in the background"
  },
  {
    src: "https://aceade.files.wordpress.com/2021/02/paisti_v4_quartersize.png",
    alt: "Four children leaning against a wall in a yard"
  },
  {
    src: "https://aceade.files.wordpress.com/2021/04/dropoff_v1.png?w=1024",
    alt: ""
  },
  {
    src: "https://aceade.files.wordpress.com/2022/01/orc_and_banshee_v2.jpg",
    alt: ""
  },
  {
    src: "https://aceade.files.wordpress.com/2022/04/snakerecon.jpg",
    alt: "A pair of humanoid snakes lurking in the grass. One holds a telescope to their left eye"
  },
  {
    src: "https://aceade.files.wordpress.com/2022/01/brandubhgame_v2.jpg",
    alt: "A group of Fomorian/orcish children playing a board game"
  },
  {
    src: "https://aceade.files.wordpress.com/2022/01/youdontneedthese_v2.jpg",
    alt: "A teenage girl pulling the sunglass off a boy's face to reveal blood-red eyes. A cigarette has fallen from his open mouth"
  }
];

// define the slides of characters
const character_slides = [{
    src: "https://aceade.files.wordpress.com/2022/02/maebh.jpg",
    alt: "A portrait of an orcish girl in a sailor's dress"
  },
  {
    src: "https://aceade.files.wordpress.com/2022/02/seamus.jpg",
    alt: "A portrait of an orcish teenager with albinism"
  },
  {
    src: "https://aceade.files.wordpress.com/2021/02/diarmuid_smoking_v2_quartersize.png",
    alt: "Profile portrait of a teenage boy with yellow sunglasses, staring off into the distance. He has a cigarette in his right hand and is exhaling smoke"
  },
  {
    src: "https://aceade.files.wordpress.com/2021/03/siobhan_portrait_v2_quartersize.png",
    alt: "Portrait of a teenage girl in a grey blouse and red shawl. The left side of her head is stubbled"
  },
  {
    src: "https://aceade.files.wordpress.com/2020/09/aidan_and_grainne_v1.png",
    alt: ""
  }
];


</script>

<style>
@import './assets/base.css';
@import './assets/main.css';
@import '@splidejs/splide/dist/css/themes/splide-default.min.css';


.splide img {
  max-width: 500px;
}

#splide_scenes {
  min-height: 300px;
  max-width: 600px;
}

#splide_characters {
  min-height: 500px;
  max-width: 600px;
}
#splide_characters img{
  height: 300px;
}
</style>
