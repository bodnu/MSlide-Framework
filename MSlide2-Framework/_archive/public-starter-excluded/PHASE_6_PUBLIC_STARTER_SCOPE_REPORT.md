# Phase 6 Public Starter Scope Report

Final verdict: PUBLIC STARTER SCOPE READY

Revision note: the public starter was revised after the initial Phase 6 scope
pass so `index.html` is now a blank version of the existing MSlide² demo shell,
not a separate custom mini-template.

## What Was Kept Public

- `index.html` as the only public starter entry point.
- `assets/brand/` for identity, icons, and manifest images.
- `css/`, `dist/`, `js/`, and `plugin/` runtime/source folders.
- Existing `css/custom.css`, `plugin/custom.js`, and Reveal/plugin loading pattern.
- `README.md`, `CHANGELOG.md`, `CONTRIBUTING.md`.
- `package.json`, `package-lock.json`, `gulpfile.js`.
- `config.js`, `constants.js`, `site.webmanifest`, `browserconfig.xml`.

## What Was Kept Internal

- The previous rich demo was preserved as `index-demo-internal.html`.
- Existing rich demo assets remain in the working repository for internal demo continuity.
- Existing internal docs, archives, release outputs, layout folders, component folders,
  examples, showcases, and vendor material remain outside the public starter entry point.

## What Must Be Excluded From Public ZIP

- `index-demo-internal.html`
- `docs/`
- `_archive/`
- `_release/`
- `vendor/`
- `examples/`
- `layouts/`
- `components/`
- `showcases/`
- All audit and phase report files, including `PHASE_*_REPORT.md`.
- Full demo assets not used by the minimal starter, including root-level demo images
  in `assets/`, `assets/thumbnails/`, and `assets/modals/`.
- Duplicate files.
- Hidden files.
- `sftp-config.json`

## Files Changed

- Renamed `index.html` to `index-demo-internal.html`.
- Created a new minimal public `index.html`.
- Revised `index.html` to preserve the MSlide² demo visual language and runtime
  shell while keeping only two blank content slides.
- Rewrote `README.md` for free starter scope and localhost usage.
- Created `PHASE_6_PUBLIC_STARTER_SCOPE_REPORT.md`.

## Runtime Verification

- Localhost verification performed with `python3 -m http.server`.
- `index.html` returned HTTP 200.
- Required CSS and JS paths returned HTTP 200:
  - `dist/reset.css`
  - `dist/reveal.css`
  - `dist/theme/white.css`
  - `plugin/highlight/monokai.css`
  - `plugin/verticator/verticat/verticator.css`
  - `css/custom.css`
  - `dist/reveal.js`
  - `plugin/notes/notes.js`
  - `plugin/markdown/markdown.js`
  - `plugin/highlight/highlight.js`
  - `plugin/verticator/verticat/verticator.js`
  - `plugin/menu/menu.js`
  - `plugin/simplemenu/simplemenu.js`
  - `plugin/custom.js`
- Brand and manifest paths used by `index.html` returned HTTP 200:
  - `assets/brand/MSlide2.svg`
  - `assets/brand/apple-touch-icon.png`
  - `assets/brand/favicon-32x32.png`
  - `assets/brand/favicon-16x16.png`
  - `site.webmanifest`

## README Changes

- Clarifies that this repository surface is the free starter version.
- States that the starter provides the minimum structure to begin.
- States that full demos, layout packs, component libraries, showcase projects,
  client examples, and production showcase material are not included.
- Reiterates that projects must be served through localhost rather than `file://`.

## Validation Readiness

- The new public `index.html` is written to aim for W3C-valid HTML.
- Avoided `button href`, missing image `alt` attributes, invalid custom attributes,
  unescaped spaces in local URLs, stray closing tags, and invalid comments.
- Removed inline custom starter CSS, tutorial copy, lists, panels, preview links,
  modal examples, carousel examples, price tags, and demo layout/component content.
- The internal demo was not validated or packaged.

## Recommended Next ZIP Rebuild

Rebuild the public starter ZIP from an explicit allowlist rather than copying the
working tree. The next ZIP should include only the public starter files listed in
this report and exclude all internal demo, archive, report, library, showcase,
vendor, duplicate, and hidden material.
