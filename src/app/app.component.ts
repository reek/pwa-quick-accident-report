import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NotifyService } from './core/services/notify/notify.service';
import { AuthService } from './features/auth/auth.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment.prod';

// disable debug in production
if (window && env.production) {
  console.log = () => { }
  console.error = () => { }
  console.info = () => { }
  console.warn = () => { }
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {


  public userData$: Observable<any>

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private menuController: MenuController
  ) { }

  public ngOnInit() {
    this.initApp();
    this.userData$ = this.authService.getUserData().pipe(filter(data => data.email))
  }

  public initApp() {
    this.notifyService.howInstallApp()
  }

  public closeMenu() {
    this.menuController.close();
  }

  public onLogout() {
    this.authService.logout()
  }

}
