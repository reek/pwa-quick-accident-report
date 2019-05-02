import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeedbackPageComponent } from './containers/feedback-page/feedback-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FeedbackPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeedbackPageComponent
      }
    ])
  ]
})
export class FeedbackModule { }
