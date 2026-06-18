# DEPENDENCIES_DRAFT.md

## Scope

MSlide2-Framework 4.0.0 dependency draft for Phase 2 audit/mapping.

This file documents dependencies only. No files have been moved, renamed, deleted, optimized, or replaced.

## External Dependency Map

Distinct external dependency/link groups identified: `22`.

Runtime-critical external CSS/JS/font groups identified: `11`.

| Dependency name | URL | Type | Used by | Required for runtime | Local replacement available | Risk level | Future recommendation |
|---|---|---|---|---|---|---|---|
| Iconoir Icons | `https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css` | CSS/font/icons | `index.html`, toolbar icons in `plugin/custom.js` | YES | NO | MEDIUM | vendor locally later |
| Bulma | `https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css` | CSS | `index.html`, slide layout/classes, modal pages | YES | NO | HIGH | vendor locally later |
| Bulma Carousel CSS | `https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css` | CSS | `index.html`, carousel sections | YES | NO | HIGH | vendor locally later |
| Bulma Carousel JS | `https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/js/bulma-carousel.min.js` | JS | `index.html`, `plugin/custom.js` `bulmaCarousel.attach()` | YES | NO | HIGH | vendor locally later |
| bulma-jumbo-tiny | `https://mslide.bod.nu/bulma/bulma-jumbo-tiny.min.css` | CSS | `index.html`, custom button/text sizing classes | YES | NO | HIGH | vendor locally later |
| Google Fonts preconnect | `https://fonts.googleapis.com`, `https://fonts.gstatic.com` | font/network hint | `index.html` | NO | UNKNOWN | LOW | investigate |
| Google Fonts Roboto | `https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap` | font CSS | `index.html`, `css/custom.css` | YES | NO | MEDIUM | vendor locally later |
| Lineicons | `https://cdn.lineicons.com/4.0/lineicons.css` | CSS/font/icons | `index.html` | UNKNOWN | NO | MEDIUM | investigate |
| Google Fonts Source Sans Pro | `https://fonts.googleapis.com/css?family=Source Sans Pro` | font CSS | `index.html`, Reveal/menu typography | YES | PARTIAL | MEDIUM | vendor locally later |
| Bulma Toast | `https://cdn.jsdelivr.net/npm/bulma-toast@2.1/dist/bulma-toast.min.js` | JS | `index.html`, `plugin/custom.js` `bulmaToast.toast()` | YES | PACKAGE ONLY | HIGH | vendor locally later |
| Animate.css | `https://cdn.jsdelivr.net/npm/animate.css@4.0.0/animate.min.css` | CSS | `index.html`, toast animation defaults | UNKNOWN | NO | MEDIUM | investigate |
| Open Graph URL | `https://mslide.bod.nu/MSlide2/4/` | metadata URL | `index.html` social metadata | NO | NO | LOW | investigate |
| Open Graph/Twitter image | `https://mslide.bod.nu/assets/MSlidebrand/Mslide2-A-Structured-Content-Exploration-Framework.webp` | image metadata | `index.html` social metadata | NO | UNKNOWN | LOW | investigate |
| MSlide cookie policy | `https://mslide.bod.nu/cookie-policy/` | external link | GDPR banner, simplemenu footer | NO | NO | LOW | investigate |
| MSlide homepage | `https://mslide.bod.nu`, `https://mslide.bod.nu//` | external link | footer/logo links | NO | NO | LOW | investigate |
| MSlide3 demo | `https://mslide.bod.nu/MSlide3/4/` | external link | index slide CTA | NO | NO | LOW | investigate |
| YouTube embed demo | `https://www.youtube.com/embed/zSa5xkdLkd0?si=PuUBjnm2HUnH6uq4` | iframe/video URL | preview links in starter/demo sections | NO | NO | MEDIUM | investigate |
| Bulma documentation | `https://bulma.io/documentation/features/color-palettes/`, `https://bulma.io/documentation/elements/button/` | external documentation links | component demo copy | NO | NO | LOW | investigate |
| Bulma Jumbo Tiny documentation | `https://nf-software-inc.github.io/Bulma-Jumbo-Tiny/test/html/pages/helpers/typography.html` | external documentation link | typography component demo copy | NO | NO | LOW | investigate |
| MSlide documentation/terms links | `https://mslide.bod.nu/mslide-2-docs/interactive-catalog-framework/`, `https://mslide.bod.nu/terms-conditions/` | external links | simplemenu footer in `plugin/custom.js` | NO | NO | LOW | investigate |
| Social/feedback links | `https://www.trustpilot.com/review/bod.nu?utm_medium=trustbox&utm_source=TrustBoxReviewCollector`, `https://www.tiktok.com/@mslide.bod`, `https://www.instagram.com/`, `https://www.youtube.com/@MSlideMedia/` | external links | simplemenu footer toolbar | NO | NO | LOW | investigate |
| Remote dummy and modal assets | `https://mslide.bod.nu/assets/dummy/...`, `https://mslide.bod.nu/assets/modals/modal.css` | image/CSS | `css/custom.css`, `assets/modals/*.html` | UNKNOWN | PARTIAL | HIGH | vendor locally later |

