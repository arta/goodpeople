# CSS Authoring — goodpeople

Read `~/dev-git/css-authoring.md` first for the universal scheme (naming, organization, formatting).

## Project-specific: file structure

Each file is a first-class stylesheet linked individually in the layout — no bundler, no build step, no `@import`. Propshaft serves each file directly.

- `colors.css` — design tokens as CSS custom properties; sections mirror the files that consume them (Palette, GLOBAL, INTERACTIVE, LAYOUT, IMAGES)
- `global.css` — resets and base normalization only (box-sizing, body, img)
- `typography.css` — all typography rules, element + component
- `interactive.css` — links, buttons, nav interactions
- `layout.css` — all layout
- `images.css` — SVGs, signatures, image helpers
- `nav.css` — nav component styles
- `nav_animation.css` — nav animation keyframes and rules
- `dark_mode.css` — dark mode overrides (mirrors the section order of the other files)

## Design tokens

Colors live in `colors.css` as CSS custom properties on `:root`. Consume with `var(--token-name)`. No import needed — `colors.css` is linked first in all layouts.

## Reading existing styles

Before writing CSS for a new or refactored component, read all files that may contain relevant rules. Rules for the same selector can be spread across files and are easy to miss — especially `dark_mode.css`, which shadows rules across all other files.
