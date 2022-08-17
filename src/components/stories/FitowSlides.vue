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
                    title: "Preface",
                    paragraphs: [
                        "As anyone with even the most cursory knowledge of current affairs should know, the ongoing quarantine of the Dwarven Homeland Region in Ireland is in part motivated by the presence of the Fomorians. Fomorians, or “orcs”, are popularly known to be lumbering, mentally stunted minions of the bean sidhe with brainpower inversely proportionate to their muscle power, fit only for extermination or menial labour under heavy guard. The Firtollán Church of the Tunnels has been quite strident in simultaneously advocating their extermination and rehabilitation, and one need only peruse the popular press for exchanges where one individual has accused another of being a covert sympathiser.",
                        "In the course of my duties as an alienist attached to the War Office, I have made the acquaintance of numerous Fomorians that have been detained by the British Army and Royal Navy. Some are guardsmen, forcibly exposed to Fomoritis in the line of duty. Some are children raised beyond the Corrib. This personal experience has lead me to conclude that affairs are far more nuanced, as is the case with most things in life.",
                        "Connacht Trading’s recent public admission and denunciation of a rogue (albeit successful) experiment to determine the actual mechanism behind Fomoritis has sparked a high level of public interest in the Fomorians. To that end, I have attached several letters from some individuals with which I am acquainted. Among these are the two confirmatory subjects, Mstr D and Miss S. I trust that these may shed some light on the situation."
                    ],
                    author: "Dr Nicholas Magnusson, Department 11, War Office"
                },
                {
                    title: "The Guardsman",
                    paragraphs: [
                        "I wasn’t born an orc, and I never asked to be one.",
                        "In fact, I was born in Maynooth, and signed up with the Royal Irish Fusiliers after hearing of a banshee raid on Castlebar in February of ‘96. During a raid that went pear-shaped in May 1912, myself and another rifleman were captured by the Fomorian Brotherhood. The long and short of it is that we escaped – or rather, we were rescued by the Army – about two months later, but by that point is it was too late.",
                        "Before being deployed into Connacht, we were warned of the possibility of being turned into a Fomorian. The dwarves warned us at length that being turned was a sign of “moral failing”, and that we should make all efforts to avoid capture. They were pretty unpleasant about it after they found out – pestering us at all hours to “seek redemption” (even in the middle of the night), blocking any attempt to feed us, even demanding that we simply be shot out-of-hand. One of those people had been pretty glad to have us around two months previously! Funny how things change, isn’t it?",
                        "Here’s what I don’t understand about this whole thing. I took the King’s Shilling well over a decade before I was turned. Nobody has managed to explain why being turned into an orc cancels that out. I certainly don’t think it does!",
                    ],
                    author: "Sgt. James Porter"
                },
                {
                    title: "The Nurse",
                    paragraphs: [
                        "I was not born a Fomorian, nor did I willingly become one. I was in fact born near Headford and, at the tender age of seventeen, was snatched by those bandits known as the Fomorian Brotherhood. How they got past the vaunted Wall of Connacht has never been explained, aside from their poitín-fuelled boasts that nobody beats the Brotherhood, but the result is that I spent over two years as an unwilling nurse among them.",
                        "I had a good chance to see the Brotherhood up close, and I can confirm that there are indeed bandits among them, people for whom it was merely an excuse for raiding and throwing around their weight. I have no sympathy for these, and in truth, I got the impression that the Brotherhood’s leadership considered them to be merely useful cannon fodder. The more senior healers rarely deigned to focus on these types, leaving them to me.",
                        "Others were involved merely because it was what their family did, and many of those struck me as conflicted by it. Still others were zealots who genuinely believed that they were the first line of defence against the banshees, and that being turned into a Fomorian is a blessing. Both of these groups had little love for the League; a frequent accusation I heard is that the dwarves left them to die out there when the League pulled out.",
                        "After I escaped, I wound up at a detention centre where I currently work, still as a nurse. The Fomorian children I work around are, in many ways, oddly similar to human children. They have different likes and dislikes. Some are possessed of choleric temperaments. Some are melancholic and withdrawn. Others are pleasant, outgoing and helpful. One point in common is that they are all possessed of denser musculature and are physically stronger than what is normal for a child of their age. Indeed, some do not even have the fangs or skin fungus that everybody knows they should have.",
                        "Would I accept a cure for ‘Fomoritis’? At this stage, I don’t know. The extra physical strength may be useful, but I find myself burning through food at a faster rate than I should and I feel the cold more than I did before. I do not consider these major disadvantages, but I cannot fathom how it is a blessing – certainly not enough to be forcibly exposed to it."
                    ],
                    author: "Sarah Delaney"
                },
                {
                    title: "The Former Slavers’ Daughter",
                    paragraphs: [
                        "I am a Fomorian, born and bred on the surface in the Maam valley. My father was once a clerk for the labour and livestock agents – slavers and cattle traders, to be frank. He did not particularly care for it, but trading livestock has been the basis of the entire economy of that valley for generations. I do not know what prompted him to finally take us and leave, but I know that it took him a few years to fully work up the courage.",
                        "Life in the Homeland Region is apparently more difficult than elsewhere. One has to be constantly on the lookout for the “glitches” – any such place where the very fabric of reality has been torn apart. There is no rhyme or reason to where or when they occur: I once experienced gravity reversing itself while I was asleep, and what I remember most about that was that I had rolled out of bed while it was happening and didn’t fully awaken until I landed on the ceiling.",
                        "While it was alarming at the time, all I suffered was some bruises. There are other, less pleasant effects that I would not wish on anyone. I simply do not have the words to describe the results of an “inside-out” patch – an area where the victim is turned inside-out – but I can tell you it is gruesome.",
                        "I am told that these things simply do not occur outside the homeland. Even two years after we left, I find this hard to fully accept. At night, I find myself waking up because I think I’ve smelt or heard something – anything – that could be a glitch occurring. This is apparently not considered normal; in Connemara, it is a basic survival instinct.",
                        "The Brotherhood are mainly present in the southern and eastern parts of the homeland, particularly around Corcóg and Mam Ean. They tend to avoid the western edge (around the mouth of Killary Harbour) because of an ongoing feud with the O’Rourke clan of Letterfrack, but I don’t know the full details of that. What I do know is that most people that I knew in Maam wished they would stop drawing attention from the British military and the League – or at the very least, not draw it towards us."
                    ],
                    author: "Maebh Ní Bhrodaí"
                },
                {
                    title: "Mstr D",
                    paragraphs: [
                        "I wasn’t born an orc, not that it’d make much difference. I didn’t become one until after some ne’er-do-well sold me to an utter scut from Connacht Trading named “Dr Burke”. I don’t know exactly how, but I ended up on an island I can’t name.",
                        "Two or three months later, I still have nightmares every other night about being exposed. I’m tied to a stretcher, and have been for maybe three days since they cut open my arms. They feed me twice a day with a tube through a mask, and dunk me in cold seawater in the morning to clean away the bodily fluids from yesterday. They put this other mask over my mouth and nose, connected to some metal canister. There’s some kind of fan circling above me, pulling the air out of the room, and they leave and seal the room. I know Shiva [Ms S] is in the next room, having them same thing done to her.",
                        "The air starts smelling dry and stale. I start trying to pull my arms and legs – anything I can move – but it does nothing. I scream, but none of them care. They just watch me from the other side of a glass window about two inches thick. Four feet, maybe an inch more, and I’d be outside the room. But I can’t move!",
                        "I don’t remember the details of how we got out. Maybe I don’t want to. What I do know is that I – that we ended up being handed over to the bulldogs by some orcs. And they were angry about it. Not handing us over, but that we’d been turned. Seems they hate the “Fomorian Brotherhood” as much as anyone in Galway would. Who’d have thought it? Certainly nobody I knew, or at least none had the guts to say so.",
                        "The only change I’ve noticed is that I have thicker muscles. That’s the only thing that is definitely down to me being, well, turned into a Fomorian. I don’t sleep great, I jump if anything goes off behind me and my temper’s shorter than it was...but I’m told these aren’t related. I wouldn’t know. All I definitely know is that I wouldn’t have put myself forward for it, that I’m stuck with it, and the worst part is that I had absolutely no say in it."
                    ],
                    author: "Mstr D, edited by Dr Magnusson. Mstr D is possessed of a foul mouth and limited education.",
                    width: '100%'
                },
                {
                    title: "S.O.B.",
                    paragraphs: [
                        "I am of the Brotherhood, and I don’t care who hears it. I’m told you think we’re bandits. That we live just to steal babies and…turn them into us. Make them stronger.",
                        "Who wouldn’t want to be stronger? But even if you don’t, I’ve never heard anyone suggest it and they weren’t on the lash [note: he means under the influence here]. The only ones we ‘take under the hills’ are soldiers, British or Leagueist. The ones who try to storm our homes with poison gas and fire tubes [note: he appears to mean flamethrowers here]. That’s if we don’t shoot them on the spot. Nice, quick and clean. Not like you.",
                        "Out past the river and Lough Corrib, there’s no law beyond what the Brotherhood or the bandits like those O’Rourkes up near Letterfrack set down. There’s nobody else to provide it – the League left us to die out there, and then tried to wipe us out. All they do – all you bulldogs do – is sit safely behind your walls and inside your steel-clad trains, while we sit between you and the banshees and their war-birds and hired snakes. We’re the front line. Not you.",
                        "I killed my first banshee at ten years of age. Took a while for it to sink in, but it was either myself or it. Out there, everyone who can fight learns to do so early. But even if you can’t, you pull your weight. Everyone does in the Brotherhood. An crann roimh an chraobh, agus an chraobh roimh an duilleog [transl: the tree before the branch, and the branch before the leaf]. ",
                        "You probably think I’m a monster. Maybe you should look in a mirror! For all your talk of “Leave No Dwarf Behind”, once your people are lost out there you don’t care. We don't leave our people behind. Yet we’re the bandits?",
                    ],
                    author: "Tomás Grady",
                    width: '100%'
                },
                
            ],
            options: {
                autoPlay: false,
                autoWidth: false,
                autoHeight: true,
                perPage: 1,
                rewind: true,
            },
            objectType: "story",
        }
    }
}

</script>
<style>
label {
    padding: 10px;
    margin-top: 5px;
}
</style>