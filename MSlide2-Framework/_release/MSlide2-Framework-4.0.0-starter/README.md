# MSlide² Framework

MSlide² is a desktop-first framework for structured content exploration built on Reveal.js and Bulma.

It is designed for interactive, slide-based publications where users need to move through structured information rather than read a single long page.

Typical use cases:

- Catalogs
- Brochures
- Documentation
- Reports
- Interactive publications

## Features

- Reveal.js-based navigation and slide structure
- Bulma-based interface styling
- MSlide-specific layout and component styling
- Menu, toolbar, vertical navigation, notes, markdown, and highlight plugin support
- Preview links for modals, embedded pages, and external content
- Starter/demo content for layouts and interface components
- PWA-related metadata and brand assets

## Architecture Overview

Current Phase 3 structure is intentionally unchanged from the bootstrapped runtime copy.

- `index.html` is the current entry point.
- `css/custom.css` contains MSlide-specific runtime and demo styling.
- `plugin/custom.js` initializes Reveal.js, MSlide behavior, plugins, preview links, toasts, carousels, consent UI, and sidebar behavior.
- `dist/` contains the bundled Reveal.js runtime.
- `plugin/` contains Reveal.js plugins and third-party plugin integrations.
- `assets/` contains brand assets, starter/demo images, thumbnails, and modal demo pages.

The runtime currently expects these folders to remain in their existing root-relative locations.

## Quick Start

Do not open `index.html` directly with `file://`.

Serve the project through localhost:

```bash
cd "MSlide-Framework/MSlide2-Framework"
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080/index.html
```

Hard refresh the browser if cached styles or scripts appear stale.

## Folder Overview

- `assets/`: brand assets, demo images, thumbnails, and modal demo pages.
- `css/`: MSlide custom CSS and Reveal source/theme styles.
- `dist/`: built Reveal.js runtime files.
- `js/`: Reveal.js source files.
- `plugin/`: Reveal.js plugins, third-party plugins, and MSlide runtime initializer.
- `package.json`: inherited Reveal.js package/build metadata. This has not yet been changed to MSlide² identity.

## Current Dependency Note

The current runtime still depends on local bundled files and live external CDN/network resources.

Important external dependencies include:

- Iconoir
- Bulma
- Bulma Carousel
- bulma-jumbo-tiny
- Google Fonts
- Lineicons
- Bulma Toast
- Animate.css
- Remote `mslide.bod.nu` assets used by demo styling and modal pages

Offline packaging has not been performed yet.

## Current Limitations

- `file://` preview is not supported for reliable local use.
- Runtime, vendor files, starter demo content, layouts, components, and release noise are still mixed in the same root structure.
- `package.json` still reflects inherited Reveal.js metadata.
- CDN dependencies have not been replaced or vendored locally.
- Demo-specific code is still mixed into `index.html`, `css/custom.css`, and `plugin/custom.js`.
- No physical restructuring has been performed.

## Version Information

- Framework name: `MSlide²`
- Repository: `MSlide2-Framework`
- Version: `4.0.0`
- Primary concept: `Structured Content Exploration Framework`
- Current entry point: `index.html`
- Current preview mode: `localhost`

## Roadmap

- Phase 1: Packaging map
- Phase 2: Dependency and runtime boundary map
- Phase 3: Package identity and minimal public documentation
- Phase 4: Safe restructure planning and execution
- Phase 5: Examples, layout library, and component library extraction
- Phase 6: Public GitHub release preparation

## License Note

A license has not been applied yet. See `LICENSE_RECOMMENDATION.md` for the current recommendation.

## Contribution Note

Contributions should preserve runtime safety. Do not move, rename, delete, or rewrite protected runtime files without path verification and local preview testing.

See `CONTRIBUTING.md`.

