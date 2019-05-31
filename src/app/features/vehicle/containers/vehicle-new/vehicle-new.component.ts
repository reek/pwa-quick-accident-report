import { Component, OnInit } from '@angular/core';
import { IVehicle } from 'src/app/shared/models/vehicle/vehicle';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-vehicle-new',
  templateUrl: './vehicle-new.component.html',
  styleUrls: ['./vehicle-new.component.scss']
})
export class VehicleNewComponent implements OnInit {

  public payload: any[] = []
  public step: number = 1

  constructor(
    private userService: UserService) { }

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
    // I use array reverse, otherwise imageUrl is null
    const payload: IVehicle = Object.assign({}, ...this.payload.reverse())
    delete payload._id
    console.log('saving...', payload, this.payload)
    this.userService.newUserVehicle(payload)
  }

}
