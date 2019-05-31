import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IVehicle } from 'src/app/shared/models/vehicle/vehicle';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  public vehicles$: Observable<IVehicle[]>

  constructor(
    private alertService: AlertService,
    private userService: UserService) {
  }

  public ngOnInit() {
    this.vehicles$ = this.userService.getUserVehicles()
  }

  async onDelete(id: string) {
    await this.alertService.deleteConfirm(() => this.userService.deleteUserVehicle(id))
  }

}
