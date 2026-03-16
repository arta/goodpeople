# CSS Authoring — goodpeople

Read `~/dev-git/css-authoring.md` first for the universal scheme (naming, organization, formatting).

## Project-specific: partial structure

- `_global.scss` — resets and base normalization only (box-sizing, body, img)
- `_typography.scss` — all typography rules, element + component
- `_interactive.scss` — links, buttons, nav interactions
- `_layout.scss` — all layout
- `_images.scss` — SVGs, signatures, image helpers
- `_nav.scss` — nav component styles
- `_nav_animation.scss` — nav animation keyframes and rules
- `_dark_mode.scss` — dark mode overrides (mirrors the section order of the main partials)
- `colors.scss` — design tokens (`@use 'colors' as c;` to consume)

## Reading existing styles
Before writing CSS for a new or refactored component, read all
partials that may contain relevant rules. Rules for the same selector
can be spread across files and are easy to miss — especially
`_dark_mode.scss`, which shadows rules across all partials.
