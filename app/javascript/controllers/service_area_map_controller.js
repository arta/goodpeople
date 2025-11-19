import { Controller } from "@hotwired/stimulus"
import { Loader } from "@googlemaps/js-api-loader"
import { clientsZipData } from "clients-zip-data"

export default class extends Controller {
  static values = {
    centerLat: { type: Number, default: 37.8 },
    centerLng: { type: Number, default: -96 },
    zoom: { type: Number, default: 4 }
  }

  connect() { this.initializeMap() }

  async initializeMap() {
    const apiKey = document.querySelector("meta[name='gp-gm-api-key']").content
    const mapID = document.querySelector("meta[name='gp-gm-map-id']").content

    const loader = new Loader({
      apiKey,
      version: "beta",      // enable importLibrary()
      libraries: ["core"],  // load core for ColorScheme
      loading: "async"      // &loading=async
    })

    const google = await loader.load()
    const { ColorScheme } = await google.maps.importLibrary("core")
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")

    this.map = new google.maps.Map(this.element, {
      center: { lat: this.centerLatValue, lng: this.centerLngValue },
      zoom: this.zoomValue,
      colorScheme: ColorScheme.FOLLOW_SYSTEM,
      streetViewControl: false, // disable street view & remove Pegman icon
      mapId: mapID              // set map ID, mandatory for Advanced Markers
    })

    // Create simple markers for each client zip code
    this.markers = clientsZipData.map(zip => {
      // Create simple marker pin
      const markerContent = document.createElement('div')
      markerContent.className = 'client-marker'
      markerContent.style.width = '14px'
      markerContent.style.height = '14px'
      markerContent.style.borderRadius = '50%'
      markerContent.style.backgroundColor = '#4285F4'
      markerContent.style.border = '2px solid white'
      markerContent.style.boxShadow = '0 1px 3px rgba(0,0,0,0.3)'

      // Create the marker
      return new AdvancedMarkerElement({
        map: this.map,
        position: zip.position,
        content: markerContent,
        title: zip.city ? `${zip.zipCode}: ${zip.city}, ${zip.state}` : zip.zipCode
      })
    })

    // If using MarkerClusterer:
    // new MarkerClusterer({ map: this.map, markers: this.markers });
  }

  disconnect() {
    // Cleanup markers if needed
    if (this.markers) { this.markers.forEach(marker => marker.map = null) }
  }
}
