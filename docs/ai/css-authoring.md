# CSS Authoring — goodpeople

Read `~/Documents/LAYEREDCODE/dev-ai/css-authoring.md` first for the universal scheme (naming, organization, formatting).

## Project-specific: file structure

Each file is a first-class stylesheet linked individually in the layout — no bundler, no build step, no `@import`. Propshaft serves each file directly. CSS files live in `app/assets/stylesheets/` — filenames are self-documenting.

`colors.css` is linked first in all layouts — design tokens are always available, no import needed.

## Reading existing styles

Before writing CSS for a new or refactored component, read all files that may contain relevant rules. Rules for the same selector can be spread across files and are easy to miss — especially `dark_mode.css`, which shadows rules across all other files.
