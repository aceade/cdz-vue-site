<template>
  <Navbar />

  <main>
    <div class="wrapper">
      
    </div>

    <Footer/>

  </main>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      
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


}
@media (min-width: 800px) and (max-width: 900px) {

}
@media (max-width: 800px) and (min-width: 700px) {

}

@media (max-width: 500px) {

}


</style>
