# PHASE_1_PACKAGING_MAP.md

## 1. Executive Summary

MSlide2-Framework 4.0.0 is currently a byte-for-byte runtime copy of `mslide2/4`, plus distribution reports. The repository works locally when served through `localhost`; `file://` is not a reliable preview mode.

This map defines future packaging zones only. No cleanup, deletion, renaming, moving, CDN replacement, or runtime restructuring has been performed.

Verdict: `MORE INVESTIGATION REQUIRED BEFORE RESTRUCTURE`

Reason: the current runtime mixes framework code, demo content, third-party/vendor files, build tooling, modal support, optional plugins, duplicate files, and deployment noise. The safe next step is a documentation and dependency pass before any physical restructure.

## 2. Current Repository Status

- Repository path: `MSlide-Framework/MSlide2-Framework/`
- Framework version: `4.0.0`
- Framework identity: `MSlide²`
- Concept: `Structured Content Exploration Framework`
- Current entry point: `index.html`
- Current runtime initializer: `plugin/custom.js`
- Current local preview mode: serve the repository root through localhost
- Source master path: `mslide2/4/`
- Master source status for this phase: must remain untouched

Current top-level content:

- `index.html`
- `assets/`
- `css/`
- `dist/`
- `js/`
- `plugin/`
- `package.json`
- `package-lock.json`
- `gulpfile.js`
- `site.webmanifest`
- `browserconfig.xml`
- `config.js`
- `constants.js`
- `BOOTSTRAP_REPORT.md`
- `VISUAL_PARITY_AUDIT.md`
- release-noise files such as `.DS_Store` and `sftp-config.json`

## 3. Proposed Package Zones

### 1. ROOT PACKAGE FILES

Future root-level project identity, release, dependency, contribution, and audit files.

Examples:

- `README.md`
- `LICENSE`
- `CHANGELOG.md`
- `DEPENDENCIES.md`
- `CONTRIBUTING.md`
- `BOOTSTRAP_REPORT.md`
- `VISUAL_PARITY_AUDIT.md`
- `PHASE_1_PACKAGING_MAP.md`

### 2. RUNTIME CORE

MSlide-specific reusable runtime files. These are not safe to move until import and runtime paths are planned.

Examples:

- `css/custom.css`
- `plugin/custom.js`
- `assets/brand/`
- `site.webmanifest`
- `browserconfig.xml`

### 3. VENDOR / THIRD-PARTY

Reveal.js runtime/source/build files, bundled plugins, plugin assets, npm/build tooling, and third-party libraries.

Examples:

- `dist/`
- `js/`
- `css/reveal.scss`
- `css/theme/`
- `css/print/`
- `plugin/highlight/`
- `plugin/markdown/`
- `plugin/notes/`
- `plugin/menu/`
- `plugin/simplemenu/`
- `plugin/verticator/`
- `plugin/toolbar/`
- `plugin/math/`
- `plugin/search/`
- `plugin/zoom/`
- `package.json`
- `package-lock.json`
- `gulpfile.js`

### 4. ACTIVE DEMO / STARTER EXAMPLE

Files currently required by the working demo in `index.html`.

Examples:

- `index.html`
- `assets/thumbnails/`
- `assets/modals/`
- `assets/Banner*.jpg`
- `assets/Modal*.jpg`
- `assets/Slider*.jpg`
- `assets/Square*.jpg`
- `assets/Thumb*.jpg`

### 5. FUTURE LAYOUT LIBRARY

Reusable layout examples currently embedded inside `index.html`.

Identified layout sections:

- `Index` / menu title `Index`
- `hero-cover-A-wireframe` / menu title `Hero cover A -Wireframe-`
- `hero-cover-B-wireframe` / menu title `Hero cover B -Wireframe-`
- `hero-cover-c-wireframe` / menu title `Hero cover C -Wireframe-`
- `2rowA-wireframe` / menu title `2 row layout A -Wireframe-`
- `col2-A-wireframe` / menu title `2 col layout A -Wireframe-`
- `two-col-layout-b` / menu title `2 column layout B`
- `three-col-layout-a` / menu title `3 column layout A`
- `four-col-layout-b` / menu title `4 column layout A`

