<template>
  <Navbar />

  <main>
    <h2>{{ $t("about.title")}}</h2>
    <div class="wrapper">
        <img id="authorImg" src="/images/author.jpg" alt="A black-and-white selfie of a man in a fleece and sun hat, framed against the shore"/>
        <p>{{$t("about.p1")}}</p>
        <p>{{$t("about.p2")}}</p>
        <p>{{$t("about.p3")}} <a href="https://aceade.wordpress.com/connacht-disaster-zone/">{{$t("about.link")}}</a>. {{$t("about.p3Finish")}}</p>

        <h3>{{$t("about.why")}}</h3>
        <p>{{$t("about.answer")}}</p>
        <p>{{$t("about.code")}} <a href="https://github.com/aceade/cdz-vue-site">GitHub</a>.</p>
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