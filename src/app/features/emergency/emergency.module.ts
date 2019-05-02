import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmergencyPageComponent } from './containers/emergency-page/emergency-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    EmergencyPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmergencyPageComponent
      }
    ])
  ]
})
export class EmergencyModule { }
