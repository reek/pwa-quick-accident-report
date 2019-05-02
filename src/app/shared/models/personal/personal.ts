import { IAddress } from './../address/address';

export enum EGender {
  MALE, FEMALE
}

export interface IPersonal {
  _id?: string
  firstName: string
  lastName: string
  birthDate: string // 2018-07-22
  gender: EGender
  phoneNumber: string
  email: string
  drivingLicense?: string
  address?: IAddress
}
