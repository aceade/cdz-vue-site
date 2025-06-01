<template>
    <header>
        <div class="seriesLogo">
            <img src="https://aceade.net/wp-content/uploads/2024/03/broken_arms.webp" alt="The Connacht coat of arms (a shield with a bird on one half and an arm with a sword on the other). It is covered in scratches, bullet holes and other stains."/>
        </div>
        <div>
            <nav class="navigation">

                <ul>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="books.html">Stories & Collections</a>
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