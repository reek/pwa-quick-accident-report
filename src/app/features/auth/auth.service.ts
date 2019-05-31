
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { ILogin, IRegister, IForgotPassword, IResetPassword, IEmail } from 'src/app/shared/models/auth/auth';
import { environment as env } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/core/services/notify/notify.service';
import { Observable, BehaviorSubject, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userLogged: BehaviorSubject<boolean>;
  public userLogged$: Observable<boolean>;
  private userData: BehaviorSubject<{}>;
  public userData$: Observable<{}>;

  constructor(
    @Inject(NotifyService) private notifyService: NotifyService,
    private http: HttpClient,
    private router: Router) {
    this.userLogged = new BehaviorSubject(false);
    this.userLogged$ = this.userLogged.asObservable();
    this.userData = new BehaviorSubject({});
    this.userData$ = this.userData.asObservable();
  }

  public isLogged(): Observable<boolean> {
    return this.http.get(`${env.apiEndpoint}/users`)
      .pipe(
        map((res: any) => {
          if (res.user && res.token) {
            this.userData.next(res.user)
            this.userLogged.next(true)
            return true
          } else {
            this.userLogged.next(false)
            return false
          }
        }),
        catchError((err: any) => (console.log("isLogged", err), of(false)))
      )
  }

  public logout() {
    localStorage.setItem(env.authTokenStorageKey, null)
    this.userLogged.next(false)
    this.userData.next({})
    this.router.navigateByUrl("/auth/login")
  }

  public login(payload: ILogin) {
    return this.http.post(`${env.apiEndpoint}/auth/login`, payload)
      .pipe(
        tap((res: any) => {
          if (res.user && res.token) {
            this.userData.next(res.user)
            this.userLogged.next(true)
          } else {
            this.notifyService.show("Login failed!")
          }
        })
      )
  }

  public register(payload: IRegister) {
    return this.http.post(`${env.apiEndpoint}/auth/register`, payload)
      .pipe(
        tap((res: any) => {
          if (res.user && res.token) {
            console.log(res.user)
            this.userData.next(res.user)
            this.userLogged.next(true)
          } else {
            this.notifyService.show("Register failed!")
          }
        })
      )
  }

  public forgotPassword(payload: IForgotPassword) {
    return this.http.post(`${env.apiEndpoint}/auth/forgot/password`, payload)
  }

  public resetPassword(payload: IResetPassword) {
    return this.http.post(`${env.apiEndpoint}/auth/reset/password`, payload)
  }

  public checkEmailTaken(payload: IEmail) {
    return this.http.post(`${env.apiEndpoint}/auth/email/taken`, payload)
  }

  public getUserData(): Observable<any> {
    return this.userData$
  }

}





