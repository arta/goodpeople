import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // Receive server-side (ENV var, here) value from/via Stimulus data attribute
  static values = { measurementId: String }

  connect() { this.initializeGoogleTag() }

  initializeGoogleTag() {
    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || []

    // Define gtag function
    function gtag() { dataLayer.push(arguments) }

    // Initialize with current date
    gtag('js', new Date())

    // Configure with measurement ID
    gtag('config', this.measurementIdValue)
  }
}
