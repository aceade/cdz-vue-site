<template>
  <Navbar />

  <main>
    <div class="wrapper">
      <h2></h2>
      <div>
        <img src="https://aceade.files.wordpress.com/2022/08/spycrabsandwarbirdscover.jpg" alt=""/>
        <p class="blurb">
          The war effort in west Connacht is not one of epic battles. Long, dull periods of watching the coasts for Fomorian pirates and those who would aid them for their own ends, broken up by small, squalid skirmishes in the bogs and pine forests. Constantly watching for reality going out to lunch.
        </p>
        <p class="blurb">
          For the British military, west Connacht is just a tedious and unwelcome theatre. But for the dwarves of Ireland and the Fomorians who drove them out of their homeland, this war is a personal matter. 
        </p>
        <hr/>
        <p>Tales of the low-intensity conflict around western Connacht, and some of the attempts by other powers to interfere with the British and Dwarven containment efforts.</p>
        <p>If you like the following tasters, download it from <a href="https://www.buymeacoffee.com/aceade/e/88464">BuyMeACoffee</a></p>
        <div class="clear"/>
        <hr/>
        
      </div>

      <SpycrabsAndWarbirds/>
      <hr/>
    </div>

    <Footer/>

  </main>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import SpycrabsAndWarbirds from "../components/stories/SpycrabsAndWarbirds.vue"
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    SpycrabsAndWarbirds,
    Footer,
  }
}

</script>

<style>
@import '../assets/base.css';
@import '../assets/main.css';

/*
 *  Override these on small screens.
 */
@media (max-width: 512px) {
  .wrapper img {
    float: unset;
    width: 100%!important;
  }

}

.wrapper img {
  float: left;
  width: calc(45% - 5px);
  margin-right: 5px;
}

p {
  padding-bottom: 5px;
}

.blurb {
  font-style: italic;
  font-family: fantasy;
}


</style>
