import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IVehicle } from 'src/app/shared/models/vehicle/vehicle';
import { VehicleService } from '../../vehicle.service';
import { AlertService } from 'src/app/core/services/alert/alert.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  public vehicles$: Observable<IVehicle[]>

  constructor(
    private alertService: AlertService,
    private vehicleService: VehicleService) {
  }

  public ngOnInit() {
    this.vehicles$ = this.vehicleService.getVehicles()
  }

  async onDelete(id: string) {
    await this.alertService.deleteConfirm(() => this.vehicleService.deleteVehicle(id))
  }

}
