import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navOffCanvas", "canvasOverlay"]

  show() {
    this.navOffCanvasTarget.classList.add("is-shown")
    this.canvasOverlayTarget.classList.add("is-shown")
  }

  hide() {
    this.navOffCanvasTarget.classList.remove("is-shown")
    this.canvasOverlayTarget.classList.remove("is-shown")
  }
}
