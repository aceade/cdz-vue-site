<template>
    
    <h2>A History Lesson</h2>

    <p>The dwarves of Ireland, or the Fir Tollán to use their own tongue, have always been centred in the rugged, windswept hills of western Connacht.
        For centuries, their cities flourished underneath the quarzite and granite peaks of the Twelve Bens, the Maumturks, the Sheefries and Mweelrea.</p>
    <p>For centuries, the mountain homes of the Fir Tollán remained independent of British rule, as solid as the hills they had carved out.
        Dwarven stonemasons and engineers who cut their teeth on the rocks were widely sought out for building fortifications and monuments. Their homelands seemed unassailable.</p>
    <p>Until the 1850s.</p>

    <h2>The Disaster</h2>
    <p>Some say that it was caused by an attempt to generate electricity by splitting particles of air. Others that it was divine retribution for unspeakable acts.</p>
    <p>Nobody knows for certain what really happened, but what everyone knows is that the very fabric of reality was torn asunder. 
        What was once a series of impregnable cities became a nightmare where gravity could suddenly reverse, where the unfortunate could take another step and burst into flame, where one could turn a corner and vanish into thin air, only to reappear months later with no warning.
        To say nothing of the monsters that appeared.
    </p>
        <Slideshow :options="options" :slides="slides" :collapsible="collapsible"/>

    <p class="welcome">Welcome to the West Connacht Disaster Zone.</p>
</template>

<script>
import Slideshow from './Slideshow.vue';

export default {
  components: {
    Slideshow,
  },
  data() {
    return {
        collapsible: false,
        slides: [{
            src: "/images/Monsters_Banshee.png",
            alt: "A thin humanoid dressed in a cloak and tunic, clutching a sword",
            caption: "The banshees - tall, thin humanoids with screeching voices and whose dress and behaviour resembled nothing short of the Vikings."
        },
        {
            src: "/images/Monsters_Snake.png",
            alt: "A humanoid snake exposing their fangs",
            caption: "The serpentoids - humanoid snakes seeking their revenge on Saint Patrick."
        },
        {
            src: "/images/Monsters_Puca.png",
            alt: "A red-eyed horse staring at the camera with a distended smirk on it's face",
            caption: "The púca. Mutated horses with the ability to mimic human speech and an unlimited capacity for mischief."
        },
        {
            src: "/images/Monsters_orc.png",
            alt: "A tusked human with red hair and green eyes",
            caption: "And the Fomorians. The 'orcs'. The mutated remains of the humans and dwarves who had called the region home and were left behind."
        }],
        options: {
            rewind  : true,
            gap     : '5rem',
            autoplay: true,
            autoWidth: false,
            autoHeight: false,
            mediaQuery: 'min',
        }
    }

  }
}

</script>

<style scoped>

h2 {
    margin-top: 20px;
    font-family: "Gaelic", serif;
}

p {
    line-height: 1.5;
    margin-bottom: 10px;
}

li {
    list-style: "\261E";
    padding-left: 5px;
}

</style>