import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { IVehicle } from 'src/app/shared/models/vehicle/vehicle';
import { NotifyService } from 'src/app/core/services/notify/notify.service';
import { UserService } from 'src/app/core/services/user/user.service';


@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.scss']
})
export class VehicleViewComponent implements OnInit {

  public vehicle$: Observable<IVehicle>
  public vehicleId: string

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.getVehicle()
  }

  public getVehicle() {
    // doc: https://angular.io/api/router/ParamMap
    this.vehicle$ = this.route.paramMap
      .pipe(
        map((paramMap: ParamMap) => paramMap.get('id')),
        tap((id: string) => console.log(`vehicle id: ${id}`)),
        switchMap((id: string) => this.userService.getUserVehicle(id))
      )
  }

  public onSave(payload: IVehicle) {
    console.log(payload)
    this.userService.updateUserVehicle(payload)
  }

}
