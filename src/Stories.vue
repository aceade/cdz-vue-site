<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'
// stories broken down into individual components
import CruaghIsland from './components/stories/CruaghIsland.vue';
import DetentionCenterTales from './components/stories/DetentionCentreTales.vue';
import Snakepeople from './components/stories/Snakepeople.vue';
import SpycrabsAndWarbirds from './components/stories/SpycrabsAndWarbirds.vue';
import ORourke from './components/stories/ORourke.vue';

export default {
    components: {
    Navbar,
    CruaghIsland,
    DetentionCenterTales,
    Snakepeople,
    SpycrabsAndWarbirds,
    ORourke,
    Footer,
    },
    props: {
        showCruagh: {
            type: Boolean,
            default: true
        },
        showDetention: {
            type: Boolean,
            default: true
        },
        showSnakes: {
            type: Boolean,
            default: true
        },
        showSpycrabs: {
            type: Boolean,
            default: true
        },
        showClan: {
            type: Boolean,
            default: true
        },
    }
}


</script>

<template>
    <Navbar/>

    <main>
        <h1>Stories</h1>
        <div class="wrapper">
            <div>
                <h3 @click="showCruagh = !showCruagh">The Cruagh Island Affair</h3>
                <CruaghIsland class="storiesComponent" v-if="showCruagh"/>
                <hr/>
            </div>
            <div>
                <h3 @click="showDetention = !showDetention">Tales From A Fomorian Detention Centre</h3>
                <DetentionCenterTales class="storiesComponent" v-if="showDetention"/>
                <hr/>
            </div>
            <div>
                <h3 @click="showSnakes = !showSnakes">Snakepeople of Conneamara</h3>
                <Snakepeople class="storiesComponent" v-if="showSnakes"/>
                <hr/>
            </div>
            <div>
                <h3 @click="showSpycrabs = !showSpycrabs">Warfare and Espionage</h3>
                <SpycrabsAndWarbirds class="storiesComponent" v-if="showSpycrabs"/>
                <hr/>
            </div>
            <div>
                <h3 @click="showClan = !showClan">The O'Rourkes</h3>
                <ORourke class="storiesComponent" v-if="showClan"/>
                <hr/>
            </div>
            
        </div>
        <hr/>
        <Footer/>
    </main>
</template>

<style>
@import './assets/base.css';
@import './assets/main.css';

h3 {
    text-align: center;
    font-family: "Gaelic", serif;
    margin-top: 10px;
    cursor: url(hand.cur), pointer;
}

.storiesComponent {
    transition: max-height 1s ease-out;
}

a {
    text-align: center;
}
</style>