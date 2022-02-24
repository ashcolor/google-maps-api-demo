import { CONSTS } from "~~/utils/constants";

export namespace utils {
  export function svgToBase64DataURL(
    size = 24,
    color = "#F00",
    path = CONSTS.GOOGLE_MAPS_DEFAULT_PIN_PATH
  ): any {
    const svg = `<svg width="${size}px" height="${size}px" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="${path}" fill="${color}"/></svg>`;
    return {
      url: `data:image/svg+xml,${encodeURIComponent(svg)}`,
      scaledSize: new google.maps.Size(size, size),
      labelOrigin: new google.maps.Point(12, 8),
    };
  }
}