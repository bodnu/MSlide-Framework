# CONTRIBUTING.md

## Contributing

MSlide² Framework 4.0.0 is currently in public distribution preparation.

Contributions should prioritize runtime safety and packaging clarity.

## Issue Reporting

When reporting an issue, include:

- What you expected to happen
- What actually happened
- Browser and operating system
- Whether the project was served through localhost
- Any console or network errors

Do not report `file://` behavior as a supported runtime mode. Use localhost for reliable preview.

## Pull Requests

Before opening a pull request:

- Keep changes focused.
- Avoid unrelated cleanup.
- Do not move, rename, delete, or optimize runtime files unless the task explicitly requires it.
- Verify the project through localhost.
- Document any dependency, path, or runtime behavior changes.

## Documentation Improvements

Documentation-only improvements are welcome when they clarify:

- Local preview
- Runtime boundaries
- Dependency requirements
- Folder purpose
- Starter/demo usage
- Future packaging steps

## Runtime Safety Principles

- Archive before delete.
- Do not assume unused means safe to remove.
- Do not modify protected runtime files without verification.
- Do not replace CDN dependencies without an approved dependency packaging phase.
- Do not restructure folders without path migration tests.
- Keep the master source `mslide2/4` untouched when working inside this distribution repository.

Protected runtime areas currently include:

- `index.html`
- `css/custom.css`
- `plugin/custom.js`
- `dist/`
- `plugin/`
- `assets/`
- `site.webmanifest`
- `browserconfig.xml`
- `package.json`
- `package-lock.json`
- `gulpfile.js`

