# CSS Authoring — goodpeople

Read `~/dev-git/css-authoring.md` first for the universal scheme (naming, organization, formatting).

## Project-specific: partial structure

- `_custom.scss` — main stylesheet; contains Global, Typography, Interactive, Layout, Images, Utilities sections
- `colors.scss` — design tokens (`@use 'colors' as c;` to consume)
- `_dark_mode.scss` — dark mode overrides
- `_navigation.scss` — create this when extracting nav styles from `_custom.scss`

Foundation partials (`_settings.scss`, `_settings_overrides.scss`, `foundation_and_overrides.scss`) are legacy and being replaced. Do not add new rules to Foundation files.

Note: `_custom.scss` is partially aligned with these conventions; apply consistently when touching it.
