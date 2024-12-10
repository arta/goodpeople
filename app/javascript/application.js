// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import jquery from 'jquery'
import Foundation from 'foundation-sites'

window.jQuery = jquery
window.$ = jquery

// $(function () {
//   $(document).foundation();
// })
$(document).foundation()
