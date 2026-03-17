# TODO

## CSS

- Rename `.btn-cta-learn-more` → `.button--cta-learn-more` in `_interactive.scss`, `_dark_mode.scss`, and `app/views/static_pages/_cta_and_contact_info.html.haml` — for consistency with the `button--` naming convention

- Migrate SCSS → plain CSS: convert `colors.scss` variables to CSS custom properties (`--x` / `var(--x)`), remove `@use` imports — eliminates cssbundling, npm CSS build step, and `bin/dev` CSS watching; Propshaft serves plain CSS directly

## Templates

- Evaluate HAML → ERB: convert a few representative views to ERB to feel out legibility trade-offs (explicit `end`-equivalents, nesting clarity) vs. HAML terseness; also consider `herb` gem (rich in-browser markup inspection, ERB-native) as a factor

## Layout

- Investigate removing `.gridfield`: evaluate whether CSS grid on `.canvas` alone can handle mobile-vs-desktop header switching (per device), eliminating the extra wrapper
