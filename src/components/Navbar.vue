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
                        <a href="stories.html">Stories & Collections</a>
                        <ul class="sublist">
                            <li>
                                <a href="cruagh.html">The Cruagh Island Affair</a>
                            </li>
                            <li>
                                <a href="detention.html">Detention Centre Tales</a>
                            </li>
                            <li>
                                <a href="spycrabs.html">Spycrabs & Warbirds</a>
                            </li>
                            <li>
                                <a href="fitow.html">Fomorians In Their Own Words</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="artwork.html">Artwork</a>
                        <ul class="sublist">
                            <li>
                                <a href="recordings.html">Timelapses</a>
                            </li>
                            <li>
                                <a href="evictor.html">Smash The Evictor's Statue!</a>
                            </li>
                        </ul>
                    </li>
                   
                    <hr/>
                    <li>
                        <a href="about.html">About the Author</a>
                    </li>

                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>

.sublist > li {
    list-style: "\261E";
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