# TODO

## CSS

- Rename `.btn-cta-learn-more` → `.button--cta-learn-more` in `_interactive.scss`, `_dark_mode.scss`, and `app/views/static_pages/_cta_and_contact_info.html.haml` — for consistency with the `button--` naming convention

- Migrate SCSS → plain CSS: convert `colors.scss` variables to CSS custom properties (`--x` / `var(--x)`), remove `@use` imports — eliminates cssbundling, npm CSS build step, and `bin/dev` CSS watching; Propshaft serves plain CSS directly

- During SCSS → CSS migration: audit `rem` values and replace with whole-pixel equivalents (multiples of `0.0625rem`) — e.g. `.7rem → .75rem` (11.2px → 12px) — to eliminate subpixel rendering differences across display contexts

- During SCSS → CSS migration: sweeping convention cleanup across all CSS partials — alphabetical order, shared lists first

## Templates

- Evaluate HAML → ERB: convert a few representative views to ERB to feel out legibility trade-offs (explicit `end`-equivalents, nesting clarity) vs. HAML terseness; also consider `herb` gem (rich in-browser markup inspection, ERB-native) as a factor
