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
            // each story has a PDF link, title and fallback text/intro
            stories: [
                {
                    src: "https://aceade.files.wordpress.com/2021/03/of-snakes-and-birds.pdf",
                    title: "Of Snakes and Birds",
                    intro: [
                        "Darragh Timoney would tell anyone who’d listen that the best way to find leads for his weekly column, Tales from the Western Front, was to sit in a pub of an evening. One could uncover all manner of interesting threads from the varied walks of life – fishermen, shopkeepers, off-duty soldiers – that one met in Galway’s pubs. The fact that he liked his stout was a mere bonus.",
                        "He was sitting down the far end of the King’s Head with a pint of the black stuff, notepad and pencil in the gap between the pillar and his right hand. He hadn’t heard anything particularly newsworthy yet, but that might just be his roots in Ballybrit talking; apparently, the rich folks up in Dublin and Belfast and over the sea loved hearing anything from the edge of the disaster zone. It didn’t matter what – just as long as they felt that the cost of the Wall was worth it."
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
                    src: "https://aceade.files.wordpress.com/2021/03/sneksshouldbesexy.pdf",
                    title: "Snakes Should Be Sexy (According to Drunken Orcs)",
                    intro: [
                        "Graa idly scratched the back of his neck as he lay atop the cart, not really listening to the head of the caravan talking with the guards outside Cleggan. Something about checking their import permits for three carts of lumber from Tooreen. It made little difference to him or the rest of the band; their role had been to guard it against theft, and they had done so. In the meantime, the lumber was getting invitingly warm-",
                        "The gates squeaked open, drawing him back to the immediate surroundings. As the carts slowly rumbled inside the settlement, his eyes and tongue began to rapidly dart over the scenery. It looked like any other village in the region: a mix of dwellings built from stones that had apparently been piled higgledy-piggledy on top of each other and topped with a roof apparently made of dried grass stems – how it kept the water out was something he had never figured out – with the local temple being the only one that looked like somebody had put some actual thought and care into building it. And of course, the obligatory drink-dwelling that had been strategically placed almost in the centre, right at the crossroads.",
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/07/serpentoid_site_recon.pdf",
                    title: "Serpentoid Site Scouts",
                    intro: [
                        "“Smell that?” Kerigoo hissed, his tongue flickering as he tried to identify the unusual scent on the wind. Debraa slowly lowered her spyglass and began to taste the air in turn, her eyes roving over the human fort that sat four hundred furlongs to their south. She nodded silently; it smelt quite different to wood or peat smoke, yet somehow similar enough that it had to be something burning.",
                        "The blockhouse they had been hired to examine sat inside a ring of barbed wire approximately twenty furlongs to the west of the old town of Oughterard, along what had once been the primary – read only – overland route towards the port of Galway. Of particular note were the pair of parallel metal tracks that ran adjacent to the old road, stopping in a faux-rock barrier. They looked similar to the mine cart tracks in the tunnels under the hills – or they would have, if they had been carved into the underlying rock and not lain on top of thick wooden boards."
                    ]
                }
            ],
            options: {
                autoPlay: false,
                autoWidth: false,
                autoHeight: false,
                perPage: 1,
                rewind: true
            },
            objectType: "pdf",
        }
    }
}
</script>