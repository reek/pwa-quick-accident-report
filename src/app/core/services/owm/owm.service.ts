import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { ICoords } from '../geolocation/geolocation.service';

@Injectable({
  providedIn: 'root'
})
export class OwmService {

  constructor(
    private http: HttpClient) {
  }

  public getWeatherByCoords(coords: ICoords): Observable<OwmWeather> {
    const { longitude, latitude } = coords

    // use backend to skip cors policy and protect the api key
    return this.http.post(`${env.apiEndpoint}/provider/owm`, { longitude, latitude })
      .pipe(
        filter((data: any) => data.weather),
        map((data: any) => new OwmWeather(data)))
  }
}

export interface IOwmWeather {
  icon: string
  forecast: string
  temperature: string
  pressure: string
  humidity: string
  visibility: string
  wind: string
}

export class OwmWeather implements IOwmWeather {
  public icon: string
  public forecast: string
  public temperature: string
  public pressure: string
  public humidity: string
  public visibility: string
  public wind: string

  constructor(data: any) {
    this.fromData(data)
  }

  public fromData(data: any) {
    // doc: https://openweathermap.org/current
    const { weather: [{ icon, description: forecast }], main: { temp: temperature, pressure, humidity }, wind: { speed: wind }, visibility } = data
    this.icon = icon || ''
    this.forecast = forecast || ''
    this.temperature = temperature && temperature + ' °C' || ''
    this.pressure = pressure && pressure + ' hPa' || ''
    this.humidity = humidity && humidity + ' %' || ''
    this.visibility = visibility && visibility / 1000 + ' km' || ''
    this.wind = wind && (wind * 3.6).toFixed(2) + ' km/h' || ''
  }

  public toString(): string {
    return `#${this.temperature} - ${this.forecast}`
  }

  public getIconUrl(): string {
    return `https://openweathermap.org/img/w/${this.icon}.png`
  }

}