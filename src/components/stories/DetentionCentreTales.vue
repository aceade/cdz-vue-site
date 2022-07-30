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
                    src: "https://aceade.files.wordpress.com/2021/03/night-shift.pdf",
                    title: "Night Shift",
                    intro: [
                        "Night shift. God, how I hate it. Eight hours fighting against my natural urge to fall asleep while checking the cells every thirty minutes in between another boring game of cards. I'd swear Eddie Jones is looking at my cards when I have to make my rounds, but fair is fair – I've done that to him as well.",
                        "I glance at the clock on the wall. The corridor is quiet enough that I can hear it tick-tocking eight feet away – either that, or it's a bloody noisy thing. Eleven-twenty-nine p.m....time to check on the prisoners – oh, I'm sorry, the patients. Prisoners, patients – they're all orcs. Fomorians. The mutated. Whatever you want to call them."
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/03/maladaptive_vigilance.pdf",
                    title: "Maladaptive Vigilance",
                    intro: [
                        "Maebh stared at the mirror, her eyes following her fingers up along the stripes on her new blouse’s v-shaped front collar. She smiled, revealing more teeth that had once been much more yellow. Finally, she had something to wear that wasn’t bleached or grey nettle-fibres issued from the laundry – something that was hers. Lowering her hands, she turned towards the younger girl in the room to ask what she thought.",
                        "“Why does the collar hang down your back like that?” Aoife asked, swinging her legs idly as she sat on the table next to the sink. Her left hand briefly lifted to point at Maebh’s left shoulder, before returning to rest on her lap. Maebh shrugged, not having cared enough to ask why a sailor’s outfit had such a striped square collar, and nobody had thought it necessary to explain it.",
                        "“I want one too,” the other girl admitted enviously. She glanced down at her own grey jumper and off-white dress. Both were clean and the original tears had been well repaired, but they were so...so plain and impersonal. At least they didn’t clash with her ginger hair."
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/03/samples.pdf",
                    title: "Samples",
                    intro: [
                        "The knot in Diarmuid’s stomach was growing tighter. He’d been lying or sitting on the infirmary bed for nearly two hours – if the clock on the wall was right – ever since cleaning his teeth after breakfast. He did not want to be there, and the tongue lashing he’d received when saying so did not help.",
                        "He glanced around the room again. Bare white walls, alternating grey and white tiles on the floor, and seven more beds. Locked medicine cabinets and a couple of workbenches lined the far wall, with a sink halfway down the room. The unwanted smell of antiseptic came from a door at the far end of the room – and he jerked his head away, trying to avoid the word printed on the door. Belatedly, he noticed that there was a compact gramophone on a table down the other end."
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/09/rageagainstthemirror.pdf",
                    title: "Rage Against The Mirror Self",
                    intro: [
                        "Siobhán lowered her hands into the stream of the tap, savouring the flash of warmth as the lukewarm water hit her soil-covered skin. After five hours of gardening in a draughty, half-leaking greenhouse, it was good to just be alone for five minutes. Unfortunately, it couldn’t last, as one of Maebh’s teasing comments about herself and Diarmuid came unbidden to the fore.",
                        "“Come on, Shiva. The doctors aren’t going to care if you hug him once.”",
                        "Shiva. Diarmuid’s nickname for her. A name he genuinely hadn’t known was that of the Hindu god of destruction. In fact, he hadn’t even known of them – he’d just “heard the name somewhere”. It was still a pagan god of destruction..."
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2022/07/dwarventeamachine.pdf",
                    title: "The Dwarven Tea Machine",
                    intro: [
                        "The machine that stood on the counter gleamed. Its shiny metallic body rose from a rounded, well-polished wooden base, curving up towards a boxy tower on one end and an alcove at the other. An array of brass plates adorned the front of the machine, marking the buttons, rounded glass light housings and an embossed slot in a font that appeared to have been delicately carved from the metal itself. In one corner, a thick black cable snaked around behind towards the wall.",
                        "“Is that made of silver?” Aoife asked, pointing at the machine, eliciting a few smiles from the other children in the room as they gathered around it. Her twin brother Ciaran gingerly reached forward to tap at the corner near him, where somebody had intricately carved some larger words and the number 418 in what looked like English. His face and body immediately slumped as he found out that it felt too hard to be silver.",
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2022/04/washingupwrangling.pdf",
                    title: "Washing Up Wrangling",
                    intro: [
                        "“Hey, Red!”",
                        "Diarmuid morosely looked up from the lukewarm sink that held two stained metal plates, and narrowed his eyes as he beheld the stocky younger boy with the fangs and green patches of skin next to the draining board. “What is it, Grady?”",
                        "“Me name’s Tomás. Nurse said you could use a hand.”"
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