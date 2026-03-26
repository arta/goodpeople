# TODO

## CSS

- Rename `.btn-cta-learn-more` → `.button--cta-learn-more` in `_interactive.scss`, `_dark_mode.scss`, and `app/views/static_pages/_cta_and_contact_info.html.haml` — for consistency with the `button--` naming convention

- Migrate SCSS → plain CSS: convert `colors.scss` variables to CSS custom properties (`--x` / `var(--x)`), remove `@use` imports — eliminates cssbundling, npm CSS build step, and `bin/dev` CSS watching; Propshaft serves plain CSS directly

- During SCSS → CSS migration: audit `rem` values and replace with whole-pixel equivalents (multiples of `0.0625rem`) — e.g. `.7rem → .75rem` (11.2px → 12px) — to eliminate subpixel rendering differences across display contexts

- During SCSS → CSS migration: sweeping convention cleanup across all CSS partials — alphabetical order, shared lists first

## Templates

- Print page content-sharing: interior page content lives in partials (e.g. `_intro.html.haml`) so both individual pages and `print.html.haml` can share it. The partials are load-bearing: `print.html.haml` renders each section with its own `%h1.h1--print-pg` linked heading (linking back to the individual page — useful online navigation), then renders the partial beneath it. If content moved into view templates, `render template:` would bring each view's own h1, creating a duplicate. Options when revisiting: (a) `content_for(:page_title)` to separate heading from content across all views; (b) CSS suppression of the interior h1 inside `.main--print-pg`; (c) redesign print as a dedicated multi-section action. Not worth the complexity until print is reconsidered more broadly.

- Evaluate HAML → ERB: convert a few representative views to ERB to feel out legibility trade-offs (explicit `end`-equivalents, nesting clarity) vs. HAML terseness; also consider `herb` gem (rich in-browser markup inspection, ERB-native) as a factor
