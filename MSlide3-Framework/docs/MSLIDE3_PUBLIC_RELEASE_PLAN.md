# MSlide3 Public Release Plan

## Architecture Readiness

Status: partially ready.

The public folder structure now exists:

- `assets/`
- `css/`
- `dist/`
- `js/`
- `plugin/`
- `index.html`
- `config.js`
- `constants.js`
- `site.webmanifest`
- `browserconfig.xml`

The starter entry point is present and demonstrates a minimal vertical sequence. The complete MSlide³ runtime is not yet present, and `dist/` remains a placeholder.

## Documentation Readiness

Status: ready for MVP planning.

Prepared documents:

- `README.md`
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `docs/PHASE_1_AUDIT_REPORT.md`
- `docs/TECHNICAL_RUNTIME_BOUNDARY_MAP.md`
- `docs/LICENSE_RECOMMENDATION.md`
- `docs/PACKAGE_IDENTITY.md`

The documentation positions MSlide³ as a Content State Navigation Framework and aligns its public starter philosophy with MSlide².

## Starter Readiness

Status: partially ready.

The starter is:

- Blank
- Minimal
- Vertical
- Sequential
- Scroll-based
- Free of tutorials
- Free of showcases
- Free of products
- Free of client examples

Remaining starter work:

- Integrate the real MSlide³ runtime.
- Verify scroll behavior against the final runtime.
- Add final brand assets and screenshots.

## Cleanup Status

Status: clean in current scope.

Initial audit found no duplicate files, `.DS_Store`, `sftp-config`, or release noise inside `MSlide3-Framework/`.

Prepared:

- `_archive/`
- `_archive/README.md`

No files were deleted.

## Brand Status

Status: placeholder.

Prepared screenshot placeholder inventory:

- `screenshots/mslide3-logo-light.webp`
- `screenshots/mslide3-logo-dark.webp`
- `screenshots/launchpad.webp`
- `screenshots/starter.webp`
- `screenshots/vertical-navigation.webp`
- `screenshots/scroll-sequence.webp`

Final `.webp` image assets still need to be created before public release.

## Ecosystem Links

Included in `README.md`:

- GitHub Organization: https://github.com/bodnu
- MSlide Framework Repository: https://github.com/bodnu/MSlide-Framework
- MSlide² Framework Source: https://github.com/bodnu/MSlide-Framework/tree/main/MSlide2-Framework
- MSlide³ Framework Source: https://github.com/bodnu/MSlide-Framework/tree/main/MSlide3-Framework
- Website: https://mslide.bod.nu/
- MSlide² Documentation: https://mslide.bod.nu/mslide-2-docs/interactive-catalog-framework/
- MSlide³ Documentation: https://mslide.bod.nu/mslide-3-docs/content-state-navigation-framework/
- MSlide² Demo: https://mslide.bod.nu/MSlide2/4/
- MSlide³ Demo: https://mslide.bod.nu/MSlide3/4/
- MSlide for Food Menus: https://mslide.bod.nu/digital-menu-for-restaurants/
- Citroën
- Columbia

The Citroën and Columbia entries need final public URLs before release.

## Release Preparation

Future release target:

- Tag: `v4.0.0`
- Title: `MSlide³ Framework 4.0.0 Starter`
- Asset: `MSlide3-Framework-4.0.0-starter-clean.zip`

Release packaging should exclude:

- `docs/` if internal-only
- `_archive/`
- `.DS_Store`
- `sftp-config`
- release noise
- internal reports
- product or client examples

## Remaining Work

- Integrate the actual MSlide³ runtime into `dist/`, `js/`, `css/`, and `plugin/` as appropriate.
- Decide whether MSlide³ needs a build system such as `gulpfile.js`.
- Generate final screenshot and logo `.webp` assets.
- Confirm public URLs for Citroën and Columbia ecosystem entries.
- Run local preview testing after runtime integration.
- Create the final clean zip asset.
- Tag `v4.0.0` only after runtime verification.

## Final Verdict

MORE FRAMEWORK WORK REQUIRED

MSlide³ is ready as a repository-readiness MVP shell, but it is not yet ready for a public GitHub MVP release until the actual framework runtime and final brand assets are integrated and verified.
