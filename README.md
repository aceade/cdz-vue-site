# cdz-vue-site
A practice project to teach myself Vue, based on [a scifi series](https://aceade.wordpress.com/connacht-disaster-zone/) I'm working on. This will provide a static site with various pages, which will be rendered via GitHub Actions.

## Required pages
- Home
- Artwork. Contains carousels of different categories, as based off [this page](https://aceade.wordpress.com/connacht-disaster-zone/connacht-disaster-zone-artwork/). The images will included as direct links from my main site.
- Stories. These will be displayed as embedded PDFs.
- Collections. These will, where possible, contain a download link from BuyMeACoffee.
- Timelapse. Not in the original spec; contains embedded videos of timelapses.


### Common elements
- Header
    - navigation bar
- Components
    - Slideshow. Displays a carousel of images.
    - PdfSlideshow. Originally used just to display PDFs; extended to include videos as well.
- Footer
    - Social media links (or what passes for them)

### Third-party components
- [Vue Splide](https://github.com/Splidejs/vue-splide) - a Vue package for slide decks.
- [Bunchló Gael font](https://www.ffonts.net/Bunchl.font) - originally created by Vincent Morley in 1996.
- [Mastodon icon](https://fontawesome.com/icons/mastodon?s=brands)
- [Twitter icon](https://fontawesome.com/icons/twitter?s=brands)

## Running locally
There are a few ways to run this:
- `npm run dev`. This runs a local build for development work
- `npm run build`. This creates a production build inside the **dist/** folder.
- `npm run preview`. Runs a preview of the production site. This will be exposed to the outside so that mobile devices can view it.
- `npm run deployLocally`. Chains the build and preview commands.

### Caveats
- Mobile browsers may not be able to render the PDFs as-is. As a fallback, they will display the first few paragraphs and a link to download it instead.
- Embedded video quality may not be the best. However, the user will be able to view on Youtube.

## Server deployment
This uses the GitHub Pages action posted [here](https://github.com/peaceiris/actions-gh-pages) to build the site using Vite and then deploy onto a separate branch (gh-pages). This does _not_ happen on main due to branch protection rules.

The file that configures this is **.github/workflows/node.js.yml**.

## Styling
A lot of this uses the default styling in Vue. Aside from that, the Bunchló Gael font is used to provide a suitably Irish look for this.

## Licence
All code here is under the MIT licence. Third-party components as listed above may be under different licences.