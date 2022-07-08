<template>
  <Navbar />

  <main>
    <div class="wrapper">
    <h2 id="scenery">Scenes</h2>
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

const options = {
  rewind  : true,
  gap     : '5rem',
  autoplay: false,
  height  : '15rem',
};

const character_options = {
  rewind  : true,
  gap     : '5rem',
  autoplay: false,
  height  : '15rem',
  
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
  }
];

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
  }
];


</script>

<style>
@import './assets/base.css';
@import '@splidejs/splide/dist/css/themes/splide-default.min.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

}

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
