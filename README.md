# cdz-vue-site
A practice project to teach myself Vue, based on [a scifi series](https://aceade.wordpress.com/connacht-disaster-zone/) I'm working on. This provides a static site with various pages which are built and deployed via GitHub Actions.

## Pages
- Home (index.html)
- Artwork. Contains carousels of different categories, as based off [this page](https://aceade.wordpress.com/connacht-disaster-zone/connacht-disaster-zone-artwork/). The images will included as direct links from my main site. Subcategories on different pages:
    - Timelapses. Contains embedded videos of timelapse recordings.
    - Smash The Evictor's Statue! A mini webcomic in which a humanoid snake decides to vandalise a statue of Saint Patrick.
- Stories. These will be displayed as embedded PDFs, with one caveat: mobile browsers may not be able to render the PDFs as-is. As a fallback, they will display the first few paragraphs and a link to download it instead. Any story that doesn't go 
- Collections. Stories grouped by category. These will, where possible, contain a download link from BuyMeACoffee.
    - The Cruagh Island Affair.
    - Tales From a Fomorian Detention Centre.
    - Spycrabs & Warbirds.

### Common elements
Vue is based around the concept of defining [Single File Components](https://vuejs.org/guide/scaling-up/sfc.html). This allows developers to split the user interface into independent, reusable pieces (much like server-side includes). This repo currently uses the following:
- Navigation bar
- Components
    - Slideshow. Displays a carousel of images.
    - PdfSlideshow. Originally used just to display PDFs; extended to include videos as well.
    - AuthorsNotes. Small end-sections on various categories.
    - Stories components. Broken down by category.
- Footer. Contains social media links

### Third-party components/sources
- [Vue Splide](https://github.com/Splidejs/vue-splide) - a Vue package for slide decks.
- [Bunchló Gael font](https://www.ffonts.net/Bunchl.font) - originally created by Vincent Morley in 1996.
- [Mastodon icon](https://fontawesome.com/icons/mastodon?s=brands)
- [Twitter icon](https://fontawesome.com/icons/twitter?s=brands)

## Running locally
There are a few ways to run this:
- `npm run dev`. This runs a local build for development work, and will be exposed on port 3000. This will be exposed to the outside so that mobile browsers can view it during development.
- `npm run build`. This creates a production build inside the **dist/** folder.
- `npm run preview`. Runs a preview of the production site. This will be exposed to the outside on port 4173 so that mobile devices can view it.
- `npm run deployLocally`. Chains the build and preview commands.

## Server deployment
This uses the GitHub Pages action posted [here](https://github.com/peaceiris/actions-gh-pages) to build the site using Vite and then deploy from a separate branch (gh-pages). This does _not_ happen on main due to branch protection rules.

The file that configures this is **.github/workflows/node.js.yml**.

## Styling
A lot of this uses the default styling in Vue. Aside from that, the Bunchló Gael font is used to provide a suitably Irish look for this.

## Licence
All code here is under the MIT licence. Third-party components as listed above may be under different licences.