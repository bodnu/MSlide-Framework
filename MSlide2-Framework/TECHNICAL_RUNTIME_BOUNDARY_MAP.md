# Technical Runtime Boundary Map

Date: 2026-06-18

## Scope

This audit maps the runtime, ownership, dependency, and documentation boundaries for `MSlide-Framework/MSlide2-Framework/`.

Audit only. No runtime files were modified.

## Layer Model

### Layer 1: Public Entry Point

The browser-facing starter document.

- `index.html`

### Layer 2: Starter Content

The editable blank starter slide structure and starter-facing page metadata contained in `index.html`.

- Slide sections in `.reveal .slides`
- `data-menu-title`
- `data-menu-img`
- visible starter copy

### Layer 3: MSlide Runtime

MSlide-specific styling and initialization that turns the blank starter into an MSlide² experience.

- `css/custom.css`
- `plugin/custom.js`

### Layer 4: Reveal.js Runtime

Bundled Reveal.js runtime and source tree inherited from Reveal.js.

- `dist/`
- `js/`
- `css/reveal.scss`
- `css/theme/`
- `css/print/`

### Layer 5: Runtime Plugins

Plugins loaded by the starter and plugin-owned support assets.

- `plugin/highlight/`
- `plugin/markdown/`
- `plugin/menu/`
- `plugin/notes/`
- `plugin/simplemenu/`
- `plugin/toolbar/`
- `plugin/verticator/`

### Layer 6: Brand and Starter Assets

Brand, favicon, manifest, and placeholder assets used by the starter.

- `assets/brand/`
- `assets/thumbnails/thumb-dummy.webp`

### Layer 7: Configuration and Manifests

Runtime defaults, constants, PWA metadata, and platform metadata.

- `config.js`
- `constants.js`
- `site.webmanifest`
- `browserconfig.xml`
- `package.json`

### Layer 8: Build System

Build, bundle, compile, and package tooling inherited from the Reveal.js source structure.

- `gulpfile.js`
- `package-lock.json`
- `package.json`
- `css/*.scss`
- `js/`
- plugin source/build metadata where present

### Layer 9: Documentation, Release, and Repository Presentation

Human-facing repository documentation and release planning files.

- `README.md`
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `LICENSE`
- `GITHUB_METADATA.md`
- `GITHUB_PROFILE_PREVIEW.md`
- `RELEASE_PLAN.md`
- `screenshots/`
- phase/report documents

### Layer 10: Archive and Future Extension Areas

Non-public-starter or currently empty areas retained for traceability or future expansion.

- `_archive/`
- `_release/`
- `components/`
- `examples/`
- `layouts/`
- `showcases/`
- `vendor/`

## Ownership Matrix