### 6. FUTURE COMPONENT LIBRARY

Reusable component examples currently embedded inside `index.html`.

Identified component sections:

- `colors` / menu title `Colors`
- `building-view` / menu title `Tipography`
- `cta-buttons` / menu title `CTA buttons`
- `building-view-2` / menu title `Element-view`, currently containing price tag examples

Note: `Tipography` appears to be the current menu title spelling in source. Do not rename in Phase 1.

### 7. SHOWCASE CANDIDATES

No showcase/client demo folders are currently inside this distribution repository. Future showcase material should not be mixed into runtime core.

### 8. INTERNAL / RELEASE NOISE

Files unsuitable for public release but not safe to delete in Phase 1.

Examples:

- `.DS_Store`
- `sftp-config.json`
- duplicate `* 2.*` files
- local/editor/deployment configuration if added later

### 9. UNKNOWN / INVESTIGATE

Files that need dependency/path verification before movement.

Examples:

- `config.js`
- `constants.js`
- `css/layout.scss`
- `css/modal.css`
- `plugin/Lightweight-Preloader/`
- `plugin/nanobar-master/`
- optional Reveal plugins not loaded by current `index.html`

## 4. Classification Table

| Current path | Future package zone | Reason | Runtime risk | Recommended future action |
|---|---|---|---|---|
| `BOOTSTRAP_REPORT.md` | ROOT PACKAGE FILES | Distribution bootstrap record | LOW | keep at root |
| `VISUAL_PARITY_AUDIT.md` | ROOT PACKAGE FILES | Source/distribution parity audit | LOW | keep at root |
| `PHASE_1_PACKAGING_MAP.md` | ROOT PACKAGE FILES | This planning artifact | LOW | keep at root |
| `README.md` | ROOT PACKAGE FILES | Needed for public onboarding; not present yet | LOW | keep at root |
| `LICENSE` | ROOT PACKAGE FILES | Needed for public distribution; not present at root yet | LOW | keep at root |
| `CHANGELOG.md` | ROOT PACKAGE FILES | Needed for release history; not present yet | LOW | keep at root |
| `DEPENDENCIES.md` | ROOT PACKAGE FILES | Needed because runtime depends on bundled and CDN libraries; not present yet | LOW | keep at root |
| `CONTRIBUTING.md` | ROOT PACKAGE FILES | Useful for public GitHub workflow; not present at root yet | LOW | keep at root |
| `index.html` | ACTIVE DEMO / STARTER EXAMPLE | Current entry point and starter/demo content container | HIGH | move to starter example later |
| `css/custom.css` | RUNTIME CORE | MSlide-specific stylesheet loaded by current runtime | HIGH | keep in runtime core |
| `plugin/custom.js` | RUNTIME CORE | Initializes MSlide/Reveal runtime and custom interactions | HIGH | keep in runtime core |
| `assets/brand/` | RUNTIME CORE | MSlide logos, app icons, and branding used by current UI/PWA | MEDIUM | keep in runtime core |
| `site.webmanifest` | RUNTIME CORE | PWA manifest referenced by `index.html` | MEDIUM | keep in runtime core |
| `browserconfig.xml` | RUNTIME CORE | Browser/app metadata | LOW | keep in runtime core |
| `assets/thumbnails/` | ACTIVE DEMO / STARTER EXAMPLE | Menu thumbnails used by current `index.html` sections | MEDIUM | move to starter example later |
| `assets/modals/` | ACTIVE DEMO / STARTER EXAMPLE | Demo modal preview HTML referenced by `index.html` | MEDIUM | move to starter example later |
| `assets/Banner*.jpg` | ACTIVE DEMO / STARTER EXAMPLE | Demo visual assets | LOW | move to starter example later |
| `assets/Modal*.jpg` | ACTIVE DEMO / STARTER EXAMPLE | Demo background/carousel/modal images | MEDIUM | move to starter example later |
| `assets/Slider*.jpg` | ACTIVE DEMO / STARTER EXAMPLE | Demo carousel imagery | LOW | move to starter example later |
| `assets/Square*.jpg` | ACTIVE DEMO / STARTER EXAMPLE | Demo component/example imagery | LOW | move to starter example later |
| `assets/Thumb*.jpg` | ACTIVE DEMO / STARTER EXAMPLE | Demo thumbnail/content imagery | LOW | move to starter example later |
| `dist/` | VENDOR / THIRD-PARTY | Bundled Reveal runtime output loaded by `index.html` | HIGH | keep in vendor |
| `dist/theme/` | VENDOR / THIRD-PARTY | Reveal themes loaded or available to menu/theme systems | HIGH | keep in vendor |
| `js/` | VENDOR / THIRD-PARTY | Reveal source files used by build pipeline | HIGH | keep in vendor |
| `css/reveal.scss` | VENDOR / THIRD-PARTY | Reveal core style source | MEDIUM | keep in vendor |
| `css/theme/` | VENDOR / THIRD-PARTY | Reveal theme source files | MEDIUM | keep in vendor |
| `css/print/` | VENDOR / THIRD-PARTY | Reveal print style sources | LOW | keep in vendor |
| `plugin/highlight/` | VENDOR / THIRD-PARTY | Reveal Highlight plugin loaded by runtime | HIGH | keep in vendor |
| `plugin/markdown/` | VENDOR / THIRD-PARTY | Reveal Markdown plugin loaded by runtime | HIGH | keep in vendor |
| `plugin/notes/` | VENDOR / THIRD-PARTY | Reveal Notes plugin loaded by runtime | HIGH | keep in vendor |
| `plugin/menu/` | VENDOR / THIRD-PARTY | Reveal menu plugin loaded by runtime and dynamically loading Font Awesome CSS | HIGH | keep in vendor |
| `plugin/simplemenu/` | VENDOR / THIRD-PARTY | Menu plugin loaded by runtime | HIGH | keep in vendor |
| `plugin/verticator/` | VENDOR / THIRD-PARTY | Vertical navigation plugin loaded by runtime | HIGH | keep in vendor |
| `plugin/toolbar/` | VENDOR / THIRD-PARTY | Toolbar plugin referenced via runtime dependency config | HIGH | keep in vendor |
| `plugin/math/` | VENDOR / THIRD-PARTY | Optional Reveal math plugin; build pipeline knows about it | MEDIUM | keep in vendor |
| `plugin/search/` | VENDOR / THIRD-PARTY | Optional Reveal search plugin; build pipeline knows about it | MEDIUM | keep in vendor |
| `plugin/zoom/` | VENDOR / THIRD-PARTY | Optional Reveal zoom plugin; build pipeline knows about it | MEDIUM | keep in vendor |
| `package.json` | VENDOR / THIRD-PARTY | Current inherited Reveal/npm/build metadata; will need identity work later | HIGH | keep in vendor |
| `package-lock.json` | VENDOR / THIRD-PARTY | npm dependency lockfile | MEDIUM | keep in vendor |
| `gulpfile.js` | VENDOR / THIRD-PARTY | Reveal build/dev server pipeline | MEDIUM | keep in vendor |
| `config.js` | UNKNOWN / INVESTIGATE | Reveal config-like source copy; not directly referenced by current `index.html` | MEDIUM | investigate before touching |
| `constants.js` | UNKNOWN / INVESTIGATE | Constants source copy; not directly referenced by current `index.html` | MEDIUM | investigate before touching |
| `css/layout.scss` | UNKNOWN / INVESTIGATE | Reveal layout source-like file; may feed compiled CSS | MEDIUM | investigate before touching |
| `css/modal.css` | UNKNOWN / INVESTIGATE | Modal styling file exists locally, but current modal HTML references remote `mslide.bod.nu` modal CSS | MEDIUM | investigate before touching |
| `plugin/Lightweight-Preloader/` | UNKNOWN / INVESTIGATE | Bundled preloader plugin/library; current runtime uses custom preloader markup/CSS but direct dependency is unclear | MEDIUM | investigate before touching |
| `plugin/nanobar-master/` | UNKNOWN / INVESTIGATE | Bundled third-party library; not clearly loaded by current `index.html` | MEDIUM | investigate before touching |
| `Index` section in `index.html` | FUTURE LAYOUT LIBRARY | Demo navigation/index slide pattern | MEDIUM | move to layout library later |
| `hero-cover-A-wireframe` section | FUTURE LAYOUT LIBRARY | Hero layout example | MEDIUM | move to layout library later |
| `hero-cover-B-wireframe` section | FUTURE LAYOUT LIBRARY | Hero layout example | MEDIUM | move to layout library later |
| `hero-cover-c-wireframe` section | FUTURE LAYOUT LIBRARY | Hero carousel layout example | MEDIUM | move to layout library later |
| `2rowA-wireframe` section | FUTURE LAYOUT LIBRARY | Two-row layout example | MEDIUM | move to layout library later |
| `col2-A-wireframe` section | FUTURE LAYOUT LIBRARY | Two-column layout example | MEDIUM | move to layout library later |
| `two-col-layout-b` section | FUTURE LAYOUT LIBRARY | Two-column content layout example | MEDIUM | move to layout library later |
| `three-col-layout-a` section | FUTURE LAYOUT LIBRARY | Three-column content layout example | MEDIUM | move to layout library later |
| `four-col-layout-b` section | FUTURE LAYOUT LIBRARY | Four-column content layout example | MEDIUM | move to layout library later |
| `colors` section | FUTURE COMPONENT LIBRARY | Color component/example section | MEDIUM | move to component library later |
| `building-view` section | FUTURE COMPONENT LIBRARY | Typography component/example section | MEDIUM | move to component library later |
| `cta-buttons` section | FUTURE COMPONENT LIBRARY | CTA button component/example section | MEDIUM | move to component library later |
| `building-view-2` section | FUTURE COMPONENT LIBRARY | Price tag/element component examples | MEDIUM | move to component library later |
| `.DS_Store` files | INTERNAL / RELEASE NOISE | macOS metadata | LOW | archive later |
| `sftp-config.json` | INTERNAL / RELEASE NOISE | Deployment configuration, unsuitable for public package | HIGH | archive later |
| duplicate `* 2.*` files | INTERNAL / RELEASE NOISE | Backup/duplicate files across CSS/plugin/font/demo folders | MEDIUM | archive later |

