<template>
    <header>
        <div class="seriesLogo">
            <img src="https://aceade.files.wordpress.com/2019/07/broken_arms.png"/>
        </div>
        <div>
            <nav class="navigation">

                <ul>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="stories.html">Stories</a>
                    </li>
                    <li>
                        <a href="artwork.html">Artwork</a>
                    </li>
                    <li>
                        <a href="evictor.html">Smash The Evictor's Statue!</a>
                    </li>
                    <hr/>
                    <li>
                        <a href="https://github.com/aceade/cdz-vue-site">View on GitHub</a>
                    </li>
                    <li>
                        <a href="https://aceade.net/connacht-disaster-zone/">Original Site</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.navigation {
    width: 100%;
    margin-bottom: 20px;
    font-size: 25px;
}

.navigation li {
    list-style: none;
    margin-left: -15px;
}

header {
  line-height: 1.5;
  width: 100%;
  padding-right: calc(var(--section-gap) / 2);
}

header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
}

.seriesLogo {
    margin-bottom: 10px;
}

.seriesLogo img {
    animation: Logo-spin infinite 2s alternate;
    max-width: 100px;
}


@keyframes Logo-spin {
    from {
    transform: rotate(-15deg);
  }
  to {
    transform: rotate(15deg);
  }
}
</style>