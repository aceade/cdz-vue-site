<template>
  <Navbar />

  <main>
    <h2>Smash The Evictor's Statue!</h2>
    <p class="welcome">In which a pair of serpentoid mercenaries are less than impressed with one of their siblings</p>

    <Slideshow id="splide_comic" :options="slide_options" :slides="slides" :has-track="false" :collapsible="collapsible"></Slideshow>
    <AuthorsNotes :notes="notes"/>
    <hr/>
    <Footer/>
  </main>
  
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Slideshow from '../components/Slideshow.vue';
import AuthorsNotes from '../components/AuthorsNotes.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Slideshow,
    AuthorsNotes,
    Footer,
},
  data() {
    return {
      collapsible: false,
      slide_options : {
        rewind  : true,     // go back to the start when done
        gap     : '1rem',   // gap between images
        autoplay: true,
        mediaQuery: 'min',
        autoWidth: false,
        autoHeight: true,
        perPage: 1
      },
      notes: [
        "I'm not entirely sure where I got the idea of a humanoid snake smashing a statue of St Patrick, but the idea amused me enough to do this.",
        "I think my favourite slide here is the fourth (Sectaa opening the door). Just something about the lighting really tickles my fancy."
      ],
      slides: [{
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
      }],
      hasTrack: false
    }
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

#splide_comic {
    max-width: 800px;
}
.splide img {
  max-height: 800px;
  margin: auto;
  display: flex;
}

</style>