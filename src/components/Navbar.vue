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
                        <a href="index.html">Stories</a>
                    </li>
                    <li>
                        <a href="index.html">Artwork</a>
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
    font-size: 20px;
}

.navigation li {
    list-style: none;
}


header {
  line-height: 1.5;
  width: 100%;
}
.seriesLogo {
    margin-bottom: 5%;
}

.seriesLogo img {
    animation: Logo-spin infinite 2s alternate;
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