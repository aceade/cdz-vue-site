# cdz-vue-site
A practice project to teach myself Vue, based on [a scifi series](https://aceade.wordpress.com/connacht-disaster-zone/) I'm working on. This will provide a static site with various pages, which will be rendered via GitHub Actions.

## Required pages
- Home
- Artwork. Will contain carousels of different categories, as based off [this page](https://aceade.wordpress.com/connacht-disaster-zone/connacht-disaster-zone-artwork/). The images will included as direct links from my main site.
- Stories. These will be displayed as plain text for the user to read.
- Collections. These will be displayed as embedded PDFs.


### Common elements
- Header
    - navigation bar
    - "Contact me" link (which will open a modal form to email me)
- Footer
    - Credits and links

### Third-party components
- [Vue Splide](https://github.com/Splidejs/vue-splide)

## Running locally
There are a few ways to run this:
- `npm run dev`. This runs a local build for development work
- `npm run build`. This creates a production build inside the **dist/** folder. However, if you wish to run this, you may need to move the **dist/assets** folder to **dist/cdz-vue-site/assets** so each page can find the required files.

## Styling
TBD.
