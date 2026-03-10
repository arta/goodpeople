import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navOffCanvas", "canvasOverlay"]

  toggle() {
    this.navOffCanvasTarget.classList.toggle("is-open")
    this.canvasOverlayTarget.classList.toggle("is-visible")
  }

  close() {
    this.navOffCanvasTarget.classList.remove("is-open")
    this.canvasOverlayTarget.classList.remove("is-visible")
  }
}
