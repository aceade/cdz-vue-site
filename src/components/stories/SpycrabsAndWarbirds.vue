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
                    src: "https://aceade.files.wordpress.com/2021/03/porter.pdf",
                    title: "Porter",
                    intro: [
                        "The light that shone into his face made it difficult to see much in the room, but it didn't block his ears. He could hear somebody settling themselves into a chair, probably a more comfortable one than the metal monstrosity he sat in, thick leather straps around his arms and legs – the meaty arms and legs that were covered in ugly green scaly patches. Behind the light, he heard matches being struck, smelled a cigarette or cigar coming to life.",
                        "He straightened up and tensed as somebody cleared their throat, before a button clicked. When the man behind the light spoke, it was in an upper-class accent that didn't quite mask the speaker's roots in Malahide. His manner was unhurried.",
                        "“We'll get started. You are James David Porter, is that correct?”",
                        "“Yes, sir.”",
                        "“Where were you born?”",
                        "“Number 11, Pound Lane, Maynooth. First of June, 1880.”",
                        "“Born to who?”",
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/03/spymaster.pdf",
                    title: "In Which The Kingdom of Scandinavia Plans To Troll The British Navy",
                    intro: [
                        "The swift, efficient rat-tat-tat on the door broke the Admiral’s concentration, just as the cigarette lighter had come to life. Scowling briefly out one side of his mouth, he held the old bullet case to the top of the pipe and puffed as the tobacco began to smoulder. Even before he could ask who it was, the door swung halfway open to reveal a woman in a severe navy-blue tunic that marked her as a Lieutenant. Icy pale blue eyes peered out of a face that was lined with middle-age, her mouth turned down in a disapproving look.",
                        "“Sir, Mr Bjornsson has arrived,” she announced in a clipped, efficient tone.",
                        "Thank you, Miss Nilsdottir. Send him in,” the Admiral growled. She withdrew her head long enough to hold the door open, gesturing for the visitor to enter. ",
                        "He was completely unremarkable; had the Admiral passed him on the streets, the light grey suit, matching open overcoat and Homburg would barely have registered. A thin grey moustache hung limply beneath half-closed eyes and, as he removed the hat. Even his white shirt took on a grey cast. The only vaguely colourful article about him was the light brown attaché case in his right hand.",
                        "“Vice-Admiral Falsen,” he whispered languidly. Somehow, Falsen suspected that the man have known long before he set foot in the Ministry’s corridors, even if his name was on the door."
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/04/dropoff.pdf",
                    title: "Submarine Dropoff",
                    intro: [
                        "The listening and observation posts west of Ballyconneely had long since been established as part of the quarantine network around Connemara. Approximately a company was garrisoned in a series of blockhouses around the peninsula, connected to the main forts at Ballyconeely and Roundstone by redundant telephone wires. Within ten minutes, a report of a suspicious ship would be filtered through the command station, plotted on the mapping tables and relayed out to the corvettes and destroyer boats on standby or already out on patrol.",
                        "In theory, at least. In practice, every single sighting in the last thirty years had turned out to either be one of their own ships, or phantoms due to atmospheric conditions. Only once had an unidentified ship turned out to be something unusual – a bulk carrier out of New York had got lost in a storm, and been very glad to be steered away from the orc-occupied quarantine zone.",
                        "Just a mile off the coast of Connemara, the swell of an otherwise normal patch of sea was subtly broken by a metallic tube that was bent forward into a right-angle. It remained there for some time, unhurriedly rotating to either side. Had any naval vessel been close enough to spot it, it would have been quickly recognised. To their southeast, a recurrent yellow flash marked a distant lighthouse, but there were no other signs of lights along the coastline."
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
                    src: "https://aceade.files.wordpress.com/2021/03/ausefulpoltician.pdf",
                    title: "A Useful Politician",
                    intro: [
                        "Just one letter. That was all she had to do – post a letter. The gentleman with the genial smile, vaguely Continental accent and the icy blue eyes had paid her two pounds for a penny-rate letter, already stamped and addressed. He’d hinted that she might find it useful to write one herself",
                        "Mrs Lynch smiled to herself as she approached the postbox just outside Heuston Station, revealing a haphazard array of tobacco-stained teeth. Hardly the best pay for her little favours, but quite good for such a trivial task and the extra two pounds would be very useful if Jimmy, Anna or Michael caught the flu again.",
                        "The name on the envelope was one she knew well. Jonathan Butler, County Councillor for Galway-Roscommon. Anyone in Connacht – the parts that hadn’t been overrun by the Fomorians – knew of him. A hollow-cheeked man with a very intense stare, frequently in the papers over London’s lack of support for Connacht. Sure, there was a heavy military presence, but not a lot else. Perhaps the man with the blue eyes wanted him to draw some more attention to this again."
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
                    src: "https://aceade.files.wordpress.com/2021/03/of-snakes-and-birds.pdf",
                    title: "Of Snakes and Birds",
                    intro: [
                        "Darragh Timoney would tell anyone who’d listen that the best way to find leads for his weekly column, Tales from the Western Front, was to sit in a pub of an evening. One could uncover all manner of interesting threads from the varied walks of life – fishermen, shopkeepers, off-duty soldiers – that one met in Galway’s pubs. The fact that he liked his stout was a mere bonus.",
                        "He was sitting down the far end of the King’s Head with a pint of the black stuff, notepad and pencil in the gap between the pillar and his right hand. He hadn’t heard anything particularly newsworthy yet, but that might just be his roots in Ballybrit talking; apparently, the rich folks up in Dublin and Belfast and over the sea loved hearing anything from the edge of the disaster zone. It didn’t matter what – just as long as they felt that the cost of the Wall was worth it."
                    ]
                },
                {
                    src: "https://aceade.files.wordpress.com/2021/03/site_reconnaisance.pdf",
                    title: "Site Reconnaisance",
                    intro: [
                        "Three miles southwest of Louisburgh, an oppressive silence fell over the countryside that basked in the hazy sunshine. The overgrown fields behind bush-riddled drystone walls were unnaturally still, without any trace of the native species that would have filled them. Something had caused them to hunker down.",
                        "This was not readily apparent to the party of four dwarves and two humans that held onto various parts of the Ford that roared along the rough road that led to an outpost looking over the sea at Carrowniskey Beach. With the exception of the driver, who possessed the faint smirk of somebody enjoying the sensation of being just in control, they were more concerned with the fact that it shook around on the uneven dirt and stone surface like a possessed beast or an unusually demented púca."
                    ]
                },
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