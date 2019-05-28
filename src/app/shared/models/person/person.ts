import { IOsmPlace } from 'src/app/core/services/osm/osm.service';

export enum EGender {
  MALE = "male", FEMALE = "female"
}

export interface IPerson {
  _id?: string
  firstName: string
  lastName: string
  birthDate: string // 2018-07-22
  gender: EGender
  phone: string
  email: string
  drivingLicense?: string
  address?: IOsmPlace
}

export class Person implements IPerson {
  public _id?: string
  public firstName: string
  public lastName: string
  public birthDate: string
  public gender: EGender
  public phone: string
  public email: string
  public drivingLicense?: string
  public address?: IOsmPlace

  constructor(data: IPerson) {
    this.fromData(data)
  }

  public fromData(data: IPerson) {
    this._id = data._id || null
    this.firstName = data.firstName || ''
    this.lastName = data.lastName || ''
    this.birthDate = data.birthDate || ''
    this.gender = data.gender || null
    this.phone = data.phone || ''
    this.email = data.email || ''
    this.drivingLicense = data.drivingLicense || null
    this.address = data.address || null
  }

  public toObject(data) {
    return JSON.parse(JSON.stringify(data))
  }

  public getPersonData() {
    const data = this.toObject(this)
    const { _id, address: { _id: _id2, longitude, latitude, ...addr }, ...pers } = data // exclude
    return Object.assign({}, pers, addr)
  }

  public toPrettyText2() {
    let result = ``, obj = this.getPersonData();
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result += `${prop}: ${obj[prop]}\n`;
      }
    }
    return result;
  }

  public toPrettyText() {
    return `
    ${this.firstName} ${this.lastName.toUpperCase()}      
    ${this.email}
    ${this.phone}

    ${this.address.street}
    ${this.address.postcode} ${this.address.city}
    ${this.address.state}
    ${this.address.country}
    `
  }

  public callIt(): void {
    location.href = 'tel:' + this.phone.replace(/\s+/, '')
  }

  public mailIt(): void {
    location.href = 'mailto:' + this.email
  }
}
