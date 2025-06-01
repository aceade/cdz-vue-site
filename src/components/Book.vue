<script>
    export class BuyLink {
        constructor(link, title) {
            this.link = link;
            this.title = title;
        }
    }

    export default {
        props: {
            title: {
                type: String
            },
            blurb: {
                type: String
            },
            coverSrc: {
                type: String
            },
            coverAlt: {
                type: String
            },
            links: {
                type: Array
            }
        }
    }
</script>

<style lang="css" scoped>

.buyLinks li {
    margin-bottom: 0.2rem;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    

    > img {
        max-width: 300px;
        margin-right: 5px;
        padding: 5px;
    }
}

</style>

<template>

    <h2>{{ title }}</h2>

    <div class="grid">

        <img :src="coverSrc" :alt="coverAlt"/>

        <div>
            <p class="blurb">{{ blurb }}</p>

            <ul class="buyLinks" v-for="link in links">
                <li><a :href="link.href" target="_blank">{{ link.title }}</a></li>
            </ul>
        </div>
    </div>
    <hr/>
</template>