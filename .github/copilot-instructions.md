# AI Coding Agent Instructions

This is a Ruby on Rails 7.1 homecare service website showcasing live-in caregivers and companions. It's part of a two-app system - this is the public marketing site, while "thehouse" handles operational business logic.

**Version Currency**: This project maintains current Rails and dependency versions - Rails 7.2 and 8.0 upgrades are planned. Always favor modern Rails patterns and avoid deprecated approaches.

**Dependency Philosophy**: Minimize external dependencies - prefer Rails built-ins over gems, and simple in-house solutions over complex libraries. Only add dependencies when Rails doesn't provide the functionality and the implementation cost (development + maintenance) justifies it.

## Architecture Overview

**Single Controller Pattern**: All pages route through `StaticPagesController` with page-specific methods. The root (`/`) renders `index.html.haml` without layout.

**View Structure**: Each page has both a controller action view (e.g., `caregivers.html.haml`) and a partial (e.g., `_caregivers.html.haml`). The `index.html.haml` is a complete HTML document that includes partials inline.

**Asset Pipeline**: Uses modern Rails approach - `cssbundling-rails` + `importmap-rails` instead of Webpacker. Foundation CSS integrated via npm, not gems (legacy dependency - planned for removal, currently only used for responsive nav).

## Critical Development Workflow

**Start Development Server**:
```bash
bin/dev  # Runs foreman with Procfile.dev (Rails server + CSS watcher)
```

**CSS Compilation**: Uses npm + Sass with Foundation path resolution:
```bash
npm run build:css  # sass --load-path=node_modules
```

**Foundation Integration**:
- Foundation CSS via npm dependency, not foundation-rails gem
- **Legacy dependency**: Foundation is outdated/unmaintained - only kept for responsive nav
- Custom settings in `_settings.scss` and `_settings_overrides.scss`
- Main entry point: `application.scss` imports foundation via `@use "foundation_and_overrides"`
- **Migration target**: Replace Foundation with modern CSS Grid/Flexbox

## JavaScript Patterns

**Importmap Configuration**: Uses importmap-rails with manual pins in `config/importmap.rb`:
- jQuery + Foundation Sites loaded as modules
- Custom maps: `service-area-map.js`, `clients-zip-data.js`
- Rails UJS for interim Rails 8 compatibility

**Foundation Setup**: Side-effect import pattern:
```javascript
import jquery from 'jquery'        // Named import
import 'foundation-sites'          // Side-effect only
window.$ = jquery                  // Global assignment
$(document).foundation()           // Initialize
```

## HAML Conventions

**Layout Strategy**: Most pages use `application.html.haml` layout, but `index` and `print` actions render `layout: false` for complete control.

**Print Pages**: The print route intentionally renders without layout, relying on user agent default print styles rather than custom print layouts.

**Partial Organization**: Views follow `page.html.haml` + `_page.html.haml` pattern where the partial contains the actual content and the page view handles layout/wrapper logic.

## External Dependencies

**Foundation Sites**: Version 6.9.0 via npm with custom Sass configuration requiring `--load-path=node_modules` for imports. **Note**: Legacy dependency - Foundation is largely unmaintained. Currently only used for responsive navigation; planned for replacement with modern CSS.

## File Locations

- Routes: `config/routes.rb` (simple static page routing)
- CSS Entry: `app/assets/stylesheets/application.scss`
- JS Entry: `app/javascript/application.js`
- Views: `app/views/static_pages/` (both pages and partials)
- Foundation Config: `app/assets/stylesheets/_settings.scss`
- Custom Styles: `app/assets/stylesheets/_custom.scss`
- Dark Mode: `app/assets/stylesheets/_dark_mode.scss` (styling present, toggle not yet implemented)
- Maps: `app/javascript/service-area-map.js`, `app/javascript/clients-zip-data.js`
- Git Conventions: `doc/git_commits.md` (detailed commit message standards)

## Git Commit Conventions

**Follow project standards**: Always use the commit message format defined in `doc/git_commits.md` - based on Conventional Commits with project-specific scopes:

- **Format**: `<type>(<scope>): <description>`
- **Common types**: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`, `content`, `config`
- **Project scopes**: `(css)`, `(js)`, `(ruby)`, `(rails)`, `(npm)`, `(deps)`, `(ui)`, `(assets)`
- **Examples**: `fix(css): correct navbar alignment`, `chore(deps): update rails to 7.2`, `content(/testimonials): add new client testimonial`