| Item | Purpose | Owner | Dependency type | Safe to edit? | Risk | Relationship |
|---|---|---|---|---|---|---|
| `index.html` | Public entry point and blank starter content | Starter content | Root document | PUBLIC USER SAFE for slide content; ADVANCED USER for head/scripts | Medium | Depends on CSS, assets, Reveal runtime, plugins, `plugin/custom.js` |
| `css/` | Styles, Sass sources, theme sources | Mixed: MSlide Runtime and Reveal.js Runtime | Runtime styling and build source | ADVANCED USER for `custom.css`; FRAMEWORK MAINTAINER for Sass/theme internals | Medium | Loaded by `index.html`; source for `dist/` when built |
| `css/custom.css` | MSlide-specific presentation UI styling | MSlide Runtime | Runtime stylesheet | ADVANCED USER | Medium | Depends on brand assets and external image URLs; styles plugin and starter UI |
| `css/layout.scss` | Layout Sass source | MSlide Runtime / Build system | Style source | FRAMEWORK MAINTAINER | Medium | May feed future CSS builds |
| `css/modal.css` | Modal-related styling | MSlide Runtime | Optional runtime stylesheet | ADVANCED USER | Low-Medium | Not directly loaded by current blank `index.html` |
| `css/reveal.scss` | Reveal.js core Sass | Reveal.js Runtime | Build source | DO NOT EDIT | High | Source for `dist/reveal.css` |
| `css/theme/` | Reveal.js theme source/templates | Reveal.js Runtime | Build source | DO NOT EDIT | High | Source for `dist/theme/` |
| `css/print/` | Reveal.js print Sass | Reveal.js Runtime | Build source | DO NOT EDIT | Medium | Supports Reveal print/PDF output |
| `dist/` | Bundled Reveal.js runtime CSS/JS | Reveal.js Runtime | Compiled runtime artifact | DO NOT EDIT | High | Loaded directly by `index.html`; generated from `js/` and `css/` |
| `js/` | Reveal.js source files | Reveal.js Runtime | Runtime source/build input | DO NOT EDIT | High | Build input for `dist/reveal.js` and `dist/reveal.esm.js` |
| `plugin/` | Runtime plugin tree | Third-party dependency / MSlide Runtime | Runtime extension layer | FRAMEWORK MAINTAINER | High | Plugins loaded by `index.html` and initialized in `plugin/custom.js` |
| `plugin/custom.js` | MSlide runtime initialization and behavior | MSlide Runtime | Runtime initializer | FRAMEWORK MAINTAINER | High | Calls `Reveal.initialize()`, registers plugins, configures menus/toolbars |
| `plugin/highlight/` | Syntax highlighting plugin/runtime CSS | Reveal.js plugin / third-party dependency | Runtime plugin | DO NOT EDIT | Medium | Loaded by `index.html`; registered by `plugin/custom.js` |
| `plugin/markdown/` | Markdown plugin | Reveal.js plugin | Runtime plugin | DO NOT EDIT | Medium | Loaded by `index.html`; registered by `plugin/custom.js` |
| `plugin/menu/` | Slide menu/navigation plugin and Font Awesome assets | Third-party dependency | Runtime plugin | FRAMEWORK MAINTAINER | High | Loaded by `index.html`; references slide metadata and thumbnails |
| `plugin/notes/` | Speaker notes plugin | Reveal.js plugin | Runtime plugin | DO NOT EDIT | Medium | Loaded by `index.html`; registered by `plugin/custom.js` |
| `plugin/simplemenu/` | Header/footer simple menu plugin | Third-party dependency | Runtime plugin | FRAMEWORK MAINTAINER | High | Configured by `plugin/custom.js`; injects brand/menu UI |
| `plugin/toolbar/` | Toolbar plugin, screenfull helper, Font Awesome assets | Third-party dependency | Runtime plugin dependency | FRAMEWORK MAINTAINER | High | Loaded dynamically from `plugin/custom.js` dependency config |
| `plugin/verticator/` | Vertical navigation indicator plugin | Third-party dependency | Runtime plugin | FRAMEWORK MAINTAINER | Medium-High | CSS loaded by `index.html`; JS registered by `plugin/custom.js` |
| `assets/` | Starter asset root | Brand assets / Starter content | Static assets | ADVANCED USER | Medium | Referenced by HTML, CSS, manifest, menu thumbnails |
| `assets/brand/` | Logo, favicon, manifest, app icon assets | Brand assets | Static assets | FRAMEWORK MAINTAINER | Medium | Used by `index.html`, `css/custom.css`, `plugin/custom.js`, manifests |
| `assets/thumbnails/thumb-dummy.webp` | Blank starter menu thumbnail placeholder | Starter content | Static asset | PUBLIC USER SAFE to replace with same path/format | Low-Medium | Used by `index.html` slide metadata and menu fallback |
| `config.js` | Reveal.js default config source | Configuration / Reveal.js Runtime | Runtime defaults | DO NOT EDIT | High | Imported by Reveal source; may affect global deck behavior when built |
| `constants.js` | Reveal.js selector/regex constants | Configuration / Reveal.js Runtime | Runtime constants | DO NOT EDIT | High | Used by Reveal runtime internals |
| `site.webmanifest` | PWA metadata and app icons | Configuration / Brand assets | Browser metadata | ADVANCED USER | Medium | Referenced by `index.html`; depends on `assets/brand/` icons |
| `browserconfig.xml` | Microsoft tile metadata | Configuration / Brand assets | Browser metadata | ADVANCED USER | Low-Medium | Depends on `assets/brand/android-chrome-192x192.png` |
| `gulpfile.js` | Build/test/dev server tasks | Build system | Build tooling | FRAMEWORK MAINTAINER | Medium-High | Uses package scripts and source trees to produce `dist/` |
| `package.json` | Package metadata and build dependencies | Build system / Configuration | Build metadata | FRAMEWORK MAINTAINER | Medium-High | Defines scripts, dependency graph, license metadata from Reveal.js base |
| `package-lock.json` | Locked npm dependency graph | Build system | Build lockfile | FRAMEWORK MAINTAINER | Medium | Must track `package.json` changes |
| `README.md` | Public repository overview | Documentation | Human documentation | PUBLIC USER SAFE | Low | Describes usage and boundaries |
| `CHANGELOG.md` | Public release history | Documentation | Human documentation | PUBLIC USER SAFE | Low | Documents releases |
| `CONTRIBUTING.md` | Contribution guidance | Documentation | Human documentation | PUBLIC USER SAFE | Low | Defines contribution and preservation principles |
| `LICENSE` | MIT license text | Documentation / Legal | Legal metadata | DO NOT EDIT except license maintenance | High | Governs public usage terms |
| `screenshots/` | Repository screenshot placeholders | Documentation | Presentation assets | PUBLIC USER SAFE | Low | Supports README/GitHub presentation |
| `GITHUB_METADATA.md` | Suggested GitHub repo metadata | Documentation | Release documentation | PUBLIC USER SAFE | Low | Supports GitHub setup |
| `RELEASE_PLAN.md` | Release tag/title/asset notes | Documentation | Release documentation | PUBLIC USER SAFE | Low | Supports GitHub release |
| `_release/` | Built ZIP artifacts | Release artifact storage | Generated/release output | FRAMEWORK MAINTAINER | Medium | Contains public starter ZIPs |
| `_archive/` | Excluded files preserved from cleanup | Archive | Non-runtime historical storage | FRAMEWORK MAINTAINER | Low-Medium | Must not be included in starter ZIP |
| `components/` | Empty future extension area | Unknown / Future extension | Placeholder folder | UNKNOWN; do not rely on yet | Low | No current runtime relationship |
| `examples/` | Empty future extension area | Unknown / Future extension | Placeholder folder | UNKNOWN; do not rely on yet | Low | Excluded from current starter ZIP |
| `layouts/` | Empty future layout pack area | Unknown / Future extension | Placeholder folder | UNKNOWN; do not rely on yet | Low | Excluded from current starter ZIP |
| `showcases/` | Empty future showcase area | Unknown / Future extension | Placeholder folder | UNKNOWN; do not rely on yet | Low | Excluded from current starter ZIP |
| `vendor/` | Empty future/vendor area | Unknown / Future extension | Placeholder folder | UNKNOWN; do not rely on yet | Low | Excluded from current starter ZIP |

