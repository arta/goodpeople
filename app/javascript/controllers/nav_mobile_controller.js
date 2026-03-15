import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["headerMobile", "navOffCanvas", "canvasOverlay"]

  connect() {
    if (this.hasHeaderMobileTarget && !sessionStorage.getItem("navBurgerHasAnimated")) {
      // Mobile nav open [𝝣 MENU] burger animation runs once per session
      this.#runNavBurgerAnimation() // opt-in animation
    }

    if (sessionStorage.getItem("navCloseXHasAnimated")) {
      // Mobile nav close burger [𝝣] into [x] animation runs once per session
      this.#blockNavCloseXAnimation() // opt-out animation
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

  #runNavBurgerAnimation() {
    this.headerMobileTarget.classList.add("nav-burger-animates")
    sessionStorage.setItem("navBurgerHasAnimated", "1")
  }

  #flagNavCloseXAnimation() {
    sessionStorage.setItem("navCloseXHasAnimated", "1")
  }

  #blockNavCloseXAnimation() {
    this.navOffCanvasTarget.classList.add("nav-close-x-has-animated")
  }
}
