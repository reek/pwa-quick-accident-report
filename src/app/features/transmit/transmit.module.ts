import { NgModule } from '@angular/core';
import { TransmitPageComponent } from './containers/transmit-page/transmit-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TransmitPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TransmitPageComponent
      }
    ])
  ]
})
export class TransmitModule { }
