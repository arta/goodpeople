export async function initMap(mapEl, GoogleMapsLoader, clientsZipData) {
  const apiKey = document.querySelector("meta[name='gp-gm-api-key']").content
  const mapID = document.querySelector("meta[name='gp-gm-map-id']").content

  const loader = new GoogleMapsLoader({
    apiKey,
    version: "beta",   // enable importLibrary()
    libraries: ["core"], // load core for ColorScheme
    loading: "async"   // &loading=async
  })

  const google = await loader.load()
  const { ColorScheme } = await google.maps.importLibrary("core")
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")

  const map = new google.maps.Map(mapEl, {
    center: { lat: 37.8, lng: -96 },
    zoom: 4,
    colorScheme: ColorScheme.FOLLOW_SYSTEM,
    streetViewControl: false, // disable street view & remove Pegman icon
    mapId: mapID // set map ID, mandatory for Advanced Markers
  })

  // Create simple markers for each client zip code
  const markers = clientsZipData.map(zip => {
    // Create simple marker pin
    const markerContent = document.createElement('div');
    markerContent.className = 'client-marker';
    markerContent.style.width = '14px';
    markerContent.style.height = '14px';
    markerContent.style.borderRadius = '50%';
    markerContent.style.backgroundColor = '#4285F4';
    markerContent.style.border = '2px solid white';
    markerContent.style.boxShadow = '0 1px 3px rgba(0,0,0,0.3)';

    // Create the marker
    return new AdvancedMarkerElement({
      map,
      position: zip.position,
      content: markerContent,
      title: zip.city ? `${zip.zipCode}: ${zip.city}, ${zip.state}` : zip.zipCode
    });
  });

  // If using MarkerClusterer:
  // new MarkerClusterer({ map, markers });

  return map;
}
