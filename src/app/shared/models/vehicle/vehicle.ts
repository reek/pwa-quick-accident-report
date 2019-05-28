export enum EVehicleType {
  CAR = "car", MOTORBIKE = "motorbike", BIKE = "bike", TRUCK = "truck", BUS = "bus"
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