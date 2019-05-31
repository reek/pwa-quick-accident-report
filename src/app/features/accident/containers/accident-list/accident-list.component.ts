import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { AccidentService } from '../../accident.service';
import { IAccident } from 'src/app/shared/models/accident/accident';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accident-list',
  templateUrl: './accident-list.component.html',
  styleUrls: ['./accident-list.component.scss'],
})
export class AccidentListComponent implements OnInit {

  public accidents$: Observable<IAccident[]>

  constructor(
    private alertService: AlertService,
    private accidentService: AccidentService) {
    this.accidents$ = this.accidentService.getUserAccidents()
  }

  public ngOnInit() { }

  async onDelete(id: string) {
    await this.alertService.deleteConfirm(() => this.accidentService.deleteUserAccident(id))
  }

}
