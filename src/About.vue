<template>
  <Navbar />

  <main>
    <h2>About Me</h2>
    <div class="wrapper">
        <div id="authorImg">
          <img src="/images/author.jpg" alt="A black-and-white selfie of a man in a fleece and sun hat, framed against the shore"/>
        </div>
        <div id="blah" class="float-right">
          <p>I'm a software engineer in my day job. Writing scifi & fantasy is a long-standing hobby that never really went anywhere until I shifted to writing short stories. And then I got bored during the COVID lockdown of 2020.</p>
          <p>This series was originally inspired by a mix of several years of regular hikes in the backcountry of Connemara, the dwarven ruins of Morrowind/Skyrim, and the surreal, bleak S.T.A.L.K.E.R. games.</p>
        </div>
        <div class="clear"></div>  
    </div>
    <p>My original and main site for this series is <a href="https://aceade.wordpress.com/connacht-disaster-zone/">here</a>. If you want a look at the code for this site, that's up on <a href="https://github.com/aceade/cdz-vue-site">GitHub</a>. You can also find me on mastodon.social or Twitter (see the footer)</p>

    <hr/>
    <Footer/>
  </main>
  
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  },
}


</script>

<style>
@import './assets/base.css';
@import './assets/main.css';

:root {
  /* Defines a variable that is available to all other elements */
  --img-height: 150px;
}

#authorImg {
  float: left;
}

#authorImg img {
  height: var(--img-height);
}

#blah {
  margin-left: 115px;
  padding-left: 5px;
  top: calc(var(--img-height) * -1);
}



</style>