import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccidentPageComponent } from './containers/accident-page/accident-page.component';
import { AccidentListComponent } from './containers/accident-list/accident-list.component';
import { AccidentNewComponent } from './containers/accident-new/accident-new.component';
import { AccidentViewComponent } from './containers/accident-view/accident-view.component';
import { LocationFormComponent } from 'src/app/shared/ui/location-form/location-form.component'
import { NotesFormComponent } from 'src/app/shared/ui/notes-form/notes-form.component';
import { AccidentWhatTodoComponent } from './containers/accident-what-todo/accident-what-todo.component';

@NgModule({
  declarations: [
    AccidentPageComponent,
    AccidentListComponent,
    AccidentNewComponent,
    AccidentViewComponent,
    AccidentWhatTodoComponent,
    LocationFormComponent,
    NotesFormComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccidentPageComponent, children: [
          { path: "", component: AccidentWhatTodoComponent },
          { path: "list", component: AccidentListComponent },
          { path: "new", component: AccidentNewComponent },
          { path: "view/:id", component: AccidentViewComponent },
          {
            path: '',
            redirectTo: 'whattodo',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ]
})
export class AccidentModule { }
