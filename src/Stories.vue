<script setup>
import Navbar from './components/Navbar.vue';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide';

const stories = [
    {
        src: "https://aceade.files.wordpress.com/2021/03/arrival.pdf",
        title: "Arrival",
        intro: [
            "The rain had stopped, leaving puddles in the far-left corner of the courtyard, where the concrete ground dipped slightly. Inside the guardhouse, Warrant Officer Bartelli leaned back in the hard metal chair, drawing on his cigarette one last time. He glanced at the clock on the wall, exhaled and leaned forwards again, stubbing the cigarette out. Three forty-three PM on a Thursday.",
            "The telephone from the outer cordon rang. He sighed, and lifted the earpiece. “Yes?” He listened, instantly straightening. “Yes, sir.” He covered the mouthpiece, glancing to his right at the sergeant standing next to the door out to the walkway above the courtyard. “Open the outer gate, Pete.”"
        ]
    },
    {
        src: "https://aceade.files.wordpress.com/2021/03/whydohumansconstrict.pdf",
        title: "Why Do Humans Constrict?",
        intro: [
            "The terrace on the southern side of the Sheefries had once been used for farming. Channels cut into the rock had diverted the frequent rain of Connemara into running past precisely-planted rows of oats or potato plants on its journey down to Lough Tawnyard. Small tunnels dug into the side led into storage caves, carefully sealed off from the main tunnels by a network of stout hatches and firing ports or simply not being connected in the first place.",
            "The new owners of the terrace had little use for plants of any kind, and had decided to simply let them grow wild. It felt vaguely similar to the home they had left four generations ago and couldn’t reach from this new world. Some of the older ones still held fond memories of the reeds around the spinetrees in which they had taken shelter and from which they had hired themselves out to the long-ears on a contract basis.",
            "But for now, such concerns were laid aside as they stretched out or curled up in the sun. Even the sentries had stretched out, eyes and tongues flickering from left to right for signs of a long-ear or the greenskins. Or, even worse, one of those aerial machines that the other two-legs from across the lakes used"
        ]
    },
    {
        src: "https://aceade.files.wordpress.com/2021/03/fomoritis_confirmed.pdf",
        title: "Fomoritis Confirmed",
        intro: [
            "Dr Nicholas Magnusson looked up as the door slid open, smiling with solemn reassurance at the children hesitating in the doorway. One was a thin, black-haired boy with yellow sunglasses in front of apparently-orange eyes; to the boy’s right was a girl whose defiant green stare was tinged with apprehension. The hair on her left-hand-side was much shorter.",
            "“Ah, Miss MacCarthy. Master O’Flaherty. Come in.”",
            "They obeyed reluctantly, shuffling over to the chairs in front of him. O’Flaherty slumped in his chair, adopting a resigned expression and folding his arms defensively across his chest. MacCarthy sat perfectly upright, hands clasped tightly in her lap. Tightly enough that her knuckles had lost whatever colour they originally had."
        ]
    }
]

const options = {
    autoPlay:false,
    autoWidth: false,
    autoHeight: true,
    perPage: 1,
    rewind: true
}
</script>

<template>
    <Navbar/>

    <main>
        <div class="wrapper">
            <splide id="splide_stories" :options="options" :has-track="false">
                <div class="splide__progress">
                    <div class="splide__progress__bar">
                    </div>
                </div>

                <div style="position: relative">
                    <splide-track>
                    <SplideSlide v-for="slide in stories" :key="slide.title">
                        <object aria-labelledby="storyTitle" class="story_embed" type="application/pdf" width="100%" :data="slide.src">
                            <label id="storyTitle" :data="slide.title"> {{slide.title}}</label>
                            <p v-for="entry in slide.intro">
                                {{entry}}
                            </p>
                            <hr/>
                            <a :href="slide.src">Download full version</a>
                        </object>
                    </SplideSlide>
                    </splide-track>
                </div>
            </splide>
        </div>
    </main>
</template>

<style>
@import './assets/base.css';
@import './assets/main.css';
@import '@splidejs/splide/dist/css/themes/splide-default.min.css';


#splide_stories {
  min-height: 500px;
  width: 100%;

}
#splide_stories object{
  min-height: 500px;
  width: 100%;
  overflow: hidden;
}

.splide__slide label {
    margin-top: 20px!important;
    margin-left: 50px;
    font-size: 18px;
    font-weight: bold;
}

.splide__slide {
    text-indent: 3ch;
}

.splide__slide a {
    font-size: 18px;
    margin-top: 20px!important;
}

</style>