// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import jquery from 'jquery'
import Foundation from 'foundation-sites'

window.jQuery = jquery
window.$ = jquery

// $(document).foundation()

$(function () {
  // Initialize Foundation
  $(document).foundation();

  // Custom script to add 'current' class to navigation links based on URL
  // https://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/
  // https://css-tricks.com/snippets/jquery/add-active-navigation-class-based-on-url/
  const loc = location.pathname.split("/").pop();
  // console.log("Current location:", loc);
  if (loc) {
    const navLinks = $('nav a[href^="/' + loc + '"]');
    // console.log(
    //   "Navigation links found:", navLinks.length,
    //   "Navigation links:", navLinks
    // );
    navLinks.parent().addClass('current');
  }
})
