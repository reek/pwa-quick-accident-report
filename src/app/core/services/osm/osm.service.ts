
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { ICoords } from '../geolocation/geolocation.service';

@Injectable({
  providedIn: 'root'
})
export class OsmService {

  private apiEndpoint: string = "https://nominatim.openstreetmap.org"

  constructor(
    private http: HttpClient) {
  }

  public getPlacesByStreet(street: string): Observable<OsmPlace[]> {
    return this.http.get(`${this.apiEndpoint}/?format=json&limit=10&addressdetails=1&street=${street.replace(/ /g, "+")}`)
      .pipe(
        tap((places: any) => console.log('osm street', places)),
        map((places: any) => places.map((place: any) => new OsmPlace(place))))
  }

  public getPlacesByCoords(coords: ICoords): Observable<OsmPlace> {
    return this.http.get(`${this.apiEndpoint}/reverse?format=json&addressdetails=1&zoom=18&lat=${coords.latitude}&lon=${coords.longitude}`)
      .pipe(
        tap((place: any) => console.log('osm reverse', place)),
        map((place: any) => new OsmPlace(place)))
  }

}

export interface IOsmPlace {
  address: string
  street: string
  city: string
  state: string
  postcode: string
  country: string
  longitude: string
  latitude: string
}

export class OsmPlace implements IOsmPlace {
  public address: string
  public street: string
  public city: string
  public state: string
  public postcode: string
  public country: string
  public longitude: string
  public latitude: string

  constructor(data: any) {
    this.fromData(data)
  }

  public fromData(data: any) {
    // doc: https://nominatim.org/release-docs/develop/api/Overview/
    const { address: {
      country, house_number, postcode, road, state, city, town, village
    }, lat: latitude, lon: longitude, display_name: address } = data
    this.address = address || ''
    this.street = `${house_number ? house_number + ', ' : ''}${road}` || ''
    this.city = city || town || village || ''
    this.state = state || ''
    this.postcode = postcode || ''
    this.country = country || ''
    this.longitude = longitude || ''
    this.latitude = latitude || ''
  }

}