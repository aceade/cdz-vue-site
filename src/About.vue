<template>
  <Navbar />

  <main>
    <h2>About Me</h2>
    <div class="wrapper">
        <img id="authorImg" src="/images/author.jpg" alt="A black-and-white selfie of a man in a fleece and sun hat, framed against the shore"/>
        <p>I'm a software engineer in my day job. Writing scifi & fantasy is a long-standing hobby that never really went anywhere until I shifted to writing short stories. And then I got bored during the COVID lockdown of 2020.</p>
        <p>This series was originally inspired by a mix of several years of regular hikes in the backcountry of Connemara, the dwarven ruins of Morrowind/Skyrim, and the surreal, bleak S.T.A.L.K.E.R. games. My original goal was to create a mod for one of those games, but since being a software engineer requires me to spend my days getting trolled by computers...</p>
        <p>My original site and blog for this series is <a href="https://aceade.wordpress.com/connacht-disaster-zone/">here</a>. Most of the artwork listed here is embedded from that.</p>

        <h3>Why a second site?</h3>
        <p>I got into a rut at work and decided I needed to try doing something different. I figured that since it's damn near impossible to do any kind of web development without <em>some</em> frontend work, I might as well learn Vue.</p>
        <p>If you want a look at the code for this site, that's up on <a href="https://github.com/aceade/cdz-vue-site">GitHub</a>.</p>
    </div>
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
  height: var(--img-height);
  float: left;
  margin-right: 10px;
}

p {
  padding-bottom: 0.5rem;
}

h3 {
  text-align: center;
}

#blah {
  margin-left: 115px;
  padding-left: 5px;
}

</style>