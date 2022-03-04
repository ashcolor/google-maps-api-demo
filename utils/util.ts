import { CONSTS } from "~~/utils/constants";

export namespace util {
  export function svgToBase64DataURL(
    size = 36,
    color = "#ff0000",
    path = CONSTS.GOOGLE_MAPS_DEFAULT_PIN_PATH
  ): any {
    const svg = `<svg width="${size}px" height="${size}px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="${path}" fill="${color}"/></svg>`;
    return {
      url: `data:image/svg+xml,${encodeURIComponent(svg)}`,
      scaledSize: new google.maps.Size(size, size),
      labelOrigin: new google.maps.Point(size / 2, size / 3),
    };
  }

  export function featureToGMapObjects(
    feature
  ): Array<google.maps.Marker | google.maps.Polyline | google.maps.Polygon> {
    const type = feature.geometry.type;
    if (type === "Point") {
      return [
        new google.maps.Marker({
          position: new google.maps.LatLng(
            feature.geometry.coordinates[1],
            feature.geometry.coordinates[0]
          ),
        }),
      ];
    } else if (type === "LineString") {
      return [
        new google.maps.Polyline({
          path: feature.geometry.coordinates.map((path) => {
            return { lat: path[1], lng: path[0] };
          }),
        }),
      ];
    } else if (type === "Polygon") {
      return [
        new google.maps.Polygon({
          paths: feature.geometry.coordinates.map((paths) => {
            return paths.map((path) => {
              return { lat: path[1], lng: path[0] };
            });
          }),
        }),
      ];
    } else if (type === "MultiLineString") {
      return feature.geometry.coordinates.map((polylines) => {
        return new google.maps.Polyline({
          path: polylines.map((path) => {
            return { lat: path[1], lng: path[0] };
          }),
        });
      });
    } else if (type === "MultiPolygon") {
      return feature.geometry.coordinates.map((polygons) => {
        return new google.maps.Polygon({
          paths: polygons.map((paths) => {
            return paths.map((path) => {
              return { lat: path[1], lng: path[0] };
            });
          }),
        });
      });
    } else {
      return null;
    }
  }
}
