# Technical Runtime Boundary Map

## Purpose

This map defines which parts of the MSlide³ public starter are safe for ordinary users to edit and which parts should be treated as framework internals.

## Boundary Summary

| Path | Boundary | Notes |
|------|----------|-------|
| `index.html` | Public User Safe | Starter content lives here. Keep it blank, minimal, vertical, and sequential. |
| `css/` | Advanced User | Public styling can be adjusted, but framework-level CSS should remain stable. |
| `dist/` | Do Not Edit | Compiled runtime output. Replace through the build process, not manual edits. |
| `plugin/` | Framework Maintainer | Runtime plugins should be changed only with compatibility review. |
| `assets/` | Public User Safe | Starter-safe assets only. Avoid product, showcase, and client example material. |
| `js/` | Advanced User | Supporting source files. Runtime behavior changes require testing. |
| `config.js` | Public User Safe | Intended for starter-level configuration. |
| `constants.js` | Framework Maintainer | Shared framework identity and release constants. |
| `gulpfile.js` | Framework Maintainer | Not present yet. If added, it should be treated as build infrastructure. |
| `package.json` | Advanced User | Scripts and metadata can be reviewed, but dependency changes require maintainer approval. |
| `site.webmanifest` | Advanced User | Public app metadata. Keep brand-safe. |
| `browserconfig.xml` | Advanced User | Browser tile metadata. Keep brand-safe. |

## Public User Safe

These files and folders can be edited by users building a project from the starter:

- `index.html`
- `assets/`
- `config.js`

Expected edits:

- Replace starter text
- Add project-safe assets
- Adjust public configuration

Do not add tutorials, showcases, products, or client examples to the public starter.

## Advanced User

These areas can be changed by experienced users who understand the starter runtime:

- `css/`
- `js/`
- `package.json`
- `site.webmanifest`
- `browserconfig.xml`

Expected edits:

- Theme tuning
- Small interaction adjustments
- Local package metadata changes

Dependency replacements and runtime behavior changes should be reviewed before release.

## Framework Maintainer

These areas are maintained as part of the framework:

- `plugin/`
- `constants.js`
- `gulpfile.js` if introduced

Expected edits:

- Runtime plugin maintenance
- Release identity changes
- Build task maintenance

## Do Not Edit

These areas should not be manually edited in a release package:

- `dist/`

Expected edits:

- Generated only from the framework build process
- Replaced during release preparation

## Missing Runtime Notes

The initial audit found no MSlide³ runtime files. The current structure defines the intended public boundary, but the complete runtime still needs to be integrated before a final public GitHub release.
