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
- `npm run build`. This creates a production build inside the **dist/** folder.
- `npm run preview`. Runs a preview of the production site. This will be exposed the outside so that mobile devices can view it.

### Caveats
Mobile browsers may not be able to render the PDFs as-is. As a fallback, they will display the first few paragraphs and a link to download it instead.

## Server deployment
This uses the GitHub Pages action posted [here](https://github.com/peaceiris/actions-gh-pages) to build the site using Vite and then deploy onto a separate branch (gh-pages). This does _not_ happen on main due to branch protection rules.

The file that configures this is **.github/workflows/node.js.yml**.

## Styling
TBD.