## 5. Proposed Target Structure

Suggested target structure is directionally useful, but should not be applied until Phase 2 planning confirms exact import paths.

```text
MSlide2-Framework/
├── README.md
├── LICENSE
├── CHANGELOG.md
├── DEPENDENCIES.md
├── CONTRIBUTING.md
├── package.json
├── index.html
├── runtime/
│   ├── css/
│   ├── js/
│   ├── plugins/
│   └── assets/
├── vendor/
│   ├── reveal/
│   └── plugins/
├── examples/
│   └── starter/
├── layouts/
├── components/
├── showcases/
├── docs/
└── _archive/
```

Evaluation:

- `runtime/` fits MSlide-specific runtime files, but moving `css/custom.css`, `plugin/custom.js`, and `assets/brand/` will require coordinated path updates.
- `vendor/` fits Reveal and bundled plugins, but the current runtime expects `dist/`, `js/`, and `plugin/` at root.
- `examples/starter/` fits current `index.html` and demo assets, but moving them will affect all relative paths.
- `layouts/` and `components/` fit the embedded examples, but extraction should wait until the starter example is stable.
- `showcases/` should remain empty in this distribution unless public showcase assets are intentionally added later.
- `_archive/` fits `.DS_Store`, duplicate files, old deployment configs, and other noise, but archiving should happen before deletion.
- `docs/` is needed for setup, local serving, runtime architecture, dependency inventory, and public release notes.

