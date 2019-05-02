import { Injectable, OnInit } from '@angular/core';
import { IAccident } from 'src/app/shared/models/accident/accident';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AccidentService implements OnInit {

  private subject: BehaviorSubject<IAccident[]>
  private accidents$: Observable<IAccident[]>

  constructor(
    private http: HttpClient,
    private router: Router,
    private loadingController: LoadingController) {
    this.subject = new BehaviorSubject([])
    this.accidents$ = this.subject.asObservable()
    this.fetchAccidents()
  }

  public ngOnInit() {

  }

  public fetchAccidents(): void {
    this.http.get(`${env.apiEndpoint}/users/accidents`)
      .pipe(
        //map((data: { accidents: IAccident[] }) => data.accidents),
        tap((accidents: IAccident[]) => console.log(`get accidents resp!`, accidents))
      )
      .subscribe((accidents: IAccident[]) => this.subject.next(accidents))
  }

  public getAccidents(): Observable<IAccident[]> {
    return this.accidents$
  }

  public getAccident(id: string): Observable<IAccident> {
    return this.accidents$.pipe(
      map((accidents: IAccident[]) => {
        return accidents.find((accident: IAccident) => accident._id === id)
      })
    )
  }

  public deleteAccident(id: string): void {
    this.http.delete(`${env.apiEndpoint}/users/accident/${id}`)
      .pipe(
        tap((res: any) => console.log(`delete accident resp!`, id, res))
      )
      .subscribe((res: any) => {
        if (res.user.ok) {
          const accidents = this.subject.getValue().filter((accident: IAccident) => accident._id !== id)
          this.subject.next(accidents)
          this.router.navigateByUrl('/accidents/list');
        } else {
          console.error("Error on deleteAccidentById", res)
        }
      })
  }

  public async newAccident(payload: IAccident) {

    // open loading spinner
    const loading: HTMLIonLoadingElement = await this.loadingController.create({
      message: 'saving...'
    });
    await loading.present();

    this.http.post(`${env.apiEndpoint}/users/accidents/`, payload)
      .pipe(
        tap((res: any) => console.log(`new accident resp!`, res))
      )
      .subscribe((res: any) => {
        if (res.accidents) {
          this.subject.next(res.accidents)
          this.router.navigateByUrl('/accidents/list');
        } else {
          console.error("Error on newAccident", res)
        }
        loading.dismiss()
      })
  }
}