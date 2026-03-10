// Configure your import map in config/importmap.rb.
// Read more: https://github.com/rails/importmap-rails

// Named import of jQuery module
// We need the jquery reference to assign it to a global window.$ variable
// import jquery from 'jquery'

// Side-effect only import of Foundation module
// Foundation attaches its plugins to jQuery: $(document).foundation()
// We don't need exports from foundation-sites, Foundation reference in our code
// import 'foundation-sites'

// --- Initialization and global assignments ---

// Make jQuery available globally (as $) for Foundation's DOM manipulation
// window.$ = jquery

// Initialize all Foundation plugins
// $(document).foundation()
// Caveat: $(document).foundation() initializes Foundation just once.
// Turbo, by design, swaps pages without a full page reload, so Foundation
// components will not re-init unless we hook into Turbo event(s) turbo:load
// (and turbo:before-cache) to re-init (and clean up) them (respectively)
// after each Turbo visit:
// - Re-init Foundation on each Turbo load:
// document.addEventListener("turbo:load", () => { $(document).foundation() })
// - Prevent duplicate bindings (clean up) before Turbo caches the current page:
// document.addEventListener("turbo:before-cache", () => {
//   $(document).foundation("destroy")
// })

import "@hotwired/turbo-rails"
import "controllers"
