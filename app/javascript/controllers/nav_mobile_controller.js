import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navOffCanvas", "canvasOverlay"]

  connect() {
    if (sessionStorage.getItem("navCloseAnimDone")) {
      this.navOffCanvasTarget.classList.add("nav-close-anim-done")
    }
  }

  show() {
    this.navOffCanvasTarget.classList.add("is-shown")
    this.canvasOverlayTarget.classList.add("is-shown")
    sessionStorage.setItem("navCloseAnimDone", "1")
  }

  hide() {
    this.navOffCanvasTarget.classList.remove("is-shown")
    this.canvasOverlayTarget.classList.remove("is-shown")
    this.navOffCanvasTarget.classList.add("nav-close-anim-done")
  }
}
