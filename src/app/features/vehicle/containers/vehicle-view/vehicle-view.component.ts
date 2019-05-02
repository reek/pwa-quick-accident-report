import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { IVehicle } from 'src/app/shared/models/vehicle/vehicle';
import { VehicleService } from 'src/app/features/vehicle/vehicle.service';
import { NotifyService } from 'src/app/core/services/notify/notify.service';


@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.scss']
})
export class VehicleViewComponent implements OnInit {

  public vehicle$: Observable<IVehicle>
  public vehicleId: string

  public vehicle: IVehicle

  constructor(
    private notifyService: NotifyService,
    private vehicleService: VehicleService,
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
        switchMap((id: string) => this.vehicleService.getVehicle(id))
      )

    this.vehicle$
      .pipe(
        tap(res => console.log(res)))
      .subscribe((vehicle: IVehicle) => {
        this.vehicle = vehicle
      })

  }

  public onSave(vehicle: IVehicle) {
    const payload = Object.assign({}, this.vehicle, vehicle)
    console.log(9, payload)
    this.vehicleService.updateVehicle(payload).subscribe((res: any) => {
      console.log(res)
      if (res.user.ok && res.token)
        this.notifyService.show("Saved 😄")
    })
  }


}
