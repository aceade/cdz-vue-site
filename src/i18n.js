// import the library we require
import { createI18n } from 'vue-i18n';

const messages = {
    en : {
        navbar: {
            home: "Home",
            stories: "Stories & Collections",
            artwork: "Artwork",
            timelapses: "Timelapses",
            about: "About the Author"
        },
        about: {
            title: "About Me",
            p1: "I'm a software engineer in my day job. Writing scifi & fantasy is a long-standing hobby that never really went anywhere until I shifted to writing short stories in 2019. And then I got bored during the COVID lockdown of 2020.",
            p2: "This series was originally inspired by a mix of several years of regular hikes in the backcountry of Connemara, the dwarven ruins of Morrowind/Skyrim, and the surreal, bleak S.T.A.L.K.E.R. games. My original goal was to create a mod for one of those games, but since being a software engineer requires me to spend my days getting trolled by computers...",
            p3: "My original site and blog for this series is",
            link: "here",
            p3Finish: "Most of the artwork listed here is embedded from that.",
            why: "Why a second site?",
            answer: "I got into a rut at work and decided I needed to try doing something different. I figured that since it's damn near impossible to do any kind of web development without some frontend work, I might as well learn Vue.",
            code: "If you want a look at the code for this site, that's up on",
            disclaimer: ""
        }
    },
    ga: {
        navbar: {
            home: "Baile",
            stories: "Scealta & Cnuasach",
            artwork: "Obair Ealaíne",
            timelapses: "Íomhánna Imeacht Ama",
            about: "Faoin t-Údar"
        },
        about: {
            title: "Fúm",
            p1: "Is innealtóir bogearraí mé. Bhí mé ag scríobh scifi & fantasy le fadó, ach níor chríochnaigh mé rud éigin riamh. Thosaigh mé ag scríobh gearr-sceéalta i 2019, agus ní raibh mé abálta morán a dhéanamh le linn an phandemic i 2020...",
            p2: "Thug roinnt siúlann is gConnemara agus roinnt cluichí riomhaire (Morrowind, Skyrim agus S.T.A.L.K.E.R. Shadow of Cherynobyl) inspioráid dom. Bhí mé chun mod a dhéanamh don cluichí sin atá suite i gConnemara, ach cuireann ríomhairí isteach orm fós sa saol mór!",
            p3: "Tá mo phríomh-suíomh don sraith seo ar fáil",
            link: "anseo",
            p3Finish: "Tagann an cuid is mó den obair ealaíne ón suíomh sin.",
            why: "Cén fáth go ndearna tú suíomh dara?",
            answer: "Bhí an t-obair ag cur isteach orm, agus cheap mé gur cheart dom rud éigin nua a fhoghlaim. Tá sé deacair web development a dhéanamh gan eolas ar bith faoin obair ar an bhfrontend, agus de bharr, dúirt mé liom féin gur cheart dom Vue a fhoghlaim.",
            code: "Mas maith leat an code a fhéiceáil, tá se ar fáil ar",
            disclaimer: "Caithfidh mé a admháil: níl Gaeilgeoir mé! Tá me cinnte gur iomaí botún anseo."
        }
    }
};

// create the i18n object and export so other files can use it
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
});
export default i18n;