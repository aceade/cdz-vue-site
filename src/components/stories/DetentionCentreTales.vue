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
                    src: "",
                    title: "Maladaptive Vigilance",
                    intro: [
                        "Maebh stared at the mirror, her eyes following her fingers up along the stripes on her new blouse’s v-shaped front collar. She smiled, revealing more teeth that had once been much more yellow. Finally, she had something to wear that wasn’t bleached or grey nettle-fibres issued from the laundry – something that was hers. Lowering her hands, she turned towards the younger girl in the room to ask what she thought.",
                        "“Why does the collar hang down your back like that?” Aoife asked, swinging her legs idly as she sat on the table next to the sink. Her left hand briefly lifted to point at Maebh’s left shoulder, before returning to rest on her lap. Maebh shrugged, not having cared enough to ask why a sailor’s outfit had such a striped square collar, and nobody had thought it necessary to explain it.",
                        "“I want one too,” the other girl admitted enviously. She glanced down at her own grey jumper and off-white dress. Both were clean and the original tears had been well repaired, but they were so...so plain and impersonal. At least they didn’t clash with her ginger hair.",
                        "“Maybe you could sew one on yourself?” Maebh lowered her hands to her side. For the second time in nearly seven months, the other girl’s face lit up with something other than apathy for more than a minute as she tilted her head to one side to consider this. "
                    ]
                },
                {
                    src: "",
                    title: "Samples",
                    intro: [
                        "The knot in Diarmuid’s stomach was growing tighter. He’d been lying or sitting on the infirmary bed for nearly two hours – if the clock on the wall was right – ever since cleaning his teeth after breakfast. He did not want to be there, and the tongue lashing he’d received when saying so did not help.",
                        "He glanced around the room again. Bare white walls, alternating grey and white tiles on the floor, and seven more beds. Locked medicine cabinets and a couple of workbenches lined the far wall, with a sink halfway down the room. The unwanted smell of antiseptic came from a door at the far end of the room – and he jerked his head away, trying to avoid the word printed on the door. Belatedly, he noticed that there was a compact gramophone on a table down the other end.",
                        "“A-are you nervous t-too?”",
                        "He turned his head to look at the girl sitting cross-legged on the next bed, her green eyes meeting the yellowed sunglasses he wore in a doomed attempt to avoid being accused of being a demon. Her brown hair had been completely shaved on her left side, with uneven stubble growing back. "
                    ]
                },
                {
                    src: "",
                    title: "Rage Against The Mirror Self",
                    intro: [
                        "Siobhán lowered her hands into the stream of the tap, savouring the flash of warmth as the lukewarm water hit her soil-covered skin. After five hours of gardening in a draughty, half-leaking greenhouse, it was good to just be alone for five minutes. Unfortunately, it couldn’t last, as one of Maebh’s teasing comments about herself and Diarmuid came unbidden to the fore.",
                        "“Come on, Shiva. The doctors aren’t going to care if you hug him once.”",
                        "Shiva. Diarmuid’s nickname for her. A name he genuinely hadn’t known was that of the Hindu god of destruction. In fact, he hadn’t even known of them – he’d just “heard the name somewhere”. It was still a pagan god of destruction...",
                        "Destruction...",
                        "Destruction.",
                        "She tried not to look at the mirror as she raised her head, but found herself unable to look away from it. Facing her was herself, just as expected. The same brown hair, green eyes and rounded jaw. She close her eyes for a brief moment, and opened them again to see-"
                    ]
                },
                {
                    src: "",
                    title: "The Dwarven Tea Machine",
                    intro: [
                        "The machine that stood on the counter gleamed. Its shiny metallic body rose from a rounded, well-polished wooden base, curving up towards a boxy tower on one end and an alcove at the other. An array of brass plates adorned the front of the machine, marking the buttons, rounded glass light housings and an embossed slot in a font that appeared to have been delicately carved from the metal itself. In one corner, a thick black cable snaked around behind towards the wall.",
                        "“Is that made of silver?” Aoife asked, pointing at the machine, eliciting a few smiles from the other children in the room as they gathered around it. Her twin brother Ciaran gingerly reached forward to tap at the corner near him, where somebody had intricately carved some larger words and the number 418 in what looked like English. His face and body immediately slumped as he found out that it felt too hard to be silver.",
                        "“What is it, anyway?”",
                        "“It’s the t-tae machine that C-c-connacht Trading gifted us. I th-think th-th-that’s the name?” Siobhán pointed at the larger font where Ciaran had tapped it. Her lips briefly moved soundlessly before she decided that pronouncing the name wasn’t worth the effort. “Diarmuid?”"
                    ]
                },
                {
                    src: "",
                    title: "Washing Up Wrangling",
                    intro: [
                        "“Hey, Red!”",
                        "Diarmuid morosely looked up from the lukewarm sink that held two stained metal plates, and narrowed his eyes as he beheld the stocky younger boy with the fangs and green patches of skin next to the draining board. “What is it, Grady?”",
                        "“Me name’s Tomás. Nurse said you could use a hand.”",
                        "“I could. And mine’s Diarmuid. Not Red, or Red-Eyes, or freak...” he trailed off with an irritable sigh. Grady briefly exposed more of his fangs as his mouth silently worked, before he picked up a tea-towel and began to wipe the plate that lay on the draining board. For a few minutes, neither spoke as Diarmuid focussed on scrubbing the plates and tried to ignore the sidelong glances the other boy gave him. Eventually, he couldn’t take it any more.",
                        "“Go on...you want to say something, just get it out.”",
                        "“I been meaning to ask you. You’re from Galway, are you not?” Grady turned to face him properly, his hands still absently wiping the blunt Bakelite-handled knife that Diarmuid had handed him."
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