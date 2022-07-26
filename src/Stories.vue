<script>
import Navbar from './components/Navbar.vue';
import PdfSlideshow from './components/PdfSlideshow.vue';
import PdfSlideshow1 from './components/PdfSlideshow.vue';

export default {
    components: {
    Navbar,
    PdfSlideshow,
    PdfSlideshow1
},
    data() {
        return {
            // each story has a PDF link, title and fallback text/intro
            stories: [
                {
                    src: "https://aceade.files.wordpress.com/2021/03/arrival.pdf",
                    title: "Arrival",
                    intro: [
                        "The rain had stopped, leaving puddles in the far-left corner of the courtyard, where the concrete ground dipped slightly. Inside the guardhouse, Warrant Officer Bartelli leaned back in the hard metal chair, drawing on his cigarette one last time. He glanced at the clock on the wall, exhaled and leaned forwards again, stubbing the cigarette out. Three forty-three PM on a Thursday.",
                        "The telephone from the outer cordon rang. He sighed, and lifted the earpiece. “Yes?” He listened, instantly straightening. “Yes, sir.” He covered the mouthpiece, glancing to his right at the sergeant standing next to the door out to the walkway above the courtyard. “Open the outer gate, Pete.”"
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/03/night-shift.pdf",
                    title: "Night Shift",
                    intro: [
                        "Night shift. God, how I hate it. Eight hours fighting against my natural urge to fall asleep while checking the cells every thirty minutes in between another boring game of cards. I'd swear Eddie Jones is looking at my cards when I have to make my rounds, but fair is fair – I've done that to him as well.",
                        "I glance at the clock on the wall. The corridor is quiet enough that I can hear it tick-tocking eight feet away – either that, or it's a bloody noisy thing. Eleven-twenty-nine p.m....time to check on the prisoners – oh, I'm sorry, the patients. Prisoners, patients – they're all orcs. Fomorians. The mutated. Whatever you want to call them."
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
                    src: "https://aceade.files.wordpress.com/2021/03/samples.pdf",
                    title: "Samples",
                    intro: [
                        "The knot in Diarmuid’s stomach was growing tighter. He’d been lying or sitting on the infirmary bed for nearly two hours – if the clock on the wall was right – ever since cleaning his teeth after breakfast. He did not want to be there, and the tongue lashing he’d received when saying so did not help.",
                        "He glanced around the room again. Bare white walls, alternating grey and white tiles on the floor, and seven more beds. Locked medicine cabinets and a couple of workbenches lined the far wall, with a sink halfway down the room. The unwanted smell of antiseptic came from a door at the far end of the room – and he jerked his head away, trying to avoid the word printed on the door. Belatedly, he noticed that there was a compact gramophone on a table down the other end."
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/03/slave-hunt.pdf",
                    title: "Slave Hunt",
                    intro: [
                        "Dominic Barr was not having a good day. Standing with his back to the door and glaring out the window at Killary Harbour, choosing to focus on the wrecks of the old dwarven trading fleet that littered the head of the fjord, he mentally reviewed the sources of his confounded anger.",
                        "Firstly, two fresh, surface-born slaves had escaped overnight – a quarter of the goods from the last raid gone, and no indication of how they had managed it! Secondly, the trackers had returned empty-handed. And thirdly, this was less than a month after the last escape – which had ended in a fight with a group of Fir Nathair that had dared to claim the chattel for themselves! Was it really so much to wish for a smooth operation?"
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/03/first-date.pdf",
                    title: "First Date",
                    intro: [
                        "“Gráinne?”",
                        "Gráinne flinched at the sudden noise, hands instinctively flying to her ears in spite of the fact that it was a whisper. She lowered them just as quickly as she saw Deirdre standing in the doorway, shaking her head with a smile on her face. Why was she happy?",
                        "“Head in the clouds again? You’ve already forgotten, haven’t you.”",
                        "“What have I forgotten?” Gráinne asked, frowning as much as she knew how to. Her head wasn’t in the clouds – it was attached to her shoulders! How could you even get clouds underground, anyway?",
                        "“We’re supposed to meet the O’Rourkes! Let me check your dress.”"
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/03/spymaster.pdf",
                    title: "In Which The Kingdom of Scandinavia Plans To Troll The British Navy",
                    intro: [
                        "The swift, efficient rat-tat-tat on the door broke the Admiral’s concentration, just as the cigarette lighter had come to life. Scowling briefly out one side of his mouth, he held the old bullet case to the top of the pipe and puffed as the tobacco began to smoulder. Even before he could ask who it was, the door swung halfway open to reveal a woman in a severe navy-blue tunic that marked her as a Lieutenant. Icy pale blue eyes peered out of a face that was lined with middle-age, her mouth turned down in a disapproving look.",
                        "“Sir, Mr Bjornsson has arrived,” she announced in a clipped, efficient tone.",
                        "“Thank you, Miss Nilsdottir. Send him in,” the Admiral growled. She withdrew her head long enough to hold the door open, gesturing for the visitor to enter"
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
                    src: "https://aceade.files.wordpress.com/2021/03/board_report.pdf",
                    title: "Board Report",
                    intro: [
                        "The room was unusually spacious, with a high vaulted ceiling that served to emphasise how conspicuously empty it was. A hemispherical quarztite table that followed the curves of the walls dominated the centre of the room, surrounded by austere matching thrones. The walls themselves had been lavishly decorated with murals of ships on the rolling waves, wagons in convoy or similar scenes of commerce, interspersed with stark white panels into which the large, bold letters “C T C” had been carved. Pale, pulsing blue light spilled from behind the letters."
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/03/ausefulpoltician.pdf",
                    title: "A Useful Politician",
                    intro: [
                        "Just one letter. That was all she had to do – post a letter. The gentleman with the genial smile, vaguely Continental accent and the icy blue eyes had paid her two pounds for a penny-rate letter, already stamped and addressed. He’d hinted that she might find it useful to write one herself",
                        "Mrs Lynch smiled to herself as she approached the postbox just outside Heuston Station, revealing a haphazard array of tobacco-stained teeth. Hardly the best pay for her little favours, but quite good for such a trivial task and the extra two pounds would be very useful if Jimmy, Anna or Michael caught the flu again."
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
                    src: "https://aceade.files.wordpress.com/2021/07/serpentoid_site_recon.pdf",
                    title: "Serpentoid Site Scouts",
                    intro: [
                        "The knock on the door was something that Colonel Munro had been expecting for the last five or ten minutes, after the telephone on his desk had warned him that the visitors had arrived at the inner security checkpoints. Closing the pair of dossiers and the report that lay on his desk, he looked up and barked a command to enter. His adjutant swung the door open, announcing that the visitors from the Containment Office had arrived",
                        "“Send them in, Cole. And have somebody fetch Dr Magnusson,” Munro ordered, standing up. The lieutenant withdrew and stepped aside, revealing a pair of nuns who were both clad in dark khaki habits. The one on Munro’s right was just about four feet high, with larger eyes and a pair of sun goggles dangling around her neck – clearly a woman of the tunnels. The other one was apparently human and, with far fewer lines on her face, appeared to be younger. Neither bore any obvious sign of a particular order, but they didn’t need to."
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

<template>
    <Navbar/>

    <main>
        <h1>Stories</h1>
        <div class="wrapper">
            <PdfSlideshow :options="options" :slides="stories" :object-type="objectType"></PdfSlideshow>
        </div>
    </main>
</template>

<style>
@import './assets/base.css';
@import './assets/main.css';
</style>