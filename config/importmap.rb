# Pin npm packages by running ./bin/importmap

pin 'application'

pin "@rails/ujs", to: "@rails--ujs.js" # @7.1.3, see 5-4-25 deb'g note

pin 'jquery' # @3.7.1
pin 'foundation-sites' # @6.9.0
pin "@googlemaps/js-api-loader", to: "@googlemaps--js-api-loader.js" # @1.16.8

pin 'clients-zip-data', to: 'clients-zip-data.js'
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
