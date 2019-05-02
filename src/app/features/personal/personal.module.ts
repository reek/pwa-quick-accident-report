import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonalPageComponent } from './containers/personal-page/personal-page.component';
import { PersonalViewComponent } from './containers/personal-view/personal-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PersonalPageComponent,
    PersonalViewComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PersonalPageComponent, children: [
          { path: "view", component: PersonalViewComponent },
          {
            path: '',
            redirectTo: 'view',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ]
})
export class PersonalModule { }
