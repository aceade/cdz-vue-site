<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'
// stories broken down into individual components
import Snakepeople from './components/stories/Snakepeople.vue';
import ORourke from './components/stories/ORourke.vue';

export default {
    components: {
    Navbar,
    Snakepeople,
    ORourke,
    Footer,
    },
    props: {
        showSnakes: {
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
                <h3 @click="showSnakes = !showSnakes">Snakepeople of Conneamara</h3>
                <Snakepeople class="storiesComponent" v-if="showSnakes"/>
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