<template>
    <header>
        <div class="seriesLogo">
            <img src="https://aceade.files.wordpress.com/2019/07/broken_arms.png"/>
        </div>
        <div>
            <nav class="navigation">

                <ul>
                    <li>
                        <a href="index.html">{{ $t("navbar.home") }}</a>
                    </li>
                    <li>
                        <a href="stories.html"> {{ $t("navbar.stories") }}</a>
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
                        </ul>
                    </li>
                    <li>
                        <a href="artwork.html">{{ $t("navbar.artwork") }}</a>
                        <ul class="sublist">
                            <li>
                                <a href="recordings.html">{{ $t("navbar.timelapses") }}</a>
                            </li>
                            <li>
                                <a href="evictor.html">Smash The Evictor's Statue!</a>
                            </li>
                        </ul>
                    </li>
                   
                    <hr/>
                    <li>
                        <a href="about.html">{{ $t("navbar.about")}}</a>
                    </li>
                    <!-- Localisation will not happen. This is being kept as self-education -->
                    <!-- <li class="locale-changer">
                        <select v-model="$i18n.locale">
                            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
                        </select>
                    </li> -->

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