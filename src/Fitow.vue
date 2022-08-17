<template>
  <Navbar />

  <main>
    <div class="wrapper">
      <h2>Fomorians In Their Own Words</h2>      
      <FitowSlides/>
      <hr/>
      <AuthorsNotes :notes="authorsNotes"/>
      <hr/>
    </div>

    <Footer/>

  </main>
</template>

<script>
import Navbar from './components/Navbar.vue';
import FitowSlides from "./components/stories/FitowSlides.vue"
import AuthorsNotes from './components/AuthorsNotes.vue';
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    FitowSlides,
    AuthorsNotes,
    Footer
  },
  data() {
    return {
      authorsNotes: [
        "Unlike most of the stories, these were originally written as blog posts on my main site."
      ]
    }
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
