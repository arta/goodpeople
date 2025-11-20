import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() { this.adjustButtonVerb() }

  adjustButtonVerb() {
    const actionText = this.element.textContent
    // Does the window object have a property named ontouchstart?
    const actionVerb = 'ontouchstart' in window ? 'Tap' : 'Click'

    this.element.textContent = `${actionVerb} ${actionText}`
  }
}
