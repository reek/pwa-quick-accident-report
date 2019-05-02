import { NgModule } from '@angular/core';
import { InsurancePageComponent } from './containers/insurance-page/insurance-page.component';
import { InsuranceListComponent } from './containers/insurance-list/insurance-list.component';
import { InsuranceViewComponent } from './containers/insurance-view/insurance-view.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    InsurancePageComponent,
    InsuranceListComponent,
    InsuranceViewComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: InsurancePageComponent, children: [
          { path: "", component: InsuranceListComponent },
          { path: "view/:id", component: InsuranceViewComponent },
          {
            path: '',
            redirectTo: '',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ]
})
export class InsuranceModule { }
