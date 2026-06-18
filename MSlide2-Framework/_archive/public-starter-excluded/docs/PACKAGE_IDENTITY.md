# PACKAGE_IDENTITY.md

## Framework Identity

- Framework name: `MSlide²`
- Repository name: `MSlide2-Framework`
- Version: `4.0.0`
- Primary concept: `Structured Content Exploration Framework`
- Short description: Desktop-first framework for structured content exploration built on Reveal.js and Bulma.

## Purpose

MSlide² provides a reusable foundation for structured, slide-based content exploration. It is intended for catalogs, brochures, documentation, reports, and interactive publications.

The current repository is a dedicated distribution repository. It was created so packaging work can continue independently from the master development source.

## Repository Relationship

`MSlide-Framework` is the future parent distribution architecture.

Planned relationship:

```text
MSlide-Framework/
├── MSlide2-Framework/
└── MSlide3-Framework/
```

`MSlide2-Framework` contains the MSlide² framework distribution.

`MSlide3-Framework` is reserved for the future MSlide³ framework distribution. It is related by product family, but it should remain separate from the MSlide² packaging work.

## Current Maturity

Current maturity: early public distribution preparation.

Confirmed status:

- Bootstrap completed.
- Source copied from `mslide2/4`.
- Visual parity verified.
- Runtime works through localhost.
- Packaging map completed.
- Dependency map completed.
- Runtime boundary map completed.
- Minimal package identity established.
- No restructuring has been performed.
- Protected runtime boundaries remain in place.

## Current Entry Point

Current entry point:

```text
index.html
```

Current preview mode:

```text
localhost
```

Direct `file://` preview is not supported for reliable local use.

## Future Roadmap

Near-term roadmap:

1. Preserve the working runtime while public-facing identity and docs are added.
2. Keep `package.json` unchanged until the inherited Reveal.js package identity is intentionally migrated.
3. Create a safe restructure plan based on the Phase 1 and Phase 2 maps.
4. Separate runtime core, vendor dependencies, starter demo, layout examples, and component examples.
5. Vendor or document CDN dependencies for future offline-ready packaging.
6. Prepare examples and release notes for public GitHub release.

