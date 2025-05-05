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

  // Initialize MarkerClusterer (you'll need to include this library)
  // This requires adding the MarkerClusterer library to your project
  const markers = clientsZipData.map(zip => {
    // Calculate marker size based on client count (with min/max sizes)
    const baseSize = 20;
    const minSize = 20;
    const maxSize = 40;
    const size = Math.min(maxSize, Math.max(minSize, baseSize + (zip.clientCount / 20)));

    // Create custom HTML for marker with count
    const markerContent = document.createElement('div');
    markerContent.className = 'client-marker';
    markerContent.style.width = `${size}px`;
    markerContent.style.height = `${size}px`;
    markerContent.style.borderRadius = '50%';
    markerContent.style.backgroundColor = '#4285F4';
    markerContent.style.display = 'flex';
    markerContent.style.justifyContent = 'center';
    markerContent.style.alignItems = 'center';
    markerContent.style.color = 'white';
    markerContent.style.fontWeight = 'bold';
    markerContent.innerHTML = zip.clientCount;

    // Create the marker
    return new AdvancedMarkerElement({
      map,
      position: zip.position,
      content: markerContent,
      title: `${zip.zipCode}: ${zip.clientCount} clients`
    });
  });

  // If using MarkerClusterer:
  // new MarkerClusterer({ map, markers });

  return map;
}
