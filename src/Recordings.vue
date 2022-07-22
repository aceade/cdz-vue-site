<template>
  <Navbar />

  <main>
    <div class="wrapper">
      <h2 id="scenery">Timelapses</h2>
      <PdfSlideshow id="videos" :options="options" :slides="video_slides" :object-type="objectType" ></PdfSlideshow>

    </div>

    

  </main>
</template>

<script>
import Navbar from './components/Navbar.vue';
import PdfSlideshow from './components/PdfSlideshow.vue';

export default {
  components: {
    Navbar,
    PdfSlideshow
  },
  data() {
    return {
      objectType: "video",
      options: {
        rewind  : true,     // go back to the start when done
        gap     : '1rem',   // gap between images
        autoplay: false,
        mediaQuery: 'min',
        autoWidth: false,
        autoHeight: true,
      },
      video_slides: [{
          src: "https://www.youtube.com/embed/gxwbNHDNhcs",
          title: "Art Process: Painting Orcish Children",
          width: 700,
          height: 400
        },
        {
          src: "https://www.youtube.com/embed/tPu8WRYbVmM",
          title: "Art Recording Timelapse: You Don't Need These",
          width: 700,
          height: 400
        },
        {
          src: "https://www.youtube.com/embed/LgFvwBMBJsg",
          title: "Art Recording Timelapse: Fomorian Character Portrait",
          width: 700,
          height: 400
        },
        {
          src: "https://www.youtube.com/embed/cD-lyzZ6Xw4",
          title: "Art Process: Albino Fomorian",
          width: 700,
          height: 400
        },
        {
          src: "https://www.youtube.com/embed/NEmQesdsVVw",
          title: "Artwork Recording: Serpentoid Site Scouts",
          width: 700,
          height: 400
        }
      ]
    }
  }
}

</script>

<style>
@import './assets/base.css';
@import './assets/main.css';
@import '@splidejs/splide/dist/css/themes/splide-default.min.css';

/* Applies when the screeen is at least 1024 pixels */
@media (min-width: 1024px) {
  .splide img {
    max-width: 900px;
  }

  #videos {
    max-width: 900px;
  }

}
@media (min-width: 800px) and (max-width: 900px) {
  .splide img {
    max-width: 750px;
  }

  #videos {
    max-width: 750px;
  }

}
@media (max-width: 800px) and (min-width: 700px) {
  .splide img {
    width: 500px
  }

  #videos {
    max-width: 700px;
  }

}

@media (max-width: 500px) {
  .splide img {
    max-width: 300px;
  }

  #videos {
    max-width: 700px;
  }

}

#videos {
  min-height: 700px;
}


</style>
