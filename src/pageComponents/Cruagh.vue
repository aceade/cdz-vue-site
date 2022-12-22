<template>
  <Navbar />

  <main>
    <div class="wrapper">
      <div>
        <img src="https://aceade.files.wordpress.com/2022/02/cruaghislandaffaircover_v2.jpg" alt=""/>
        <div class="float-right">
          <p class="blurb">
            She couldn’t move.
          </p>
          <p class="blurb">
            Her heart pounded in time with the squeak of the trolley wheels as she struggled futilely against the straps that dug into her limbs and chest. The sharp smell of antiseptic assaulted her nostrils, growing ever stronger, and stronger, and-
          </p>
          <hr/>
          <p>My first self-published collection of stories, involving an unsanctioned dwarven laboratory off the coast of Co. Galway as it attempts to discover the origins of the Fomorians.</p>
          <p>If you like the following tasters, buy the full set of 8 stories and associated artwork from 
            <a href="https://www.buymeacoffee.com/aceade/e/58409">BuyMeACoffee</a>!
          </p>
        </div>
        <div class="clear"></div>
        <hr/>
        
      </div>

      <CruaghIsland/>
    </div>

    <Footer/>

  </main>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import CruaghIsland from '../components/stories/CruaghIsland.vue';
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    CruaghIsland,
    Footer
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
  .float-right {
    float: unset;
    width: 100%!important;
  }

}

.wrapper img {
  float: left;
  width: calc(45% - 5px);
}

p {
  padding-bottom: 5px;
  font-size: 16px;
}

hr {
  margin-bottom: 15px;
}

.blurb {
  font-style: italic;
  font-family: fantasy;
}

/*Extend the existing float-right class */
.float-right {
  width: calc(55% - 5px);
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
