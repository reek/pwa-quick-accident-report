import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor/token-interceptor.service';
import { UpdatesNotificationComponent } from './components/updates-notification/updates-notification.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


const COMPONENTS = [UpdatesNotificationComponent]
const MODULES = [HttpClientModule]
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    IonicModule,
    ...MODULES
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class CoreModule { }
