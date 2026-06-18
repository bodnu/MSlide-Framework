# Repository Structure

## Copied source location

- Source: `mslide2/4`
- Destination: `MSlide-Framework/MSlide2-Framework`
- Bootstrap type: direct runtime source copy
- Master project status: untouched

## Version number

- Framework version: `4.0.0`

## Framework identity

- Repository name: `MSlide2-Framework`
- Framework name: `MSlide²`
- Primary concept: `Structured Content Exploration Framework`
- Distribution parent: `MSlide-Framework`

## Current entry point

- Current entry point: `index.html`
- Runtime initialization: `plugin/custom.js`
- Primary local runtime bundle: `dist/reveal.js`

## Files copied

- Files copied from source: `314`
- Source files were copied as-is from `mslide2/4`.
- Hidden files, duplicate files, build files, runtime files, and asset files were intentionally preserved.

## Folders copied

- Folders copied from source: `45`
- Top-level copied folders:
  - `assets/`
  - `css/`
  - `dist/`
  - `js/`
  - `plugin/`

## Warnings

- `package.json` still reflects the inherited Reveal.js package identity and build pipeline.
- External CDN dependencies remain referenced by `index.html`.
- `.DS_Store` files are present because this phase preserves the source exactly.
- `sftp-config.json` is present because this phase does not remove deployment-related files.
- Duplicate `* 2.*` files remain present where they existed in the copied source tree.
- Demo content, framework runtime, third-party plugins, and build tooling are still mixed.
- No assumptions have been made about unused files.

## Items intentionally left untouched

- Folder structure
- File names
- Runtime source
- Vendor and third-party files
- Build tools
- Demo assets
- Duplicate files
- Hidden files
- Deployment configuration files
- Existing `package.json` and `package-lock.json`
- Existing `index.html`
- Existing runtime behavior

## Future phases

- Phase 1 — Packaging
- Phase 2 — Identity
- Phase 3 — Documentation
- Phase 4 — Examples
- Phase 5 — Public GitHub Release

## Bootstrap verdict

`MSlide-Framework/MSlide2-Framework` now exists as a safe distribution bootstrap copy of `mslide2/4`.

This repository is ready for independent packaging work, but no cleanup, optimization, restructuring, or public release preparation has been performed yet.
