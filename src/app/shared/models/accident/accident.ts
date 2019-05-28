import { IOwmWeather } from 'src/app/core/services/owm/owm.service';
import { IOsmPlace } from 'src/app/core/services/osm/osm.service';
import { IVehicle } from '../vehicle/vehicle';
import { IPerson } from '../person/person';
import { ITakePicture } from '../take-picture/take-picture';
export interface IAccidentLocation {
    date: string
    time: string
    weather: IOwmWeather,
    address: IOsmPlace
}

export interface IAccident {
    _id?: string
    location: IAccidentLocation
    images: ITakePicture[]
    thirdPartyPerson: IPerson
    thirdPartyVehicle: IVehicle
    notes?: string
}

export class Accident { }
