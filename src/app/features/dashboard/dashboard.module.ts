import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [
    DashboardPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardPageComponent
      }
    ])
  ]
})
export class DashboardModule { }
