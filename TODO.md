# TODO

## CSS

- Rename `.btn-cta-learn-more` → `.button--cta-learn-more` in `_interactive.scss`, `_dark_mode.scss`, and `app/views/static_pages/_cta_and_contact_info.html.haml` — for consistency with the `button--` naming convention

- Migrate SCSS → plain CSS: convert `colors.scss` variables to CSS custom properties (`--x` / `var(--x)`), remove `@use` imports — eliminates cssbundling, npm CSS build step, and `bin/dev` CSS watching; Propshaft serves plain CSS directly

- During SCSS → CSS migration: audit `rem` values and replace with whole-pixel equivalents (multiples of `0.0625rem`) — e.g. `.7rem → .75rem` (11.2px → 12px) — to eliminate subpixel rendering differences across display contexts

- During SCSS → CSS migration: sweeping convention cleanup across all CSS partials — alphabetical order, shared lists first

- Replace the Stimulus controller `nav_current` with a Rails `nav_link_to` helper using `current_page?` and `class_names(...)`; remove the client-side path comparison / `.current` toggling because Rails already knows the active page at render time. Inspited by Andry Croll's "Use class_names to Conditionally Apply CSS Classes"
email.

```ruby
def nav_link_to(page, path)
  link_to page, path, class: class_names("current": current_page?(path))
end
```

```haml 
%li= nav_link_to "Welcome", intro_path
%li= nav_link_to "Type of Care", type_of_care_path
%li= nav_link_to "Caregivers", caregivers_path
...
```

## Templates

- Evaluate HAML → ERB: convert a few representative views to ERB to feel out legibility trade-offs (explicit `end`-equivalents, nesting clarity) vs. HAML terseness; also consider `herb` gem (rich in-browser markup inspection, ERB-native) as a factor