## Modification Matrix

| Policy | Items |
|---|---|
| PUBLIC USER SAFE | Slide/content sections in `index.html`, `assets/thumbnails/thumb-dummy.webp`, `README.md`, `CHANGELOG.md`, `CONTRIBUTING.md`, `screenshots/`, GitHub/release planning docs |
| ADVANCED USER | `css/custom.css`, `css/modal.css`, `site.webmanifest`, `browserconfig.xml`, controlled additions under `assets/` |
| FRAMEWORK MAINTAINER | `plugin/custom.js`, `plugin/menu/`, `plugin/simplemenu/`, `plugin/toolbar/`, `plugin/verticator/`, `gulpfile.js`, `package.json`, `package-lock.json`, `_release/`, `_archive/` |
| DO NOT EDIT | `dist/`, `js/`, `config.js`, `constants.js`, `css/reveal.scss`, `css/theme/`, `css/print/`, bundled third-party plugin internals, `LICENSE` legal text except deliberate license maintenance |
| UNKNOWN | Empty future folders: `components/`, `examples/`, `layouts/`, `showcases/`, `vendor/` |

## Dependency Flow

Primary browser load:

```text
Browser
  ↓
index.html
  ↓
CSS layer
  ├── dist/reset.css
  ├── dist/reveal.css
  ├── dist/theme/white.css
  ├── plugin/highlight/monokai.css
  ├── plugin/verticator/verticat/verticator.css
  ├── external CDN CSS
  └── css/custom.css
        ↓
        assets/brand/*
  ↓
HTML starter content
  ├── assets/brand/*
  └── assets/thumbnails/thumb-dummy.webp
  ↓
JavaScript layer
  ├── dist/reveal.js
  ├── plugin/notes/notes.js
  ├── plugin/markdown/markdown.js
  ├── plugin/highlight/highlight.js
  ├── plugin/verticator/verticat/verticator.js
  ├── plugin/menu/menu.js
  ├── plugin/simplemenu/simplemenu.js
  └── plugin/custom.js
        ↓
        Reveal.initialize()
          ↓
          Reveal core runtime
          ↓
          registered plugins
            ├── RevealMenu
            ├── RevealMarkdown
            ├── RevealHighlight
            ├── RevealNotes
            ├── Verticator
            └── Simplemenu
          ↓
          dependency loader
            └── plugin/toolbar/toolbar.js
                  ↓
                  plugin/toolbar/toolbar.css
                  plugin/toolbar/lib/screenfull/screenfull.min.js
```

