<template>
  <Navbar />

  <main>
    <div class="wrapper">
      <h2>Fomorians In Their Own Words</h2>
      <p class="blurb">As anyone with even the most cursory knowledge of current affairs should know, the ongoing quarantine of the Dwarven Homeland Region in Ireland is in part motivated by the presence of the Fomorians. Fomorians, or “orcs”, are popularly known to be lumbering, mentally stunted minions of the bean sidhe with brainpower inversely proportionate to their muscle power, fit only for extermination or menial labour under heavy guard. The Firtollán Church of the Tunnels has been quite strident in simultaneously advocating their extermination and rehabilitation, and one need only peruse the popular press for exchanges where one individual has accused another of being a covert sympathiser.</p>
      <p class="blurb">In the course of my duties as an alienist attached to the War Office, I have made the acquaintance of numerous Fomorians that have been detained by the British Army and Royal Navy. Some are guardsmen, forcibly exposed to Fomoritis in the line of duty. Some are children raised beyond the Corrib. This personal experience has lead me to conclude that affairs are far more nuanced, as is the case with most things in life.</p>
      <p class="blurb">Connacht Trading’s recent public admission and denunciation of a rogue (albeit successful) experiment to determine the actual mechanism behind Fomoritis has sparked a high level of public interest in the Fomorians. To that end, I have attached several letters from some individuals with which I am acquainted. Among these are the two confirmatory subjects, Mstr D and Miss S. I trust that these may shed some light on the situation.</p>
      <p class="blurb">Dr Nicholas Magnusson, Department 11, War Office</p>
      
      <FitowSlides/>
      <hr/>
    </div>

    <Footer/>

  </main>
</template>

<script>
import Navbar from './components/Navbar.vue';
import FitowSlides from "./components/stories/FitowSlides.vue"
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    FitowSlides,
    Footer
  }
}

</script>

<style>
@import './assets/base.css';
@import './assets/main.css';

/*
 *  Override these on small screens.
 */
@media (max-width: 512px) {
  .wrapper img {
    float: unset;
    width: 100%!important;
  }
  .float-right {
    float: unset;
    width: 100%!important;
  }

}

.wrapper img {
  float: left;
  width: calc(60% - 5px);
}

p {
  padding-bottom: 5px;
}

.blurb {
  font-style: italic;
  font-family: fantasy;
}

/*Extend the existing float-right class */
.float-right {
  width: calc(40% - 5px);
  margin-left: 5px;
  margin-top: 10px;
}
.float-right p{
  padding-top: 5px;
}

.clear {
  margin-bottom: 10px;
}

</style>
