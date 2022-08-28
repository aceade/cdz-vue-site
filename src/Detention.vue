<template>
  <Navbar />

  <main>
    <div class="wrapper">
      <div>
        <img src="https://aceade.files.wordpress.com/2022/02/fomoriandetentioncentrecover.jpg" alt=""/>
        <!-- <div class="float-right"> -->
          <p class="blurb">
            Night shift. God, how I hate it. Eight hours fighting against my natural urge to fall asleep while checking the cells every thirty minutes in between another boring game of cards. I’d swear Eddie Jones is looking at my cards when I have to make my rounds, but fair is fair – I’ve done that to him as well. 
          </p>
          <p class="blurb">
            I glance at the clock on the wall. The corridor is quiet enough that I can hear it tick-tocking eight feet away – either that, or it’s a bloody noisy thing. Eleven-twenty-nine p.m….time to check on the prisoners – oh, I’m sorry, the patients. Prisoners, patients – they’re all orcs. Fomorians. The mutated. Whatever you want to call them.
          </p>
          <hr/>
          <p>A collection of short stories set in an detention centre for some orcs in Ireland.</p>
          <p>If you like the following tasters, get the full set of 8 stories and associated artwork from 
            <a href="https://www.buymeacoffee.com/aceade/e/68319">BuyMeACoffee</a>!
          </p>
        <!-- </div>
        
        <div class="clear"></div> -->
      </div>

      <DetentionCentreTales/>
    </div>

    <Footer/>

  </main>
</template>

<script>
import Navbar from './components/Navbar.vue';
import DetentionCentreTales from './components/stories/DetentionCentreTales.vue';
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    DetentionCentreTales,
    Footer
  }
}

</script>

<style>
@import './assets/base.css';
@import './assets/main.css';

.wrapper img {
  float: left;
  width: 100%;
  padding-bottom: 5px;
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
