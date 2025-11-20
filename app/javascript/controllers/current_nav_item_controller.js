import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() { this.highlightCurrentPage() }

  highlightCurrentPage() {
    const currentPath = window.location.pathname //=> "/caregivers"
    const navLinks = this.element.querySelectorAll('a')

    navLinks.forEach(navLink => {
      const linkPath = new URL(navLink.href).pathname //=> "/intro"

      navLink.classList.remove('current') // Reset

      if (linkPath === currentPath) { navLink.classList.add('current') }
    })
  }
}
