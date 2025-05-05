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

import { Loader as GoogleMapsLoader } from "@googlemaps/js-api-loader";
import { initMap } from "service-area-map"

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

const zipData = [
  {
    zipCode: "53703",  // Madison
    clientCount: 42,
    position: { lat: 43.0731, lng: -89.4012 }
  },
  {
    zipCode: "53202",  // Milwaukee
    clientCount: 103,
    position: { lat: 43.0389, lng: -87.9065 }
  },
  {
    zipCode: "54601",  // La Crosse
    clientCount: 17,
    position: { lat: 43.8014, lng: -91.2396 }
  },
  {
    zipCode: "54481",  // Stevens Point
    clientCount: 29,
    position: { lat: 44.5192, lng: -89.5746 }
  },
  {
    zipCode: "54915",  // Appleton
    clientCount: 55,
    position: { lat: 44.2619, lng: -88.4154 }
  }
]

document.addEventListener("DOMContentLoaded", async () => {

  const mapEl = document.getElementById("servicearea-map")
  if (mapEl) { await initMap(mapEl, GoogleMapsLoader, zipData) }

})
