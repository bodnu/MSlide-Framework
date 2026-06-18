# LOCAL_PREVIEW.md

## Local Preview

Do not open `index.html` directly with `file://`.

MSlide2-Framework 4.0.0 should be previewed through a local HTTP server from the repository root:

```bash
cd "MSlide-Framework/MSlide2-Framework"
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/index.html
```

If the layout appears stale after changes, perform a hard refresh in the browser.

Current Phase 2 note: the runtime still depends on internet access for CDN files and remote `mslide.bod.nu` assets. Offline packaging is a future phase and has not been performed.

## Current Runtime Expectations

- Serve from `MSlide-Framework/MSlide2-Framework/`.
- Keep `index.html` at the repository root for now.
- Keep `dist/`, `css/`, `plugin/`, and `assets/` in their current locations for now.
- Do not move runtime files until dependency mapping and path migration are approved.

