# RUNTIME_BOUNDARY_MAP.md

## Scope

MSlide2-Framework 4.0.0 Phase 2 runtime boundary map.

This file maps runtime boundaries only. No runtime files have been edited.

## Current Runtime Boundary

The current working runtime boundary is the repository root:

```text
MSlide-Framework/MSlide2-Framework/
```

`index.html` expects these folders and files to remain at root-relative paths:

- `dist/`
- `css/`
- `plugin/`
- `assets/`
- `site.webmanifest`
- `browserconfig.xml`

Current entry point:

- `index.html`

Current MSlide runtime initializer:

- `plugin/custom.js`

Current preview mode:

- local HTTP server from repository root

Unsupported reliable preview mode:

- direct `file://` opening

## MSlide Runtime Core Map

| Path | Purpose | Runtime role | Demo-specific code mixed in | Protected before restructure | Future action |
|---|---|---|---|---|---|
| `css/custom.css` | MSlide visual system, layout overrides, slide/component styling | Core stylesheet loaded after Reveal, Verticator, Bulma, Bulma Carousel, and bulma-jumbo-tiny | YES, includes demo/background classes and remote dummy images | YES | keep protected, split only after path map |
| `plugin/custom.js` | Reveal initialization, plugin registration, preview-link handling, PWA install handling, toast/carousel/GDPR/sidebar behavior | Core runtime initializer | YES, includes menu links, social links, logo HTML, demo carousel/toast behavior | YES | keep protected, separate runtime/demo later |
| `assets/brand/` | MSlide brand assets, app icons, favicon assets, logo SVGs | Core brand/PWA/UI asset layer | PARTIAL, contains presentation-specific logos | YES | keep protected, document brand contract |
| `site.webmanifest` | Web app manifest | PWA/browser metadata referenced by `index.html` | UNKNOWN | YES | keep protected until PWA identity pass |
| `browserconfig.xml` | Microsoft browser tile metadata | Browser metadata | UNKNOWN | YES | keep protected until PWA identity pass |
| `index.html` script and stylesheet order | Defines runtime load order | Coordinates Reveal, plugins, Bulma, custom CSS, and initializer | YES, starter/demo sections embedded directly | YES | keep root until Phase 3/4 plan |

## Active Demo Boundary Map

| Path or section | Usage | Runtime dependency | Future package zone |
|---|---|---|---|
| `index.html` | Current entry point and combined starter/demo deck | YES | starter example |
| GDPR consent banner in `index.html` | Cookie consent UI controlled by `plugin/custom.js` | YES | starter example or runtime option |
| Top/bottom brand/footer markup in `index.html` | Visible MSlide navigation/footer shell | YES | starter example or runtime shell |
| `Index` / menu title `Index` | Start/menu slide | YES | starter example |
| `hero-cover-A-wireframe` / `Hero cover A -Wireframe-` | Layout example | YES | layout library |
| `hero-cover-B-wireframe` / `Hero cover B -Wireframe-` | Layout example | YES | layout library |
| `hero-cover-c-wireframe` / `Hero cover C -Wireframe-` | Carousel hero layout example | YES | layout library |
| `2rowA-wireframe` / `2 row layout A -Wireframe-` | Two-row layout example | YES | layout library |
| `col2-A-wireframe` / `2 col layout A -Wireframe-` | Two-column layout example | YES | layout library |
| `two-col-layout-b` / `2 column layout B` | Two-column content layout example | YES | layout library |
| `three-col-layout-a` / `3 column layout A` | Three-column content layout example | YES | layout library |
| `four-col-layout-b` / `4 column layout A` | Four-column content layout example | YES | layout library |
| `colors` / `Colors` | Color component examples | YES | component library |
| `building-view` / `Tipography` | Typography component examples; current spelling preserved | YES | component library |
| `cta-buttons` / `CTA buttons` | Button component examples | YES | component library |
| `building-view-2` / `Element-view` | Price tag/element component examples | YES | component library |
| `assets/thumbnails/` | Reveal menu thumbnails referenced by `data-menu-img` | YES | starter example |
| `assets/modals/` | Preview modal HTML used by `data-preview-link` | YES | starter example |
| `assets/Banner*.jpg` | Demo image assets | UNKNOWN | starter example |
| `assets/Modal*.jpg` | Demo background/carousel assets referenced by `index.html` | YES | starter example |
| `assets/Slider*.jpg` | Demo carousel/image assets | UNKNOWN | starter example |
| `assets/Square*.jpg` | Demo/component imagery | UNKNOWN | starter example |
| `assets/Thumb*.jpg` | Demo thumbnail/content imagery | UNKNOWN | starter example |
| YouTube preview links | Sample external preview content | NO | starter example or showcase |
| Bulma/Bulma Jumbo Tiny documentation links | Sample documentation links in component slides | NO | component library |
| MSlide3 CTA link | Cross-demo/product link | NO | showcase or archive later |

