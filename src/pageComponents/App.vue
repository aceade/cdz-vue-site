<script setup>
import Navbar from '../components/Navbar.vue';
import Home from '../components/Home.vue'
import Footer from '../components/Footer.vue';
</script>

<template>
  <Navbar/>

  <main>
    <Home/>
    <hr/>
    <Footer/>
  </main>

</template>

<style>
@import '../assets/base.css';
@import '../assets/main.css';

</style>
