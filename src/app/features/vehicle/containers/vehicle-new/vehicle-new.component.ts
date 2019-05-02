import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../vehicle.service';
import { IVehicle } from 'src/app/shared/models/vehicle/vehicle';

@Component({
  selector: 'app-vehicle-new',
  templateUrl: './vehicle-new.component.html',
  styleUrls: ['./vehicle-new.component.scss']
})
export class VehicleNewComponent implements OnInit {

  public payload: any[] = []
  public step: number = 1

  constructor(
    private vehicleService: VehicleService) { }

  public ngOnInit() {
  }

  public onNext(data: any): void {
    this.payload.push(data)
    this.step += 1
    console.log('next', data, this.payload)
  }

  public onBack(): void {
    if (this.step > 0)
      this.step -= 1
  }

  public onSave(): void {
    const payload: IVehicle = Object.assign({}, ...this.payload)
    console.log('saving...', payload, this.payload)
    this.vehicleService.newVehicle(payload)
  }

}
