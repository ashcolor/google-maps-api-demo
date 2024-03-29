export namespace CONSTS {
  export const GOOGLE_MAPS_LOADER_DEFAULT_OPTIONS = {
    apiKey: "AIzaSyDXxld2WqZDKvaRE-QBd_wdHThk1arProk",
    version: "weekly",
    libraries: ["drawing", "places"],
  };

  export const GOOGLE_MAPS_MAP_DEFAULT_OPTIONS = {
    center: {
      lat: 35.7,
      lng: 139.77,
    },
    zoom: 13,
  };

  export const GOOGLE_MAPS_DATA_STYLE_DEFAULT_OPTIONS = {
    fillColor: "#0000ff",
    fillOpacity: 0.25,
    strokeOpacity: 0.9,
    strokeColor: "#0000ff",
    strokeWeight: 2.0,
    zIndex: 1,
  };

  export const GOOGLE_MAPS_DEFAULT_PIN_PATH =
    "M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602z";

  export const UNSAVED_FEATURE_ID = -1;
}
