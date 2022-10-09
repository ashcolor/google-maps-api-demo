export namespace googleMapsUtil {
  // google.maps.data.Featureの中心点を取得する
  export function getFeatureObjectCenter(feature: google.maps.Data.Feature): google.maps.LatLng {
    let count = 0;
    let tmpLat = 0;
    let tmpLng = 0;
    feature.getGeometry().forEachLatLng((latlng) => {
      count++;
      tmpLat += latlng.lat();
      tmpLng += latlng.lng();
    });
    return new google.maps.LatLng({
      lat: tmpLat / count,
      lng: tmpLng / count,
    });
  }

  // GeoJSONのスタイルプロパティをGoogle Maps API用のスタイルプロパティに変換する
  export function geoJsonStylePropertyToGoogleMapsStyleProperty(properties: Object) {
    const GeoJsonStylePropertyNameToGoogleMapsStylePropertyName = {
      stroke: "strokeColor",
      "stroke-opacity": "strokeOpacity",
      "stroke-width": "strokeWeight",
      fill: "fillColor",
      "fill-opacity": "fillOpacity",
    };
    for (let [key, value] of Object.entries(
      GeoJsonStylePropertyNameToGoogleMapsStylePropertyName
    )) {
      if (properties.hasOwnProperty(key)) {
        properties[value] = properties[key];
        delete properties[key];
      }
    }
    return properties;
  }

  // google.maps.Data.Featureからpropertiesを取り出す
  export function getPropertiesFromFeatureObject(feature: google.maps.Data.Feature) {
    const properties = {};
    feature.forEachProperty((value, key) => {
      properties[key] = value;
    });
    return properties;
  }
}
