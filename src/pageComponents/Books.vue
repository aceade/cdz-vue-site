<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue'
import Book from '../components/Book.vue';

export default {
    components: {
        Book,
        Navbar,
        Footer
    },
    props: {
        
    },
    data() {
        return {
            cruaghLinks: [
                { title: "Apple Books", href:"https://books2read.com/u/47RoEa?store=apple&format=EBOOK" },
                { title: "Barnes & Noble", href: "https://books2read.com/u/47RoEa?store=bn&format=EBOOK" },
                { title: "Smashwords", href: "https://books2read.com/u/47RoEa?store=smashwords&format=EBOOK" },
                { title: "Google Play", href: "https://play.google.com/store/books/details?id=zIStEAAAQBAJ" },
                { title: "Buy Me A Coffee (PDF)", href: "https://buymeacoffee.com/aceade/" },
                { title: "Ko-fi (PDF)", href: "https://ko-fi.com/aceade/shop" },
                { title: "Other", href: "https://books2read.com/cruagh-island-affair "}
            ],
            detentionLinks: [
                { title: "Amazon", href:"https://www.amazon.com/gp/product/B0D2DS723H?tag=" },
                { title: "Smashwords", href:"https://www.smashwords.com/books/view/1535736" },
                { title: "Apple Books", href:"https://books.apple.com/ie/book/tales-from-a-fomorian-detention-centre/id6479331493" },
                { title: "Buy Me A Coffee (PDF)", href:"https://buymeacoffee.com/aceade/" },
                { title: "Ko-fi (PDF)", href:"https://ko-fi.com/aceade/shop" },
                { title: "Other", href:"https://books2read.com/fomorian-detention-centre-tales" }
            ],
            spycrabsLinks: [
                { title: "Amazon", href:"https://www.amazon.com/gp/product/B0D2XY86Z1" },
                { title: "Smashwords", href:"https://www.smashwords.com/books/view/1513644" },
                { title: "Apple Books", href:"https://books.apple.com/ie/book/spycrabs-warbirds/id6476814482?at=1010l9S2&uo=4&mt=11" },
                { title: "Buy Me A Coffee (PDF)", href:"https://buymeacoffee.com/aceade/" },
                { title: "Ko-fi (PDF)", href:"https://ko-fi.com/aceade/shop" },
                { title: "Other", href:"https://books2read.com/spycrabs-and-warbirds"}
            ],
            fitowLinks: [
                {title: "Buy Me A Coffee (PDF)", href: "https://www.buymeacoffee.com/aceade/e/128638"},
                {title: "Amazon", href: "https://www.amazon.com/gp/product/B0DCH8HJJX"},
                {title: "Apple Books", href: "https://books.apple.com/ie/book/fomorians-in-their-own-words/id6477840719"},
                {title: "Smashwords", href: "https://www.smashwords.com/books/view/1521852"},
                {title: "Other", href:"https://books2read.com/fomorians-in-their-own-words"}
            ],
            forgettingPhysicsLinks: [
                {title: "Apple Books", href:"https://books2read.com/u/3nqZdR?store=apple&format=EBOOK"},
                {title: "Smashwords", href:"https://books2read.com/u/3nqZdR?store=smashwords&format=EBOOK"},
                {title: "Buy Me A Coffee (PDF)", href:"https://www.buymeacoffee.com/aceade/e/146883"},
                {title: "Other", href:"https://books2read.com/forgetting-how-to-physics"}
            ]
        }
    }

}

</script>

<style lang="css">
@import '../assets/base.css';
@import '../assets/main.css';

ul {
    margin-top: 5px;
}

li {
    list-style: "\261E";
}

</style>

<template>
    <Navbar/>

    <main>
        <h1>Books In The Series</h1>
        <p>Collections of short stories, available as ebooks</p>

        <Book title="The Cruagh Island Affair"
            coverSrc="https://aceade.net/wp-content/uploads/2024/03/CruaghIslandAffair_v2-1-1448x2048.webp" 
            coverAlt="A island being struck by lightning as it rises from the mist. At the bottom of the page are two grim teenagers, with a third character looming out of the mist behind them" 
            blurb="A corrupt dwarven scientist decides to experiment on two teenagers to uncover the cause of the Fomorians."
            :links="cruaghLinks"
        />
        <Book title="Tales From A Fomorian Detention Centre" coverSrc="https://aceade.net/wp-content/uploads/2024/03/detentioncentretales_v2-scaled.webp"
            coverAlt = "Four teenagers leaning against a wall in a yard next to a drainpipe. Two have fangs coming out of their lips. Another has a cigarette in his mouth. The fourth has an old-fashioned shawl draped around her. The image has a sepia overlay to resemble an old photo"
            blurb="Tales from a detention centre for orcs in pre-WW1 Ireland."
            :links="detentionLinks"
        />
        <Book title="Spycrabs & Warbirds" coverSrc="https://aceade.net/wp-content/uploads/2024/03/SpycrabsAndWarbirdsCover-scaled.jpg.webp"
            coverAlt = "A giant bird with an elfen rider on its back. A snake person peering through a telescope. A submarine on the surface."
            blurb="Historical fantasy meets spy fiction in this collection of tales of a low-intensity conflict, set around Ireland in the early 20th Century."
            :links="spycrabsLinks"
        />

        <Book title="Fomorians In Their Own Words" coverSrc="https://aceade.net/wp-content/uploads/2024/09/FITOW_Redux-scaled.webp"
            coverAlt="Four children sitting on two sofas, with a woman and a man in uniform behind them. Two are holding hands, earning a disapproving look from the woman behind them."
            blurb="Ever since the Dwarven Homelands in Connacht were sealed off in the mid 19th Century, the Fomorians or orcs who replaced them have been seen as lumbering, witless monsters. Now, six Fomorians from different backgrounds give their viewpoints on it. Some were born as Fomorians. Others were not."
            :links="fitowLinks"
        />
        <Book title="Forgetting How To Physics" coverSrc="https://aceade.net/wp-content/uploads/2024/03/ForgettingHowToPhysicsCover_v1-1.png"
            coverAlt="A cart floats upside down in front of a cottage, to the ire of the owner and a bystander."
            blurb="The Dwarven Homeland of Connemara is (in)famous for many things. The network of tunnels that riddle the rugged hills. The canals across the bogs and lakes. The patches of distorted reality that, more than the Fomorians, banshees and snakes, are responsible for the dwarves fleeing their homeland."
            :links="forgettingPhysicsLinks"
        />
        <Footer/>
    </main>
    
</template>