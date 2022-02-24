export namespace CONSTS {
  export const GOOGLE_MAPS_DEFAULT_OPTIONS = {
    apiKey: "AIzaSyDXxld2WqZDKvaRE-QBd_wdHThk1arProk",
    version: "weekly",
    libraries: ["drawing", "places"],
  };

  export const GOOGLE_MAPS_DEFAULT_MAP_OPTIONS = {
    center: {
      lat: 35.7,
      lng: 139.77,
    },
    zoom: 11,
  };

  export const GOOGLE_MAPS_DEFAULT_MARKER_LABEL = {
    color: "#FFFFFF",
    fontSize: "12px",
  };

  export const GOOGLE_MAPS_DEFAULT_MARKER_ICON = {
    fillColor: "#FF0000",
    fillOpacity: 0.8,
    scale: 12,
    strokeColor: "#FF0000",
    strokeWeight: 1.0,
  };

  export const GOOGLE_MAPS_DEFAULT_PIN_PATH =
    "M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602z";

  export const GOOGLE_MAPS_DEFAULT_POLYGON_OPTIONS = {
    fillColor: "#aaaaaa",
    fillOpacity: 1,
    strokeColor: "#666666",
    strokeWeight: 2,
    zIndex: 1,
  };
}
