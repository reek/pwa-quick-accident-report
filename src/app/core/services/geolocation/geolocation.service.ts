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

  public async getCurrentPositionAsync(options?: GeolocationOptions): Promise<GeolocationPosition> {
    return await this.getCurrentPosition(options || this.options);
  }

}
