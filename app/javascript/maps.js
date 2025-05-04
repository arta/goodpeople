export async function initMap(mapEl, GoogleMapsLoader) {
  const apiKey = document.querySelector("meta[name='gp-gm-api-key']").content

  const loader = new GoogleMapsLoader({
    apiKey,
    version: "beta",   // enable importLibrary()
    libraries: ["core"], // load core for ColorScheme
    loading: "async"   // &loading=async
  })

  const google = await loader.load()
  const { ColorScheme } = await google.maps.importLibrary("core")

  new google.maps.Map(mapEl, {
    center: { lat: 37.8, lng: -96 },
    zoom: 4,
    colorScheme: ColorScheme.FOLLOW_SYSTEM
  })
}
