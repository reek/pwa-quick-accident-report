
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OsmService {

  constructor(
    private http: HttpClient) {
  }

  public uniformize(place: any) {

    const { address: {
      country, house_number, postcode, road, state, city, town, village
    }, lat: latitude, lon: longitude, display_name } = place

    return {
      display_name,
      street: `${house_number ? house_number + ', ' : ''}${road}`,
      city: city || town || village,
      state,
      postcode,
      country,
      longitude,
      latitude
    }
  }

  public getPlacesByStreet(street: string): Observable<[]> {
    return this.http.get(`https://nominatim.openstreetmap.org/?format=json&limit=10&addressdetails=1&street=${street.replace(/ /g, "+")}`)
      .pipe(
        tap(_ => console.log(9, _)),
        map((places: any) => places.map((place: any) => this.uniformize(place))))
  }

  public getPlacesByCoords(longitude: number, latitude: number): Observable<{}> {
    return this.http.get(`https://nominatim.openstreetmap.org/reverse?format=json&addressdetails=1&zoom=18&lat=${latitude}&lon=${longitude}`)
      .pipe(
        tap(_ => console.info(8, this.uniformize(_))),
        map((place: any) => this.uniformize(place)))
  }

}


