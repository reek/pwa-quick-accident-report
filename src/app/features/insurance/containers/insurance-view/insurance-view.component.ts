import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter, tap, switchMap } from 'rxjs/operators';
import { IInsurance } from 'src/app/shared/models/insurance/insurance';
import { InsuranceService } from '../../insurance.service';

@Component({
  selector: 'app-insurance-view',
  templateUrl: './insurance-view.component.html',
  styleUrls: ['./insurance-view.component.scss']
})
export class InsuranceViewComponent implements OnInit {

  public insurance$: Observable<IInsurance>
  private id$: Observable<String>

  constructor(
    private insuranceService: InsuranceService,
    private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.getInsurance()
  }

  public getInsurance() {
    // doc: https://angular.io/api/router/ParamMap
    this.id$ = this.route.paramMap
      .pipe(
        map((paramMap: ParamMap) => paramMap.get('id')),
        tap((id: string) => console.log(`insurance id: ${id}`))
      )

    this.insurance$ = this.id$.pipe(
      // doc: https://www.learnrxjs.io/operators/transformation/switchmap.html
      switchMap((id: string) => this.insuranceService.getInsuranceById(id))
    )
  }

}
