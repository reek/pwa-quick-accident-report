import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { VehiclePageComponent } from './containers/vehicle-page/vehicle-page.component';
import { VehicleListComponent } from './containers/vehicle-list/vehicle-list.component';
import { VehicleViewComponent } from './containers/vehicle-view/vehicle-view.component';
import { VehicleNewComponent } from './containers/vehicle-new/vehicle-new.component';
import { VehicleFormComponent } from 'src/app/shared/ui/vehicle-form/vehicle-form.component';

@NgModule({
  declarations: [
    VehiclePageComponent,
    VehicleListComponent,
    VehicleViewComponent,
    VehicleNewComponent,
    VehicleFormComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: VehiclePageComponent, children: [
          { path: "", component: VehicleListComponent },
          { path: "new", component: VehicleNewComponent },
          { path: "view/:id", component: VehicleViewComponent },
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
export class VehicleModule { }
