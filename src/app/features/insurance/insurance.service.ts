import { IInsurance, Insurance } from '../../shared/models/insurance/insurance';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class InsuranceService implements OnInit {

  private subject: BehaviorSubject<Insurance[]>
  private insurances$: Observable<Insurance[]>

  constructor(private http: HttpClient) {
    this.subject = new BehaviorSubject([])
    this.insurances$ = this.subject.asObservable()
    this.fetchInsurances()
  }

  public ngOnInit() {
    // not work with fetchInsurances
  }

  public fetchInsurances(): void {
    this.http.get(`${env.apiEndpoint}/insurances`)
      .pipe(
        map((data: { insurances: IInsurance[] }) => {
          return data.insurances.map(insurance => new Insurance(insurance))
        }),
        tap((insurances: Insurance[]) => console.log(`Here we got insurances!`, insurances))
      )
      .subscribe((insurances: Insurance[]) => this.subject.next(insurances))
  }

  public getInsurances(): Observable<Insurance[]> {
    return this.insurances$
  }

  public getInsuranceById(id: string): Observable<Insurance> {
    return this.insurances$.pipe(
      map((insurances: Insurance[]) => {
        return insurances.find((insurance: Insurance) => insurance._id === id)
      })
    )
  }
}