## Protected Runtime List

Do not move, rename, delete, or rewrite these until dependency mapping is approved and path migration tests exist:

- `index.html`
- `css/custom.css`
- `plugin/custom.js`
- `dist/`
- `dist/reset.css`
- `dist/reveal.css`
- `dist/reveal.js`
- `dist/theme/white.css`
- `plugin/highlight/`
- `plugin/markdown/`
- `plugin/notes/`
- `plugin/menu/`
- `plugin/simplemenu/`
- `plugin/verticator/`
- `plugin/toolbar/`
- `assets/brand/`
- `assets/thumbnails/`
- `assets/modals/`
- `assets/Modal*.jpg`
- `assets/Banner*.jpg`
- `assets/Slider*.jpg`
- `assets/Square*.jpg`
- `assets/Thumb*.jpg`
- `site.webmanifest`
- `browserconfig.xml`
- `package.json`
- `package-lock.json`
- `gulpfile.js`

## Unknowns Requiring Investigation

| Path or dependency | Why unknown | Risk level | Recommendation |
|---|---|---|---|
| `config.js` | Root file not directly loaded by current `index.html`; relationship to Reveal source unclear | MEDIUM | investigate before touching |
| `constants.js` | Root file not directly loaded by current `index.html`; relationship to Reveal source unclear | MEDIUM | investigate before touching |
| `css/layout.scss` | Reveal layout source-like file; may feed compiled CSS | MEDIUM | investigate before touching |
| `css/modal.css` | Local modal CSS exists, but modal HTML currently loads remote modal CSS | MEDIUM | investigate before touching |
| `plugin/Lightweight-Preloader/` | Bundled preloader library not directly loaded by current `index.html` | MEDIUM | investigate before touching |
| `plugin/nanobar-master/` | Bundled loading/progress library not directly loaded by current `index.html` | MEDIUM | investigate before touching |
| `plugin/math/` | Optional Reveal plugin not loaded by starter demo | MEDIUM | mark optional later |
| `plugin/search/` | Optional Reveal plugin not loaded by starter demo | MEDIUM | mark optional later |
| `plugin/zoom/` | Optional Reveal plugin not loaded by starter demo | MEDIUM | mark optional later |
| Remote `mslide.bod.nu/assets/dummy/...` images | Used by CSS, but local equivalents may only partially exist | HIGH | map asset parity before offline packaging |
| Remote modal CSS | Local `css/modal.css` exists but is not used by modal HTML | HIGH | compare before replacement |

## Safe Restructure Recommendation

Do not restructure in Phase 2.

Safest future sequence:

1. Complete external dependency documentation and decide which CDN dependencies must be vendored.
2. Complete bundled vendor documentation and mark required vs optional Reveal/plugins.
3. Freeze and document runtime core contracts: `css/custom.css`, `plugin/custom.js`, `assets/brand/`, manifest files.
4. Define starter demo boundary before moving `index.html` or `assets/`.
5. Extract layout sections only after starter path tests exist.
6. Extract component sections only after layout extraction pattern is proven.
7. Archive release noise after confirming zero runtime references.
8. Resolve unknown files before any deletion or public release cleanup.

## PHASE_2_DEPENDENCY_RUNTIME_SUMMARY

- External dependency count: `22` dependency/link groups, including `11` runtime-critical CSS/JS/font groups.
- Bundled vendor count: `18` vendor/component groups.
- Runtime core files/groups: `css/custom.css`, `plugin/custom.js`, `assets/brand/`, `site.webmanifest`, `browserconfig.xml`, `index.html` load order.
- Active demo files/groups: `index.html`, `assets/thumbnails/`, `assets/modals/`, `assets/Banner*.jpg`, `assets/Modal*.jpg`, `assets/Slider*.jpg`, `assets/Square*.jpg`, `assets/Thumb*.jpg`, embedded layout/component sections.
- CDN risks: Bulma, Bulma Carousel, bulma-jumbo-tiny, Iconoir, Google Fonts, Lineicons, Bulma Toast, Animate.css, remote `mslide.bod.nu` dummy/modal assets.
- Files safe to document now: dependency maps, runtime boundary maps, local preview instructions, audit reports.
- Files unsafe to move now: all protected runtime list items above.
- Unknowns requiring investigation: root `config.js`, root `constants.js`, `css/layout.scss`, `css/modal.css`, `plugin/Lightweight-Preloader/`, `plugin/nanobar-master/`, optional Reveal plugins, remote asset parity.
- Recommended Phase 3: identity and minimal documentation only, without restructuring. Add public-facing docs around local preview, current dependency requirements, package identity, and protected runtime boundaries.

## Verdict

`READY FOR PHASE 3 IDENTITY & MINIMAL DOCS`

Reason: Phase 2 has enough dependency and runtime boundary information to proceed with identity and minimal documentation, as long as Phase 3 does not move runtime files or replace dependencies yet.

