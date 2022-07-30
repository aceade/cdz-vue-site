<template>
    <a href="https://www.buymeacoffee.com/aceade/e/58409">Collection available on BuyMeACoffee</a>
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
                    src: "https://aceade.files.wordpress.com/2021/03/nightmare.pdf",
                    title: "A Nightmare",
                    intro: [
                        "She couldn’t move.",
                        "Her heart pounded in time with the squeak of the trolley wheels as she struggled futilely against the straps that dug into her limbs and chest. The sharp smell of antiseptic assaulted her nostrils, growing ever stronger, and stronger, and-",
                        "“Feisty bitch, ain’t she?” somebody remarked. Her head twisted upwards and to the right, eyes locking onto the dwarf who leered at her, exposing teeth that were stained from smoking tea. Emblazoned on his right chest was that logo – that rounded vertical rectangle around those three letters."
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/03/interception.pdf",
                    title: "Interception of an enciphered message from orc-held territory",
                    intro: [
                        "The crackle of static in his ears and the flashing blue light to his left caused Able Seaman Davis to shoot upright from where he had slouched in the wooden chair, his right hand resting idly on the notepad on his workstation. Pressing his left hand to his earphones, he leaned forwards and hurriedly transcribed the short, staccato bleeps and longer creeps in the approved shorthand terminology.",
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/05/bigheadmode.pdf",
                    title: "Big Head Mode Is Not Conducive To Effective Scouting",
                    intro: [
                        "It was just another day west of the settlement known as Claddaghduff. The daystar remained hidden behind overlapping streaks of clouds, the wind that blew off the sea was biting cold, and the waves that lapped at the shore kicked up an awful spray that made the skin raw. The natives were at best indifferent, if not outright hostile. And there was always the chance that reality would randomly decide to invert itself.",
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/03/infiltration.pdf",
                    title: "Infiltration",
                    intro: [
                        "Huddled inside the guard tower, the sentry reached for a pack of cigarettes. Another night in this draughty, open-air shithole, not two miles off the coast from the Fomorians. He wasn't paid enough to watch northeast for boats approaching, listening to the wind playing tricks with his ears. He'd already ‘heard’ footsteps twice in the last hour",
                        "The cigarette lit up the interior of the watchtower. Out of the corner of his eye, he could see the construction site for that new tower fifty yards away. Bloody expensive pieces of shite...rather than hiring more people (or, heaven forbid, even just paying him enough to actually care), management had decreed that these lightning throwing machines would protect Cruagh Island. This vital island. It was of the highest importance that the Fomorians and the government be kept-"
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/03/board_report.pdf",
                    title: "Board Report",
                    intro: [
                        "The room was unusually spacious, with a high vaulted ceiling that served to emphasise how conspicuously empty it was. A hemispherical quarztite table that followed the curves of the walls dominated the centre of the room, surrounded by austere matching thrones. The walls themselves had been lavishly decorated with murals of ships on the rolling waves, wagons in convoy or similar scenes of commerce, interspersed with stark white panels into which the large, bold letters “C T C” had been carved. Pale, pulsing blue light spilled from behind the letters."
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
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/10/theinquisitionareexpected.pdf",
                    title: "The Dwarven Inquisition Are Expected",
                    intro: [
                        "“Smell that?” Kerigoo hissed, his tongue flickering as he tried to identify the unusual scent on the wind. Debraa slowly lowered her spyglass and began to taste the air in turn, her eyes roving over the human fort that sat four hundred furlongs to their south. She nodded silently; it smelt quite different to wood or peat smoke, yet somehow similar enough that it had to be something burning.",
                    ]
                }
            ],
            options: {
                autoPlay: false,
                autoWidth: false,
                autoHeight: true,
                perPage: 1,
                rewind: true
            },
            objectType: "pdf",
        }
    }
}
</script>