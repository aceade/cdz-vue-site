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
                    title: "Interception of an enciphered message from orc-held territory",
                    intro: [
                        "The crackle of static in his ears and the flashing blue light to his left caused Able Seaman Davis to shoot upright from where he had slouched in the wooden chair, his right hand resting idly on the notepad on his workstation. Pressing his left hand to his earphones, he leaned forwards and hurriedly transcribed the short, staccato bleeps and longer creeps in the approved shorthand terminology.",
                        "“Found something, Davis?” the Lieutenant asked. He automatically nodded, focussing on converting the shorthand transcription into something more legible. Even as he finished and moved onto translating the dots and dashes into possible letters, something about it started to niggle at the back of his mind. It almost looked as though...",
                        "“Sir, I don’t think this is English.” He handed the piece of flash paper over to the Lieutenant, who accepted it with a raised eyebrow that turned into a quizzical frown as he perused the message. Davis glanced over at the door into the main passageway, satisfying himself that it was closed. On the wall next to the door was a poster of a shark looming up from the deep, aiming straight for a stream of letters on the surface. He turned back to his wireless set, listening for any other messages."
                    ]
                },
                {
                    src: "",
                    title: "Big Head Mode Is Not Conducive To Effective Scouting",
                    intro: [
                        "It was just another day west of the settlement known as Claddaghduff. The daystar remained hidden behind overlapping streaks of clouds, the wind that blew off the sea was biting cold, and the waves that lapped at the shore kicked up an awful spray that made the skin raw. The natives were at best indifferent, if not outright hostile. And there was always the chance that reality would randomly decide to invert itself.",
                        "Efioa had long since turned his ears down against the older generation’s complaints about the sea in this new world. New to them, not to him. He had been born here, not that the Fomorians seemed to make any distinction, and had learned to pay attention to the sea. Among the things he had paid close attention to over the last week was the “cursed island” of Cruagh, situated about two dwarven miles out to sea. He could have sworn that he had seen a giant metal shape disappearing behind it to the west."
                    ]
                },
                {
                    src: "",
                    title: "Infiltration",
                    intro: [
                        "Huddled inside the guard tower, the sentry reached for a pack of cigarettes. Another night in this draughty, open-air shithole, not two miles off the coast from the Fomorians. He wasn't paid enough to watch northeast for boats approaching, listening to the wind playing tricks with his ears. He'd already ‘heard’ footsteps twice in the last hour",
                        "The cigarette lit up the interior of the watchtower. Out of the corner of his eye, he could see the construction site for that new tower fifty yards away. Bloody expensive pieces of shite...rather than hiring more people (or, heaven forbid, even just paying him enough to actually care), management had decreed that these lightning throwing machines would protect Cruagh Island. This vital island. It was of the highest importance that the Fomorians and the government be kept-",
                        "A sound! He whipped his head round, one hand clutching his IKEA repeater carbine, and peered through the gun slit. Nothing showed itself. He sighed, and leaned back in the hard metal chair. Two months of this crap, and he'd be able to afford a wooden one, maybe even from Bofors in Scand-"
                    ]
                },
                {
                    src: "",
                    title: "Board Report",
                    intro: [
                        "The room was unusually spacious, with a high vaulted ceiling that served to emphasise how conspicuously empty it was. A hemispherical quarztite table that followed the curves of the walls dominated the centre of the room, surrounded by austere matching thrones. The walls themselves had been lavishly decorated with murals of ships on the rolling waves, wagons in convoy or similar scenes of commerce, interspersed with stark white panels into which the large, bold letters “C T C” had been carved. Pale, pulsing blue light spilled from behind the letters.",
                        "Five of the fourteen thrones had been filled, two on either side of the central one. The occupant of the central throne glanced unhurriedly around over steepled fingers, his indexes pressed against the waxed black moustache. His eyes focussed on the goateed dwarf to his left, tea-leaf cigarette already in hand.",
                        "“Mr Jensen, you claim to have uncovered something that requires legal advice and...what was it?” he began, glancing languidly down at a notepad. “Ah, may open us to criminal prosecution up above?” He glanced back up. “And yet...this is apparently not critical enough to require the full board of directors. Please explain, Adam.”"
                    ]
                },
                {
                    src: "",
                    title: "Fomoritis Confirmed",
                    intro: [
                        "Dr Nicholas Magnusson looked up as the door slid open, smiling with solemn reassurance at the children hesitating in the doorway. One was a thin, black-haired boy with yellow sunglasses in front of apparently-orange eyes; to the boy’s right was a girl whose defiant green stare was tinged with apprehension. The hair on her left-hand-side was much shorter.",
                        "“Ah, Miss MacCarthy. Master O’Flaherty. Come in.”",
                        "They obeyed reluctantly, shuffling over to the chairs in front of him. O’Flaherty slumped in his chair, adopting a resigned expression and folding his arms defensively across his chest. MacCarthy sat perfectly upright, hands clasped tightly in her lap. Tightly enough that her knuckles had lost whatever colour they originally had.",
                        "Magnusson glanced back at his notes again. Diarmuid Uí Flatharta and Siobhán Mac Carthaí. Both had been handed over to the department just under a month ago by a group of Fomorian smugglers or pirates, without showing any symptoms of Fomoritis. Unfortunately, Thompson’s biopsy report two days ago had confirmed it. The procedure itself had apparently gone quite well, though that may have been the result of the sedatives both had asked for after nearly suffering panic attacks in their initial session."
                    ]
                },
                {
                    src: "",
                    title: "The Dwarven Inquisition Are Expected",
                    intro: [
                        "The knock on the door was something that Colonel Munro had been expecting for the last five or ten minutes, after the telephone on his desk had warned him that the visitors had arrived at the inner security checkpoints. Closing the pair of dossiers and the report that lay on his desk, he looked up and barked a command to enter. His adjutant swung the door open, announcing that the visitors from the Containment Office had arrived.",
                        "“Send them in, Cole. And have somebody fetch Dr Magnusson,” Munro ordered, standing up. The lieutenant withdrew and stepped aside, revealing a pair of nuns who were both clad in dark khaki habits. The one on Munro’s right was just about four feet high, with larger eyes and a pair of sun goggles dangling around her neck – clearly a woman of the tunnels. The other one was apparently human and, with far fewer lines on her face, appeared to be younger. Neither bore any obvious sign of a particular order, but they didn’t need to.",
                        "“Colonel Munro,” the older one began. Her accent was quite thick, but there was nothing wrong with her English grammar. “I am Siúr Áine. This is my assistant, Síur Bríd.” She briefly gestured towards herself and her taller, younger companion, before folding her arms back into her sleeves."
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