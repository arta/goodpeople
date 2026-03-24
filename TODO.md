# TODO

## CSS

- Rename `.btn-cta-learn-more` → `.button--cta-learn-more` in `_interactive.scss`, `_dark_mode.scss`, and `app/views/static_pages/_cta_and_contact_info.html.haml` — for consistency with the `button--` naming convention

- Migrate SCSS → plain CSS: convert `colors.scss` variables to CSS custom properties (`--x` / `var(--x)`), remove `@use` imports — eliminates cssbundling, npm CSS build step, and `bin/dev` CSS watching; Propshaft serves plain CSS directly

- During SCSS → CSS migration: audit `rem` values and replace with whole-pixel equivalents (multiples of `0.0625rem`) — e.g. `.7rem → .75rem` (11.2px → 12px) — to eliminate subpixel rendering differences across display contexts

- During SCSS → CSS migration: sweeping convention cleanup across all CSS partials — alphabetical order, shared lists first

## Templates

- Refactor standalone page layouts: `index.html.haml` and `print.html.haml` are full-document views in `static_pages/` but should be proper Rails layouts in `app/views/layouts/` with `layout 'index'` / `layout 'print'` in the controller — makes structure obvious and stylesheet changes only need updating in one place

- Print page content-sharing: interior page content currently lives in partials (e.g. `_intro.html.haml`) so both the individual pages and `print.html.haml` can share it — a side effect of the print page's non-idiomatic structure. If `print` is redesigned properly (e.g. a dedicated print controller action that renders all sections), content can move back into the individual view templates and the `_partial` indirection goes away

- Evaluate HAML → ERB: convert a few representative views to ERB to feel out legibility trade-offs (explicit `end`-equivalents, nesting clarity) vs. HAML terseness; also consider `herb` gem (rich in-browser markup inspection, ERB-native) as a factor
