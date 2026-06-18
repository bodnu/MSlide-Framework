# VISUAL_PARITY_AUDIT.md

## Source path

`mslide2/4/`

## Distribution path

`MSlide-Framework/MSlide2-Framework/`

## Files compared

- Full source tree file integrity was compared using SHA-256 checksums.
- Source files compared: `314`
- Distribution files compared: `314`
- Distribution-only files intentionally excluded from parity comparison:
  - `BOOTSTRAP_REPORT.md`

Focused files and folders included:

- `index.html`
- `css/custom.css`
- `dist/`
- `plugin/`
- `assets/`
- `site.webmanifest`
- `browserconfig.xml`
- `package.json`

## Differences found

No copied-file differences were found.

`diff -qr mslide2/4 MSlide-Framework/MSlide2-Framework` reported only:

```text
Only in MSlide-Framework/MSlide2-Framework: BOOTSTRAP_REPORT.md
```

The generated checksum manifests for the 314 copied files matched with zero differing lines.

## CSS cascade and load order

The stylesheet order in `index.html` is identical between source and distribution:

1. Iconoir CDN
2. `dist/reset.css`
3. `dist/reveal.css`
4. `dist/theme/white.css`
5. `plugin/highlight/monokai.css`
6. `plugin/verticator/verticat/verticator.css`
7. Bulma CDN
8. Bulma Carousel CDN
9. `https://mslide.bod.nu/bulma/bulma-jumbo-tiny.min.css`
10. `css/custom.css`
11. Google Fonts
12. Lineicons
13. Animate.css

Confirmed:

- `css/custom.css` loads after Bulma.
- `bulma-jumbo-tiny.min.css` loads before `css/custom.css`.
- Reveal CSS loads before `css/custom.css`.
- No local stylesheet path differs between source and distribution.

## Runtime path differences

Searches for these path patterns showed no distribution-only differences:

- `../`
- `/mslide2/`
- `/MSlide2/`
- `https://mslide.bod.nu`
- `file://`
- `assets/`
- `css/`
- `dist/`
- `plugin/`

Absolute and domain-specific paths are present, but they are identical in the source and distribution copies.

Known external/domain-specific runtime references include:

- `https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css`
- `https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css`
- `https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css`
- `https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/js/bulma-carousel.min.js`
- `https://mslide.bod.nu/bulma/bulma-jumbo-tiny.min.css`
- Google Fonts
- Lineicons
- `https://cdn.jsdelivr.net/npm/bulma-toast@2.1/dist/bulma-toast.min.js`
- `https://cdn.jsdelivr.net/npm/animate.css@4.0.0/animate.min.css`

## Dynamic file loading

Additional dynamically inferred local dependencies were inspected:

- `plugin/menu/font-awesome/css/all.css`
- `plugin/menu/font-awesome/webfonts/fa-solid-900.woff2`
- `plugin/menu/font-awesome/webfonts/fa-regular-400.woff2`
- `plugin/menu/font-awesome/webfonts/fa-brands-400.woff2`
- `assets/thumbnails/section-*.png`
- `assets/modals/modal-tabs.html`
- `assets/modals/modal-form.html`

These files exist in the distribution copy and the same paths exist in source.

`plugin/custom.js` initializes:

- `Reveal.initialize`
- `RevealMenu`
- `RevealMarkdown`
- `RevealHighlight`
- `RevealNotes`
- `Verticator`
- `Simplemenu`
- `bulmaToast`
- `bulmaCarousel`

No distribution-only JS path difference was found.

## Console errors found

Browser console capture could not be performed in this environment because no local browser automation runtime is available:

- `node` not found
- `npm` not found
- `playwright` not found
- `puppeteer` not found
- `chromium` / `google-chrome` not found

Static inspection identified likely runtime-sensitive globals:

- `bulmaToast` depends on the Bulma Toast CDN script.
- `bulmaCarousel` depends on the Bulma Carousel CDN script.
- `RevealMenu`, `Verticator`, and `Simplemenu` depend on the local plugin scripts loaded before `plugin/custom.js`.

Because source and distribution are identical, any console error caused by these references should occur in both when launched under the same conditions.

## Network failures found

Distribution local HTTP checks returned `200` for:

- `index.html`
- All audited local CSS files
- All audited local JS files
- Menu Font Awesome CSS
- Menu Font Awesome webfonts
- MSlide brand SVG assets
- Representative thumbnails and images
- Modal HTML files
- `site.webmanifest`
- `browserconfig.xml`

External dependency HEAD checks performed during the local runtime audit returned `HTTP 200` for the tested CDN/domain dependencies.

No distribution-only network failure was found.

## Visual difference classification

Based on file integrity and local network checks, the distribution is not missing:

- Reveal CSS
- Bulma CSS references
- Custom CSS
- Local JS
- Local images/thumbnails
- Local menu/font assets

The reported broken view cannot currently be classified as a distribution parity defect.

Most plausible classes, if the issue is still visible in a browser:

- Wrong launch location
- Browser/network blocking of CDN dependencies
- Browser console error caused by an external dependency not loading
- Cached stale assets
- Difference between opening via `file://` and serving from `MSlide2-Framework/`

## Root cause

No source-versus-distribution parity root cause was found.

The distribution copy matches the source copy for all 314 copied files. The only known distribution-only file is `BOOTSTRAP_REPORT.md`, which is not referenced by runtime HTML, CSS, or JS.

## Fix applied, if any

No runtime fix was applied.

No copied file, local path, stylesheet order, or local runtime dependency was proven wrong in the distribution.

## Verification result

Verified:

- Distribution source parity: passed.
- Focused checksums: passed.
- Full copied-file checksum manifest comparison: passed.
- Distribution local runtime asset HTTP checks: passed.
- Stylesheet order parity: passed.
- Dynamic local dependency presence: passed.

Not verified:

- Actual browser console errors, due to missing local browser automation tooling in this environment.
- Pixel-level visual screenshot comparison, due to missing local browser automation tooling in this environment.

## Verdict

ROOT CAUSE STILL UNKNOWN
