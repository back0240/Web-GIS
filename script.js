require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "a97807661f1740f187c948edf27fad2a"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
 document.getElementById("satclickButton").addEventListener("click", () => {
    view.map.basemap = "satellite";
  });
 document.getElementById("streetsclickButton").addEventListener("click", () => {
    view.map.basemap = "streets";
  });
  
 document.getElementById("zoomclickButton").addEventListener("click", () => {
  // Longitude, Latitude
  view.center = [-93.16075653803036, 44.95292138254192];
  view.zoom = 17;
});
  });
