<template>
    <PdfSlideshow :options="options" :slides="stories" :object-type="objectType"></PdfSlideshow>
</template>
<script>
import PdfSlideshow from '../PdfSlideshow.vue';

export default {
    components: {
        PdfSlideshow,
    },
    data() {
        return {
            stories: [
                {
                    src: "https://aceade.net/2021/06/26/fomorians-in-their-own-words-mstr-d/",
                    title: "Mstr D",
                    intro: [
                        "I  wasn’t born an orc, not that it’d make much difference. I didn’t become one until after some ne’er-do-well sold me to an utter scut from Connacht Trading named “Dr Burke”. I don’t know exactly how, but I ended up on an island I can’t name."
                    ],
                    width: '100%'
                },
                {
                    src: "https://aceade.net/2022/08/15/fomorians-in-their-own-words-sob/",
                    title: "S.O.B.",
                    intro: [
                        "I am of the Brotherhood, and I don’t care who hears it. I’m told you think we’re bandits. That we live just to steal babies and…turn them into us. Make them stronger."
                    ],
                    width: '100%'
                },
                
            ],
            options: {
                autoPlay: false,
                autoWidth: false,
                autoHeight: false,
                perPage: 1,
                rewind: true,
            },
            objectType: "page",
        }
    }
}

</script>
<style>
iframe {
    object-position: top 10rem;
}
</style>