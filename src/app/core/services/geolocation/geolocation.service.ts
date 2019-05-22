import { Injectable } from '@angular/core';
import { Plugins, GeolocationOptions, GeolocationPosition } from '@capacitor/core';
const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  private options: GeolocationOptions = {
    enableHighAccuracy: true
  };

  constructor() { }

  public getCurrentPosition(options?: GeolocationOptions): Promise<GeolocationPosition> {
    return Geolocation.getCurrentPosition(options || this.options);
  }

}
export interface ICoords {
  latitude: number | string
  longitude: number | string
  accuracy?: number | string
  altitude?: number | string
  altitudeAccuracy?: number | string
  heading?: number | string
  speed?: number | string
}
