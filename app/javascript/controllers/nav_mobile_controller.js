import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navOffCanvas", "canvasOverlay"]

  connect() {
    if (sessionStorage.getItem("navCloseXHasAnimated")) {
      // Mobile nav close burger [𝝣] into [x] animation runs once per session
      this.#blockNavCloseXAnimation()
    }
  }

  show() {
    this.navOffCanvasTarget.classList.add("is-shown")
    this.canvasOverlayTarget.classList.add("is-shown")
    this.#flagNavCloseXAnimation() // idempotent
  }

  hide() {
    this.navOffCanvasTarget.classList.remove("is-shown")
    this.canvasOverlayTarget.classList.remove("is-shown")
    this.#blockNavCloseXAnimation() // idempotent
  }



  // ###########################################################################
  // HELPERS (private to this controller)
  // ---------------------------------------------------------------------------

  #flagNavCloseXAnimation() {
    sessionStorage.setItem("navCloseXHasAnimated", "1")
  }

  #blockNavCloseXAnimation() {
    this.navOffCanvasTarget.classList.add("nav-close-x-has-animated")
  }
}
