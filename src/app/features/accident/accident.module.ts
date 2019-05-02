import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccidentPageComponent } from './containers/accident-page/accident-page.component';
import { AccidentListComponent } from './containers/accident-list/accident-list.component';
import { AccidentNewComponent } from './containers/accident-new/accident-new.component';
import { AccidentViewComponent } from './containers/accident-view/accident-view.component';
import { LocationFormComponent } from 'src/app/shared/ui/location-form/location-form.component'
import { WhatTodoFormComponent } from 'src/app/shared/ui/what-todo-form/what-todo-form.component';
import { InsuranceFormComponent } from 'src/app/shared/ui/insurance-form/insurance-form.component';
import { ThirdPartyFormComponent } from 'src/app/shared/ui/third-party-form/third-party-form.component';

@NgModule({
  declarations: [
    AccidentPageComponent,
    AccidentListComponent,
    AccidentNewComponent,
    AccidentViewComponent,
    WhatTodoFormComponent,
    LocationFormComponent, 
    InsuranceFormComponent, 
    ThirdPartyFormComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccidentPageComponent, children: [
          { path: "list", component: AccidentListComponent },
          { path: "new", component: AccidentNewComponent },
          { path: "view/:id", component: AccidentViewComponent },
          {
            path: '',
            redirectTo: 'new',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ]
})
export class AccidentModule { }
