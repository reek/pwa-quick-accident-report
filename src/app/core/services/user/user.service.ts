import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IPerson } from 'src/app/shared/models/person/person';
import { IVehicle } from 'src/app/shared/models/vehicle/vehicle';
import { Router } from '@angular/router';
import { NotifyService } from '../notify/notify.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private vehiclesSubject: BehaviorSubject<IVehicle[]>
  private vehicles$: Observable<IVehicle[]>

  constructor(
    private http: HttpClient,
    private router: Router,
    private notifyService: NotifyService) {
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

  public updateUserPersonal(payload: IPerson): void {
    this.http.put(`${env.apiEndpoint}/users/personal`, payload)
      .subscribe((res: any) => {
        if (res.user && res.token)
          this.notifyService.show("Data saved successfully 😄")
      }, (err) => console.error("updateUserPersonal", err));
  }

  public sendUserFeedback(payload: any) {
    return this.http.post(`${env.apiEndpoint}/users/feedback`, payload)
  }

  public getUserVehiclesDB(): void {
    const subs = this.http.get(`${env.apiEndpoint}/users/vehicles`)
      .pipe(
        tap((vehicles: IVehicle[]) => console.log(`getUserVehiclesDB`, vehicles))
      )
      .subscribe((vehicles: IVehicle[]) => this.vehiclesSubject.next(vehicles),
        (err) => console.error("getUserVehiclesDB", err),
        () => subs.unsubscribe());
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
    const subs = this.http.delete(`${env.apiEndpoint}/users/vehicle/${id}`)
      .pipe(
        tap((vehicles: IVehicle[]) => console.log(`deleteUserVehicle`, id, vehicles))
      )
      .subscribe((vehicles: IVehicle[]) => {
        const newVehicles = this.vehiclesSubject.getValue().filter((vehicle: IVehicle) => vehicle._id !== id)
        this.vehiclesSubject.next(newVehicles)
        this.router.navigateByUrl('/vehicles');
      }, (err) => console.error("deleteUserVehicle", err),
        () => subs.unsubscribe());
  }

  public newUserVehicle(payload: IVehicle): void {
    const subs = this.http.post(`${env.apiEndpoint}/users/vehicles/`, payload)
      .pipe(
        tap((vehicles: IVehicle[]) => console.log(`newUserVehicle`, vehicles))
      )
      .subscribe((vehicles: IVehicle[]) => {
        this.vehiclesSubject.next(vehicles)
        this.router.navigateByUrl('/vehicles');
      }, (err) => console.error("newUserVehicle", err),
        () => subs.unsubscribe());
  }

  public updateUserVehicle(payload: IVehicle): void {
    const subs = this.http.put(`${env.apiEndpoint}/users/vehicle/${payload._id}`, payload)
      .pipe(
        tap((vehicles: IVehicle[]) => console.log(`updateUserVehicle`, vehicles))
      )
      .subscribe((vehicles: IVehicle[]) => {
        const newVehicles = this.vehiclesSubject.getValue().map((vehicle: IVehicle) => vehicle._id === payload._id ? payload : vehicle)
        this.vehiclesSubject.next(newVehicles)
        this.notifyService.show("Data saved successfully 😄")
      }, (err) => console.error("updateUserVehicle", err),
        () => subs.unsubscribe());
  }
}
