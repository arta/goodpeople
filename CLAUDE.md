# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Ruby on Rails 7.1 application for a healthcare service website. It's a static site with multiple pages showcasing caregivers, services, and contact information.

## Key Technologies

- **Ruby**: 3.4.2
- **Rails**: 7.1.x
- **Database**: PostgreSQL
- **Frontend**: HAML templates with Foundation CSS framework
- **CSS**: Sass/SCSS with dartsass-rails (migrated from sassc)
- **JavaScript**: Importmap-rails with Foundation JS components

## Development Commands

### Server
```bash
# Start development server (preferred - runs Rails + CSS watcher)
bin/dev

# This runs foreman with Procfile.dev which starts:
# - rails server
# - npm run build:css -- --watch (for live CSS compilation)
```

### Asset Compilation
```bash
# Build CSS from Sass
npm run build:css

# Precompile assets for production
rails assets:precompile
```

### Database
```bash
# Create database
rails db:create

# Run migrations
rails db:migrate

# Seed database
rails db:seed
```

### Testing
```bash
# Run tests
rails test

# Run system tests
rails test:system
```

### Bundler
```bash
# Install gems
bundle install

# Clean unused gems
bundle clean --force
```

## Architecture

### Routes and Controllers
- Single controller: `StaticPagesController`
- Routes defined in `config/routes.rb` for static pages: intro, type_of_care, caregivers, procedure, servicearea, cost, testimonials, contactus, print
- Root route points to `static_pages#index`

### Views Structure
- Layout: `app/views/layouts/application.html.haml`
- Pages: `app/views/static_pages/` with HAML templates
- Partials: Header, sections, and components organized as partials

### Styling
- Foundation CSS framework integrated via npm
- Sass files in `app/assets/stylesheets/`
- Main entry point: `application.scss`
- Foundation settings in `_settings.scss` and `_settings_overrides.scss`
- Custom styles in `_custom.scss`
- Dark mode support in `_dark_mode.scss`

### JavaScript
- Importmap-rails for module management
- Foundation JS components loaded via importmap
- Custom JS files: `application.js`, `service-area-map.js`, `clients-zip-data.js`

## Important Files

- `Gemfile` - Ruby dependencies
- `package.json` - Node.js dependencies (Foundation CSS)
- `config/importmap.rb` - JavaScript module definitions
- `Procfile.dev` - Development server configuration
- `app/assets/config/manifest.js` - Asset pipeline manifest

## Development Notes

- CSS compilation requires `--load-path=node_modules` for Foundation imports
- Foundation integrated via npm + importmap (not foundation-rails gem)
- Sass uses `@import` syntax (deprecated warnings expected)
- Assets are built to `app/assets/builds/` and ignored in git
- Uses PostgreSQL in all environments

## Coding Conventions

- Git commit messages: Follow the conventions defined in ~/.gitmessage-conventions.md (read this file when creating commits)

## Service Area Features

The application includes interactive service area mapping with ZIP code data handled by `clients-zip-data.js` and `service-area-map.js`.
