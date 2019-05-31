import { Injectable, OnInit } from '@angular/core';
import { IAccident } from 'src/app/shared/models/accident/accident';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NotifyService } from 'src/app/core/services/notify/notify.service';

@Injectable({
  providedIn: 'root'
})
export class AccidentService implements OnInit {

  private accidentsSubject: BehaviorSubject<IAccident[]>
  private accidents$: Observable<IAccident[]>

  constructor(
    private http: HttpClient,
    private router: Router,
    private notifyService: NotifyService,
    private loadingController: LoadingController) {
    this.accidentsSubject = new BehaviorSubject([])
    this.accidents$ = this.accidentsSubject.asObservable()
    this.getUserAccidentsDB()
  }

  public ngOnInit() {

  }

  public getUserAccidentsDB(): void {
    const subs = this.http.get(`${env.apiEndpoint}/users/accidents`)
      .pipe(
        tap((accidents: IAccident[]) => console.log(`getUserAccidentsDB`, accidents))
      )
      .subscribe((accidents: IAccident[]) => this.accidentsSubject.next(accidents),
        (err) => console.error("getUserAccidentsDB", err),
        () => subs.unsubscribe());
  }

  public getUserAccidents(): Observable<IAccident[]> {
    return this.accidents$
  }

  public getUserAccident(id: string): Observable<IAccident> {
    return this.accidents$.pipe(
      map((accidents: IAccident[]) => {
        return accidents.find((accident: IAccident) => accident._id === id)
      })
    )
  }

  public deleteUserAccident(id: string): void {
    const subs = this.http.delete(`${env.apiEndpoint}/users/accident/${id}`)
      .pipe(
        tap((accidents: IAccident[]) => console.log(`deleteUserAccident`, id, accidents))
      )
      .subscribe((accidents: IAccident[]) => {
        const newAccidents = this.accidentsSubject.getValue().filter((accident: IAccident) => accident._id !== id)
        this.accidentsSubject.next(newAccidents)
        this.router.navigateByUrl('/accidents');
      }, (err) => console.error("deleteUserAccident", err),
        () => subs.unsubscribe());
  }

  public newUserAccident(payload: IAccident): void {
    const subs = this.http.post(`${env.apiEndpoint}/users/accidents/`, payload)
      .pipe(
        tap((accidents: IAccident[]) => console.log(`newUserAccident`, accidents))
      )
      .subscribe((accidents: IAccident[]) => {
        this.accidentsSubject.next(accidents)
        this.router.navigateByUrl('/accidents');
      }, (err) => console.error("newUserAccident", err),
        () => subs.unsubscribe());
  }

  public updateUserAccident(payload: IAccident): void {
    const subs = this.http.put(`${env.apiEndpoint}/users/accident/${payload._id}`, payload)
      .pipe(
        tap((accidents: IAccident[]) => console.log(`updateUserAccident`, accidents))
      )
      .subscribe((accidents: IAccident[]) => {
        const newAccidents = this.accidentsSubject.getValue().map((accident: IAccident) => accident._id === payload._id ? payload : accident)
        this.accidentsSubject.next(newAccidents)
        this.notifyService.show("Data saved successfully 😄")
      }, (err) => console.error("updateUserAccident", err),
        () => subs.unsubscribe());
  }

}