<template>
  <Navbar />

  <main>
    <div class="wrapper">
      <h2 id="scenery">Scenes</h2>
      <Slideshow id="splide_scenes" :options="options" :slides="scenery_slides" ></Slideshow>

      <h2 id="characters">Characters</h2>
      <Slideshow id="splide_characters" :options="character_options" :slides="character_slides" ></Slideshow>

      <h2 id="posters">Posters</h2>
      <Slideshow id="splide_posters" :options="options" :slides="poster_slides" ></Slideshow>
    </div>

    <Footer/>

  </main>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Slideshow from '../components/Slideshow.vue';
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Slideshow,
    Footer
  },
  data() {
    return {
      options: {
        rewind  : true,     // go back to the start when done
        gap     : '1rem',   // gap between images
        autoplay: true,
        mediaQuery: 'min',
        autoWidth: false,
        autoHeight: true,
      },
      character_options: {
        rewind  : true,
        gap     : '5rem',
        autoplay: true,
        autoWidth: false,
        autoHeight: true,
        mediaQuery: 'min',
      },
      scenery_slides: [{
        src: "https://aceade.files.wordpress.com/2020/11/waitingforthetrain-1.jpg",
        alt: "A pencil sketch of some shady characters ducking behind a wall with a train in the background",
        caption: "Fomorians and snakes hiding from an armoured train"
      },
      {
        src: "https://aceade.files.wordpress.com/2021/02/paisti_v4_quartersize.png",
        alt: "Four children leaning against a wall in a yard",
        caption: "Four Fomorian children in a yard somewhere. L-R: Maebh, Seamus, Diarmuid and Siobhán"
      },
      {
        src: "https://aceade.files.wordpress.com/2021/04/dropoff_v1.png",
        alt: "A painting of a submarine dropping off a shipment",
        caption: "Submarine dropping off a shipment"
      },
      {
        src: "https://aceade.files.wordpress.com/2022/01/orc_and_banshee_v2.jpg",
        alt: "A banshee and an orc staring at each other. The orc has a skeptical expression on his face",
        caption: "L: a banshee. R: a Fomorian"
      },
      {
        src: "https://aceade.files.wordpress.com/2022/04/snakerecon.jpg",
        alt: "A pair of humanoid snakes lurking in the grass. One holds a telescope to their left eye",
        caption: "Serpentoids at work"
      },
      {
        src: "https://aceade.files.wordpress.com/2022/01/brandubhgame_v2.jpg",
        alt: "A group of Fomorian/orcish children playing a board game",
        caption: "Fomorian children playing a game of Brandubh."
      },
      {
        src: "https://aceade.files.wordpress.com/2022/01/youdontneedthese_v2.jpg",
        alt: "A teenage girl pulling the sunglass off a boy's face to reveal blood-red eyes. A cigarette has fallen from his open mouth",
        caption: "Siobhán Ní Chartaí (l) pulling the sunglasses off Diarmuid Uí Flatharta (r). He is surprised that anyone would do this and not freak out"
      }
      ],
      character_slides: [{
        src: "https://aceade.files.wordpress.com/2022/02/maebh.jpg",
        alt: "A portrait of an orcish girl in a sailor's dress",
        caption: "Fomorian girl Maebh Ní Bhrodaí"
      },
      {
        src: "https://aceade.files.wordpress.com/2022/02/seamus.jpg",
        alt: "A portrait of an orcish teenager with albinism",
        caption: "Fomorian boy Seamus Uí Shea"
      },
      {
        src: "https://aceade.files.wordpress.com/2021/02/diarmuid_smoking_v2_quartersize.png",
        alt: "Profile portrait of a teenage boy with yellow sunglasses, staring off into the distance. He has a cigarette in his right hand and is exhaling smoke",
        caption: "Diarmuid Uí Flatharta, unwillingly Fomorianised"
      },
      {
        src: "https://aceade.files.wordpress.com/2021/03/siobhan_portrait_v2_quartersize.png",
        alt: "Portrait of a teenage girl in a grey blouse and red shawl. The left side of her head is stubbled",
        caption: "Siobhán Ní Chartaí, unwillingly Fomorianised dwarven citizen"
      },
      {
        src: "https://aceade.files.wordpress.com/2020/09/aidan_and_grainne_v1.png",
        alt: "A woman in an armchair with a man standing to her left. The man's right arm is around her shoulder.",
        caption: "'Upper-class' Fomorians Aidan O'Rourke and his wife Gráinne"
      }],
      poster_slides: [{
        src: "https://aceade.files.wordpress.com/2022/01/wiresharks_warning_poster.png",
        alt: "A poster of a shark looming up towards letters floating on the surface of the sea. Above the poster are the words \"Careless communications cause casualties. Wireless security is your responsibility\". Below the image are some helpful tips",
        caption: "Loose Lips Lose Lives!"
      },
      {
        src: "https://aceade.files.wordpress.com/2021/09/tappers_poster.jpg",
        alt: "A poster of two shady-looking characters in an alleyway. One has planted themselves against a wall and holds a revolver in the air. The other kneels next to a crate and holds one hand to their ear; the other hand is writing something",
        caption: "Beware the Tapper!"
      },
      {
        src: "https://aceade.files.wordpress.com/2021/10/inquisitor_v4.jpg",
        alt: "A poster of a hooded character in a mask, sandwiched between the words \"The Inquisition is Always Watching\" in Irish",
        caption: "Translation: The (Dwarven) Inquisition is Always Watching"
      }]
    }
  }
}

</script>

<style>
@import '../assets/base.css';
@import '../assets/main.css';
@import '@splidejs/splide/dist/css/themes/splide-default.min.css';

/* Applies when the screen is at least 1024 pixels */
@media (min-width: 1024px) {
  .splide img {
    max-width: 900px;
  }

  #splide_scenes {
    max-width: 900px;
  }

  #splide_characters {
    max-width: 900px;
  }

}
@media (min-width: 800px) and (max-width: 900px) {
  .splide img {
    max-width: 750px;
  }

  #splide_scenes {
    max-width: 750px;
  }

  #splide_characters {
    max-width: 600px;
  }
}
@media (max-width: 800px) and (min-width: 700px) {
  .splide img {
    width: 500px
  }

  #splide_scenes {
    max-width: 700px;
  }

  #splide_characters {
    max-width: 700px;
  }
}

@media (max-width: 500px) {
  .splide img {
    max-width: 300px;
  }

  #splide_scenes {
    max-width: 700px;
  }

  #splide_characters {
    max-width: 700px;
  }
}

#splide_scenes {
  min-height: 300px;
}

#splide_characters {
  min-height: 500px;
  height: auto;
}

/* This can use a fixed height */
#splide_characters img{
  min-height: 300px;
  max-height: 500px;
}

#splide_scenes img {
  min-height: 300px;
}

</style>