Metadata load:

```text
index.html
  ├── site.webmanifest
  │     └── assets/brand/android-chrome-*.png
  ├── browserconfig.xml
  │     └── assets/brand/android-chrome-192x192.png
  └── favicon/apple/mask icons
        └── assets/brand/*
```

Build direction:

```text
package.json / package-lock.json
  ↓
gulpfile.js
  ↓
source files
  ├── js/
  ├── css/reveal.scss
  ├── css/theme/
  └── plugin source files where present
  ↓
generated runtime artifacts
  ├── dist/
  └── bundled plugin outputs
```

Important dependency note:

- `index.html` depends on `plugin/custom.js` after all plugin globals are loaded.
- `plugin/custom.js` depends on `Reveal` and plugin globals being present.
- Plugins depend on the Reveal runtime API.
- Brand and thumbnail assets are downstream dependencies; they do not initialize runtime behavior.
- Documentation and release files should not be treated as runtime inputs.

## Risk Levels

| Risk | Meaning | Examples |
|---|---|---|
| Low | Documentation or presentation-only change unlikely to affect runtime | `README.md`, `screenshots/`, GitHub docs |
| Low-Medium | Browser metadata or isolated asset changes; verify paths | `browserconfig.xml`, thumbnail placeholder |
| Medium | Styling, manifest, release artifact, or starter content changes that can break presentation quality | `index.html` content, `css/custom.css`, `site.webmanifest`, `_release/` |
| Medium-High | Build or plugin ownership areas; changes can affect navigation/tooling | `gulpfile.js`, `package.json`, `plugin/menu/`, `plugin/simplemenu/`, `plugin/toolbar/` |
| High | Core runtime, generated bundles, initialization logic, legal/license text | `dist/`, `js/`, `plugin/custom.js`, `config.js`, `constants.js`, `LICENSE` |

## Protected Runtime Boundaries

Treat these as protected unless a dedicated runtime phase is active:

- `dist/`
- `js/`
- `plugin/custom.js`
- `plugin/menu/`
- `plugin/simplemenu/`
- `plugin/toolbar/`
- `plugin/verticator/`
- `config.js`
- `constants.js`
- `css/reveal.scss`
- `css/theme/`
- `css/print/`
- `gulpfile.js`
- `package.json`
- `package-lock.json`

