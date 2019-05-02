export enum EVehicleType {
  CAR, MOTORBIKE, BIKE, TRUCK, BUS
}
export interface IVehicle {
  _id?: string
  imageUrl?: string
  type: EVehicleType
  make: string
  model: string
  plateNumber: string // No plaques
  registrationNumber: string
  insuranceCompagny: string
  insurancePolicyNumber: string
}