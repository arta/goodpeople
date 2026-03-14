import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navOffCanvas", "canvasOverlay"]

  connect() {
    if (sessionStorage.getItem("navCloseAnimDone")) {
      this.#lockNavCloseX()
    }
  }

  show() {
    this.navOffCanvasTarget.classList.add("is-shown")
    this.canvasOverlayTarget.classList.add("is-shown")
    this.#flagNavCloseAnim()
  }

  hide() {
    this.navOffCanvasTarget.classList.remove("is-shown")
    this.canvasOverlayTarget.classList.remove("is-shown")
    this.#lockNavCloseX()
  }



  // ###########################################################################
  // HELPERS (private to this controller)
  // ---------------------------------------------------------------------------

  // Limit mobile nav close burger [𝝣] into [x] animation to once per session

  #flagNavCloseAnim() {
    sessionStorage.setItem("navCloseAnimDone", "1")
  }

  #lockNavCloseX() {
    this.navOffCanvasTarget.classList.add("nav-close-anim-done")
  }
}
