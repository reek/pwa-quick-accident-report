import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NotifyService } from './core/services/notify/notify.service';
import { AuthService } from './features/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {


  public userData$ : Observable<any>

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private menuController: MenuController
  ) { }

  public ngOnInit() {
    this.initApp();
    this.userData$ = this.authService.getUserData()

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
