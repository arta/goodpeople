# CSS Authoring — goodpeople

Read `~/dev-git/css-authoring.md` first for the universal scheme (naming, organization, formatting).

## Project-specific: partial structure

- `_global.scss` — resets and base normalization (box-sizing, body, typography, interactive)
- `_custom.scss` — main stylesheet; Typography, Interactive, Layout, Images sections
- `colors.scss` — design tokens (`@use 'colors' as c;` to consume)
- `_dark_mode.scss` — dark mode overrides
- `_nav.scss` — navigation styles

## Reading existing styles
Before writing CSS for a new or refactored component, read all
partials that may contain relevant rules — for example,
`_custom.scss`, `_dark_mode.scss`, and/or any other component
partials. Rules for the same selector can be spread across files
and media queries and are easy to miss.
