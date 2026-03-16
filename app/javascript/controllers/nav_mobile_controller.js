import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["headerMobile", "navOffCanvas", "canvasOverlay"]

  connect() {
    // Nav animations, open burger [𝝣 MENU] and close [x], run once per session:
    if (this.#navBurgerHasNotAnimated()) { // opt-in
      this.#runNavBurgerAnimation()
    }
    if (this.#navCloseXHasAnimated()) { // opt-out
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

  #navBurgerHasNotAnimated() {
    return this.hasHeaderMobileTarget && !sessionStorage.getItem("navBurgerHasAnimated")
  }

  #navCloseXHasAnimated() {
    return !!sessionStorage.getItem("navCloseXHasAnimated")
  }

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