Protected does not mean immutable forever. It means changes require path tracing, localhost verification, and release artifact validation.

## Public User Customization Boundaries

Recommended public-safe customization areas:

- Add/edit slide content inside `index.html`.
- Replace `assets/thumbnails/thumb-dummy.webp` or set per-slide `data-menu-img` paths.
- Add project-specific images under `assets/` with explicit references.
- Add project-specific CSS in `css/custom.css` after understanding existing selectors.
- Update public docs and screenshots.

Advanced customization areas:

- Adjust `site.webmanifest` and `browserconfig.xml` for project identity.
- Extend `css/custom.css` for project themes.
- Add optional modal/content assets if referenced from starter content.

Avoid for public users:

- Editing `dist/`, `js/`, plugin internals, or build metadata.
- Replacing third-party plugin files directly.
- Moving existing runtime paths without migration.

## Unknown Areas Requiring Further Investigation

- `components/`, `examples/`, `layouts/`, `showcases/`, and `vendor/` are currently empty placeholder/future folders in this working tree. Their ownership and public policy should be defined before content is added.
- `css/layout.scss` and `css/modal.css` appear related to framework styling, but their current blank-starter runtime role is limited or indirect.
- Several external CSS/JS dependencies are loaded from CDNs in `index.html`; packaging strategy for offline-first usage remains a future dependency chapter.
- `package.json` still identifies Reveal.js as the base package metadata. Public npm/package identity, if needed, requires a dedicated packaging decision.
- `_archive/` contains excluded internal/demo material and should remain out of public ZIPs; archive retention policy should be documented separately.

## Future Technical Documentation Chapters

Proposed chapter sequence:

1. Getting Started
2. Folder Structure
3. Runtime Architecture
4. Entry Point: `index.html`
5. Slide Structure and Navigation Model
6. CSS System
7. Plugin System
8. Reveal.js Runtime Boundary
9. MSlide Runtime Boundary
10. Asset System
11. Manifest and Branding
12. Configuration Files
13. Build System
14. Runtime Extension
15. Safe Customization
16. Protected Runtime Areas
17. Release Packaging
18. Troubleshooting
19. Advanced Topics
20. Future Layout Packs and Product Variants

## Hierarchy Diagram

```text
MSlide² Framework
│
├── Entry Point
│   └── index.html
│
├── Starter Content
│   └── .reveal .slides
│
├── MSlide Runtime
│   ├── css/custom.css
│   └── plugin/custom.js
│
├── Reveal.js Core
│   ├── dist/
│   ├── js/
│   ├── css/reveal.scss
│   ├── css/theme/
│   └── css/print/
│
├── Runtime Plugins
│   ├── plugin/highlight/
│   ├── plugin/markdown/
│   ├── plugin/menu/
│   ├── plugin/notes/
│   ├── plugin/simplemenu/
│   ├── plugin/toolbar/
│   └── plugin/verticator/
│
├── Brand and Assets
│   ├── assets/brand/
│   └── assets/thumbnails/thumb-dummy.webp
│
├── Configuration
│   ├── config.js
│   ├── constants.js
│   ├── site.webmanifest
│   └── browserconfig.xml
│
├── Build System
│   ├── gulpfile.js
│   ├── package.json
│   └── package-lock.json
│
├── Documentation and Release
│   ├── README.md
│   ├── CHANGELOG.md
│   ├── CONTRIBUTING.md
│   ├── LICENSE
│   ├── screenshots/
│   ├── GITHUB_METADATA.md
│   ├── RELEASE_PLAN.md
│   └── report documents
│
└── Future / Non-Starter Areas
    ├── _archive/
    ├── _release/
    ├── components/
    ├── examples/
    ├── layouts/
    ├── showcases/
    └── vendor/
```

## Final Verdict

TECHNICAL DOCUMENTATION FOUNDATION READY
