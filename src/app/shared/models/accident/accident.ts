import { IAddress } from '../address/address';
import { IPicture } from '../picture/picture';

export interface IAccident {
    _id?: string
    date: string
    time: string
    address: IAddress
    images: IPicture[]
    description?: string
    notes?: string
    contacts?: any
}

export class Accident { }