## 6. Runtime Files That Must Not Be Touched Yet

These files and folders are runtime-sensitive and must remain in place until Phase 2 includes path-update verification:

- `index.html`
- `css/custom.css`
- `plugin/custom.js`
- `dist/`
- `dist/theme/`
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
- `site.webmanifest`
- `browserconfig.xml`
- `package.json`
- `package-lock.json`
- `gulpfile.js`

## 7. Files Safe To Archive Later

These are not safe to delete now, but are strong archive candidates:

- `.DS_Store`
- `assets/.DS_Store`
- `css/.DS_Store`
- `dist/.DS_Store`
- `js/.DS_Store`
- `plugin/.DS_Store`
- plugin subfolder `.DS_Store` files
- `sftp-config.json`
- duplicate `css/print/* 2.scss`
- duplicate `css/theme/**/* 2.scss`
- duplicate `css/theme/README 2.md`
- duplicate `plugin/Lightweight-Preloader/README 2.md`
- duplicate `plugin/menu/font-awesome/webfonts/* 2.*`
- duplicate `plugin/nanobar-master/demos/demos 2.html`
- duplicate `plugin/nanobar-master/demos/img/rainbow 2.gif`
- duplicate `plugin/notes/speaker-view 2.html`
- duplicate `plugin/toolbar/README 2.md`
- duplicate `plugin/toolbar/bower 2.json`
- duplicate `plugin/toolbar/package 2.json`
- duplicate `plugin/toolbar/font-awesome-5.0.2/webfonts/* 2.*`

