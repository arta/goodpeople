// Configure your import map in config/importmap.rb.
// Read more: https://github.com/rails/importmap-rails

// Interim measure until Rails 8 native turbo-rails is implemented
// See 5-4-25 deb'g note
import Rails from '@rails/ujs'

// Named import of jQuery module
// We need the jquery reference to assign it to a global window.$ variable
import jquery from 'jquery'

// Side-effect only import of Foundation module
// Foundation attaches its plugins to jQuery: $(document).foundation()
// We don't need exports from foundation-sites, Foundation reference in our code
import 'foundation-sites'

// --- Initialization and global assignments ---

// Start Rails UJS
Rails.start()
window.Rails = Rails

// Make jQuery available globally (as $) for Foundation's & our DOM manipulation
window.$ = jquery

// Initialize all Foundation plugins
$(document).foundation()

// 2025-11-19: Begin Stimulus implementation
import "controllers"
