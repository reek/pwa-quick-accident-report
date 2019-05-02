import { Component, OnInit } from '@angular/core';
import { Insurance } from 'src/app/shared/models/insurance/insurance';
import { InsuranceService } from '../../insurance.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.scss']
})
export class InsuranceListComponent implements OnInit {

  public filterTerm: string
  public insurances$: Observable<Insurance[]>

  constructor(
    private insuranceService: InsuranceService) {
    this.insurances$ = this.insuranceService.getInsurances()
  }

  public ngOnInit() { }

  public onSearch(customEvent: CustomEvent) {
    const { detail: { value = null } } = customEvent
    this.filterTerm = value
  }

}
