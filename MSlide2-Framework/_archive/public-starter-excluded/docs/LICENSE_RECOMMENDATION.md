# LICENSE_RECOMMENDATION.md

## Scope

This file recommends a license direction for MSlide² Framework 4.0.0.

No license has been applied yet.

## Options Compared

| License | Commercial usage | Modification | Contribution | Attribution | Notes |
|---|---|---|---|---|---|
| MIT | Allowed | Allowed | Simple and permissive | Copyright/license notice required | Easy for commercial adoption and small teams |
| Apache 2.0 | Allowed | Allowed | Permissive with explicit patent grant | Copyright/license notice required; changed files should be noted | Stronger legal structure for larger organizations |
| GPL | Allowed under GPL terms | Allowed under GPL terms | Contributions remain copyleft | Source sharing obligations apply to derivative distribution | Best when enforcing open-source derivatives is desired |

## Recommendation

Recommended license direction: `MIT`, pending final legal review.

Reasons:

- MSlide² is intended as a reusable framework for catalogs, brochures, documentation, reports, and interactive publications.
- MIT allows commercial use with minimal friction.
- MIT allows modification and redistribution.
- MIT is compatible with a public GitHub release aimed at adoption and experimentation.
- MIT keeps contribution expectations simple.
- MIT requires attribution through preservation of the copyright and license notice.

## Important Notes

- Do not apply a license until third-party dependency licensing has been reviewed.
- Reveal.js is currently inherited in `package.json` as MIT licensed.
- Bundled plugins and assets may have their own licenses.
- Font Awesome assets are bundled inside plugin folders and include license files.
- CDN dependencies and remote assets should be reviewed before final public release.

