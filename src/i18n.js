import { createI18n } from 'vue-i18n';

const messages = {
    en : {
        navbar: {
            home: "Home",
            stories: "Stories & Collections",
            artwork: "Artwork",
            timelapses: "Timelapses",
            about: "About the Author"
        }
    },
    ga: {
        navbar: {
            home: "Baile",
            stories: "Scealta & Cnuasach",
            artwork: "Obair Ealaíne",
            timelapses: "Íomhánna Imeacht Ama",
            about: "Faoin t-Údar"
        }
    }
};

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
});
export default i18n;