## External Findings

- `index.html` loads core visual dependencies from CDNs before `css/custom.css`.
- `plugin/custom.js` uses CDN-provided globals: `bulmaToast` and `bulmaCarousel`.
- `plugin/custom.js` also uses Iconoir classes in generated toolbar HTML.
- `css/custom.css` contains many remote `https://mslide.bod.nu/assets/dummy/...` background images.
- `assets/modals/modal-tabs.html` and `assets/modals/modal-form.html` load Bulma from CDN and remote `https://mslide.bod.nu/assets/modals/modal.css`.
- `assets/modals/modal-tabs.html` also references a remote dummy image: `https://mslide.bod.nu/assets/dummy/Modal3.jpg`.
- Offline mode is not ready. CDN and remote asset packaging should be a future phase.

## Bundled Vendor Dependency Map

Bundled vendor/component groups identified: `18`.

| Path | Dependency/component name | Source/origin if identifiable | Loaded by current runtime | Required for current starter demo | Required for framework release | Risk level | Future action |
|---|---|---|---|---|---|---|---|
| `dist/` | Reveal.js built runtime | Reveal.js 4.4.0 from inherited `package.json` | YES | YES | YES | HIGH | move to vendor later |
| `dist/theme/` | Reveal.js built themes | Reveal.js themes | YES (`white.css`) | YES | YES | HIGH | move to vendor later |
| `js/` | Reveal.js source | Reveal.js source tree | NO | NO | UNKNOWN | MEDIUM | move to vendor later |
| `plugin/highlight/` | Reveal Highlight plugin / highlight.js | Reveal.js plugin, highlight.js dependency | YES | YES | YES | HIGH | move to vendor later |
| `plugin/markdown/` | Reveal Markdown plugin / marked | Reveal.js plugin, marked dependency | YES | YES | YES | HIGH | move to vendor later |
| `plugin/notes/` | Reveal Notes plugin | Reveal.js plugin | YES | YES | YES | HIGH | move to vendor later |
| `plugin/menu/` | Reveal Menu plugin with Font Awesome assets | Third-party Reveal menu plugin | YES | YES | YES | HIGH | move to vendor later |
| `plugin/simplemenu/` | Reveal Simplemenu plugin | Third-party Reveal plugin | YES | YES | YES | HIGH | move to vendor later |
| `plugin/verticator/` | Verticator plugin | Third-party Reveal vertical indicator plugin | YES | YES | YES | HIGH | move to vendor later |
| `plugin/toolbar/` | Reveal Toolbar plugin with Font Awesome assets | Third-party Reveal toolbar plugin | YES, via `dependencies` in `plugin/custom.js` | YES | YES | HIGH | move to vendor later |
| `plugin/math/` | Reveal Math plugin | Reveal.js optional plugin | NO | NO | UNKNOWN | MEDIUM | mark optional later |
| `plugin/search/` | Reveal Search plugin | Reveal.js optional plugin | NO | NO | UNKNOWN | MEDIUM | mark optional later |
| `plugin/zoom/` | Reveal Zoom plugin | Reveal.js optional plugin | NO | NO | UNKNOWN | MEDIUM | mark optional later |
| `plugin/Lightweight-Preloader/` | Lightweight preloader | Third-party preloader library | NO | UNKNOWN | UNKNOWN | MEDIUM | investigate before touching |
| `plugin/nanobar-master/` | Nanobar | Third-party progress/loading library | NO | UNKNOWN | UNKNOWN | MEDIUM | investigate before touching |
| `css/theme/` | Reveal theme source | Reveal.js Sass source | NO | NO | UNKNOWN | MEDIUM | move to vendor later |
| `css/print/` | Reveal print source | Reveal.js Sass source | NO | NO | UNKNOWN | LOW | move to vendor later |
| `package.json`, `package-lock.json`, `gulpfile.js` | npm/build tooling | Reveal.js inherited build metadata | NO for plain runtime, YES for build/dev workflow | NO | UNKNOWN | HIGH | investigate before touching |

## npm and Build Tool Findings

Inherited `package.json` currently identifies the package as `reveal.js` version `4.4.0`. Phase 2 rules say not to change package identity yet.

Declared npm dependency:

- `bulma-toast`

Declared dev/build dependencies include:

- Babel, Rollup, Gulp, Sass, QUnit, Puppeteer test tooling
- `highlight.js`
- `marked`
- `fitty`
- `core-js`

Current local preview does not require npm when using the already-copied built files and serving through Python. Build tooling should stay untouched until Phase 3 or later identity/dependency decisions.

## Dependency Risk Summary

- Highest runtime risk: Bulma, Bulma Carousel, bulma-jumbo-tiny, Bulma Toast, Reveal built runtime, active Reveal plugins.
- Highest packaging risk: inherited Reveal package identity, mixed CDN/runtime dependencies, remote `mslide.bod.nu` dummy assets, modal pages with remote CSS.
- Safe to document now: all dependency findings in this draft.
- Unsafe to move now: `dist/`, `plugin/`, `css/custom.css`, `plugin/custom.js`, `assets/`, `index.html`, package/build files.