Archive before deletion. Verify public release licensing and runtime references before final removal.

## 8. Unknown Files Requiring Investigation

- `config.js`: appears related to Reveal config source, but is not directly loaded by current `index.html`.
- `constants.js`: appears related to Reveal constants, but is not directly loaded by current `index.html`.
- `css/layout.scss`: may be source for compiled Reveal layout CSS.
- `css/modal.css`: local modal CSS exists, while modal HTML currently references remote modal CSS.
- `plugin/Lightweight-Preloader/`: bundled plugin/library, runtime relationship unclear.
- `plugin/nanobar-master/`: third-party progress/loading library, runtime relationship unclear.
- `plugin/math/`, `plugin/search/`, `plugin/zoom/`: optional Reveal plugins not loaded by current starter page but part of build/vendor layer.
- CDN dependencies: must be inventoried before any offline packaging phase.

## 9. Recommended Phase 2 Order

1. Freeze current working runtime as a baseline and document local serving instructions.
2. Add root package docs without moving runtime files: `README.md`, `DEPENDENCIES.md`, `CHANGELOG.md`, `LICENSE`, `CONTRIBUTING.md`.
3. Create a dependency map that separates bundled vendor, CDN dependencies, optional plugins, and MSlide-specific runtime code.
4. Decide whether `package.json` remains inherited vendor metadata or becomes MSlide² package identity.
5. Investigate unknown files and mark each as runtime, vendor, demo, or archive candidate.
6. Create a path migration plan before moving anything into `runtime/`, `vendor/`, `examples/`, `layouts/`, or `components/`.
7. Archive release noise into `_archive/` only after confirming no runtime references.
8. Extract starter example from `index.html` only after runtime path tests are automated.
9. Extract layout and component libraries after the starter example is stable.
10. Re-run local HTTP path checks and visual parity checks after each small move.

## Verdict

`MORE INVESTIGATION REQUIRED BEFORE RESTRUCTURE`

The repository is ready for documentation and dependency mapping, but not yet ready for physical restructuring.
