<template>
    <a href="https://www.buymeacoffee.com/aceade/e/58409">Collection available on BuyMeACoffee</a>
    <PdfSlideshow :options="options" :slides="stories" :object-type="objectType"></PdfSlideshow>
    <hr/>
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
                        "Her heart pounded in time with the squeak of the trolley wheels as she struggled futilely against the straps that dug into her limbs and chest. The sharp smell of antiseptic assaulted her nostrils, growing ever stronger, and stronger, and-"
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/03/interception.pdf",
                    title: "Interception of an enciphered message from orc-held territory",
                    intro: [
                        "The crackle of static in his ears and the flashing blue light to his left caused Able Seaman Davis to shoot upright from where he had slouched in the wooden chair, his right hand resting idly on the notepad on his workstation. Pressing his left hand to his earphones, he leaned forwards and hurriedly transcribed the short, staccato bleeps and longer creeps in the approved shorthand terminology.",
                        "“Found something, Davis?” the Lieutenant asked. He automatically nodded, focussing on converting the shorthand transcription into something more legible. Even as he finished and moved onto translating the dots and dashes into possible letters, something about it started to niggle at the back of his mind. It almost looked as though...",
                        "“Sir, I don’t think this is English.” He handed the piece of flash paper over to the Lieutenant, who accepted it with a raised eyebrow that turned into a quizzical frown as he perused the message. Davis glanced over at the door into the main passageway, satisfying himself that it was closed. On the wall next to the door was a poster of a shark looming up from the deep, aiming straight for a stream of letters on the surface. He turned back to his wireless set, listening for any other messages."
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/05/bigheadmode.pdf",
                    title: "Big Head Mode Is Not Conducive To Effective Scouting",
                    intro: [
                        "It was just another day west of the settlement known as Claddaghduff. The daystar remained hidden behind overlapping streaks of clouds, the wind that blew off the sea was biting cold, and the waves that lapped at the shore kicked up an awful spray that made the skin raw. The natives were at best indifferent, if not outright hostile. And there was always the chance that reality would randomly decide to invert itself.",
                        "Efioa had long since turned his ears down against the older generation’s complaints about the sea in this new world. New to them, not to him. He had been born here, not that the Fomorians seemed to make any distinction, and had learned to pay attention to the sea. Among the things he had paid close attention to over the last week was the “cursed island” of Cruagh, situated about two dwarven miles out to sea. He could have sworn that he had seen a giant metal shape disappearing behind it to the west.",
                        "Lacking anything better to do, he and his bond-sisters had elected to leave Omey Island and get a better look from the west of the Aughrusbeg peninsula. And so, with the spray kicked up in his face and the wind piercing his bones, he faced out towards the spiny northern flank of the island. It might have been his imagination, but it looked as though there was a large net hanging over something. He stepped forward-"
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