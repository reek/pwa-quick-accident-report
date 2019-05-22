import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IPerson } from 'src/app/shared/models/person/person';
import { IVehicle } from 'src/app/shared/models/vehicle/vehicle';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private vehiclesSubject: BehaviorSubject<IVehicle[]>
  private vehicles$: Observable<IVehicle[]>

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.vehiclesSubject = new BehaviorSubject([])
    this.vehicles$ = this.vehiclesSubject.asObservable()
    this.getUserVehiclesDB()
  }

  public getUserPersonal(): Observable<any> {
    return this.http.get(`${env.apiEndpoint}/users/personal`)
      .pipe(
        tap((res: any) => console.log("user personal data", res)),
        map((res: any) => res.personal))
  }

  public updateUserPersonal(payload: IPerson): Observable<any> {
    return this.http.put(`${env.apiEndpoint}/users/personal`, payload)
  }

  public sendUserFeedback(payload: any) {
    return this.http.post(`${env.apiEndpoint}/users/feedback`, payload)
  }

  public getUserVehiclesDB(): void {
    this.http.get(`${env.apiEndpoint}/users/vehicles`)
      .pipe(
        //map((data: { user: { vehicles: IVehicle[] } }) => data.user.vehicles),
        tap((vehicles: IVehicle[]) => console.log(`get vehicles resp!`, vehicles))
      )
      .subscribe((vehicles: IVehicle[]) => this.vehiclesSubject.next(vehicles))
  }

  public getUserVehicles(): Observable<IVehicle[]> {
    return this.vehicles$
  }

  public getUserVehicle(id: string): Observable<IVehicle> {
    return this.vehicles$.pipe(
      map((vehicles: IVehicle[]) => {
        return vehicles.find((vehicle: IVehicle) => vehicle._id === id)
      })
    )
  }

  public deleteUserVehicle(id: string): void {
    this.http.delete(`${env.apiEndpoint}/users/vehicle/${id}`)
      .pipe(
        tap((res: any) => console.log(`delete vehicle resp!`, id, res))
      )
      .subscribe((res: any) => {
        if (res.user.ok) {
          const vehicles = this.vehiclesSubject.getValue().filter((vehicle: IVehicle) => vehicle._id !== id)
          this.vehiclesSubject.next(vehicles)
          this.router.navigateByUrl('/vehicles');
        } else {
          console.error("Error on deleteVehicleById", res)
        }
      })
  }

  public newUserVehicle(payload: IVehicle): void {
    this.http.post(`${env.apiEndpoint}/users/vehicles/`, payload)
      .pipe(
        tap((res: any) => console.log(`new vehicle resp!`, res))
      )
      .subscribe((res: any) => {
        if (res.vehicles) {
          this.vehiclesSubject.next(res.vehicles)
          this.router.navigateByUrl('/vehicles');
        } else {
          console.error("Error on newVehicle", res)
        }
      })
  }

  public updateUserVehicle(payload: IVehicle): Observable<any> {
    return this.http.put(`${env.apiEndpoint}/users/vehicle/${payload._id}`, payload)
  }

}

