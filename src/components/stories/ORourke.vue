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
                    src: "https://aceade.files.wordpress.com/2021/03/receiver.pdf",
                    title: "Receiver",
                    intro: [
                        "“It is completely impossible that the Fomorians would be able to develop a working radio apparatus. Any such thoughts are to be considered an improbable fantasy.”\n\t- Intelligence summary, East Connacht Command, 11th of October 1914",
                        "In hindsight, I tarried longer than I should have. Skulking next to a lady’s door is, under most circumstances, improper behaviour. Pausing next to the door when one hears the lady in question talking to nobody is, however, perhaps more understandable. Especially when that young lady is the new wife of one’s employers’ nephew.",
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
                    src: "https://aceade.files.wordpress.com/2021/08/fomorianfuturefantasy.pdf",
                    title: "Fomorian Fantasies of The Future",
                    intro: [
                        "Gráinne was bored. Outwardly, her expression didn’t change as she stared out the window, absently watching the waves in the bay, but she was still feeling peevish about being chased out of the library earlier that morning. Sure, her mother and father-in-law needed to discuss something in quiet with Aidan, but did it really have to be when she had just curled up in the armchair? And it wasn’t her shift on the wireless scanning rota, so she couldn’t even make herself useful by listening to the enciphered messages that Aidan suspected were coming from somewhere named Cruagh Island.",
                        "Her train of thought didn’t so much leap as make a sharp right-hand turn into wondering who they were meant for, and if it was possible to reach across the sea with these radio waves. Not the immediate one between Cleggan and Inishbofin, but the wider sea out towards North America. And if so, could they reach the other side of the world...and if so, could they be used to send something other than dotted bleeps and dashed creeps?",
                        "She started to picture a world where moving images were sent across the world in seconds, with sound, showing the people on the other end what those on the first end looked and sounded like. A world of endless opportunity. One where it was possible to discuss electrical apparatuses – apparati, surely – with people in Terra Australis, partake in a tea session with relatives who had moved to Southern America, even watch the sun rise over Italy, all from one’s own living room..."
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