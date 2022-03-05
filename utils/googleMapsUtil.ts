import { CONSTS } from "~~/utils/constants";

export namespace googleMapsUtil {
  type GoogleObject =
    | google.maps.Marker
    | google.maps.Polyline
    | google.maps.Polygon;

  export function overlayToGeometry({
    type: type,
    overlay: overlay,
  }): GeoJSON.Geometry {
    let coordinates;
    switch (type) {
      case google.maps.drawing.OverlayType.CIRCLE:
        // TODO
        return null;
      case google.maps.drawing.OverlayType.MARKER:
        const position = overlay.getPosition();
        coordinates = [position.lng(), position.lat()];
        break;
      case google.maps.drawing.OverlayType.POLYGON:
        const pathArray: Array<google.maps.LatLng> = overlay
          .getPath()
          .getArray();
        coordinates = [
          [...pathArray, pathArray[0]].map((latlng) => [
            latlng.lng(),
            latlng.lat(),
          ]),
        ];
        break;
      case google.maps.drawing.OverlayType.POLYLINE:
        coordinates = overlay.map((latlng) => [latlng.lng(), latlng.lat()]);
        break;
      case google.maps.drawing.OverlayType.RECTANGLE:
        // TODO
        return null;
    }
    return {
      type: CONSTS.OVERLAY_TYPE_TO_GEOMETRY_TYPE[type],
      coordinates: coordinates,
    };
  }

  export function getFeatureObjectCenter(
    feature: google.maps.Data.Feature
  ): google.maps.LatLng {
    let count = 0;
    let tmpLat = 0;
    let tmpLng = 0;
    feature.getGeometry().forEachLatLng((latlng) => {
      console.log(latlng);
      count++;
      tmpLat += latlng.lat();
      tmpLng += latlng.lng();
    });
    return new google.maps.LatLng({
      lat: tmpLat / count,
      lng: tmpLng / count,
    });
  }

  /*   export function polylineCoordinatesToGoogleMapPolyline(
    coordinates: GeoJSON.Position[]
  ): GoogleObject {
    return new google.maps.Polyline({
      path: coordinates.map((path) => {
        return { lat: path[1], lng: path[0] };
      }),
    });
  }

  export function polygonCoordinatesToGoogleMapPolygon(
    coordinates: GeoJSON.Position[][]
  ): GoogleObject {
    return new google.maps.Polygon({
      paths: coordinates.map((paths) => {
        return paths.map((path) => {
          return { lat: path[1], lng: path[0] };
        });
      }),
    });
  }

  export function featureToGoogleMapObjects(
    feature: GeoJSON.Feature
  ): Array<GoogleObject> {
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
        this.polylineCoordinatesToGoogleMapPolyline(
          feature.geometry.coordinates
        ),
      ];
    } else if (type === "Polygon") {
      return [
        this.polygonCoordinatesToGoogleMapPolygon(feature.geometry.coordinates),
      ];
    } else if (type === "MultiLineString") {
      return feature.geometry.coordinates.map((polylineCoordinates) => {
        return this.polylineCoordinatesToGoogleMapPolyline(polylineCoordinates);
      });
    } else if (type === "MultiPolygon") {
      return feature.geometry.coordinates.map((polygonCoordinates) => {
        return this.polygonCoordinatesToGoogleMapPolygon(polygonCoordinates);
      });
    } else {
      return null;
    }
  } */
}
