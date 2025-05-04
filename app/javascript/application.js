// Configure your import map in config/importmap.rb.
// Read more: https://github.com/rails/importmap-rails

// Interim measure until Rails 8 native turbo-rails is implemented
// See 5-4-25 deb'g note
import Rails from '@rails/ujs'
Rails.start()
window.Rails = Rails

// Named import of jQuery module
// We need the jquery reference to assign it to a global $ variable (line 14)
import jquery from 'jquery'

// Side-effect only import of Foundation module
// Foundation attaches its plugins to jQuery (line 17)
// We don't need exports from foundation-sites, Foundation reference in our code
import 'foundation-sites'

// Make jQuery available globally (as $) for Foundation's & our DOM manipulation
window.$ = jquery

// Initialize all Foundation plugins
$(document).foundation()

// Custom script to add 'current' class to navigation links based on URL
// https://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/
// https://css-tricks.com/snippets/jquery/add-active-navigation-class-based-on-url/
const loc = location.pathname.split("/").pop()
// console.log("Current location:", loc)
if (loc) {
  const navLinks = $('nav a[href^="/' + loc + '"]')
  // console.log(
  //   "Navigation links found:", navLinks.length,
  //   "Navigation links:", navLinks
  // );
  navLinks.parent().addClass('current')
}
