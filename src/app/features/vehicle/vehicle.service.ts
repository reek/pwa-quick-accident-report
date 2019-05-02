import { Injectable } from '@angular/core';
import { IVehicle } from '../../shared/models/vehicle/vehicle';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private subject: BehaviorSubject<IVehicle[]>
  private vehicles$: Observable<IVehicle[]>

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.subject = new BehaviorSubject([])
    this.vehicles$ = this.subject.asObservable()
    this.fetchVehicles()
  }

  public ngOnInit() {
    // fetchVehicles not work here 
  }

  public fetchVehicles(): void {
    this.http.get(`${env.apiEndpoint}/users/vehicles`)
      .pipe(
        //map((data: { user: { vehicles: IVehicle[] } }) => data.user.vehicles),
        tap((vehicles: IVehicle[]) => console.log(`get vehicles resp!`, vehicles))
      )
      .subscribe((vehicles: IVehicle[]) => this.subject.next(vehicles))
  }

  public getVehicles(): Observable<IVehicle[]> {
    return this.vehicles$
  }

  public getVehicle(id: string): Observable<IVehicle> {
    return this.vehicles$.pipe(
      map((vehicles: IVehicle[]) => {
        return vehicles.find((vehicle: IVehicle) => vehicle._id === id)
      })
    )
  }

  public deleteVehicle(id: string): void {
    this.http.delete(`${env.apiEndpoint}/users/vehicle/${id}`)
      .pipe(
        tap((res: any) => console.log(`delete vehicle resp!`, id, res))
      )
      .subscribe((res: any) => {
        if (res.user.ok) {
          const vehicles = this.subject.getValue().filter((vehicle: IVehicle) => vehicle._id !== id)
          this.subject.next(vehicles)
          this.router.navigate(['/vehicles']);
        } else {
          console.error("Error on deleteVehicleById", res)
        }
      })
  }

  public newVehicle(payload: IVehicle): void {
    this.http.post(`${env.apiEndpoint}/users/vehicles/`, payload)
      .pipe(
        tap((res: any) => console.log(`new vehicle resp!`, res))
      )
      .subscribe((res: any) => {
        if (res.vehicles) {
          this.subject.next(res.vehicles)
          this.router.navigateByUrl('/vehicles');
        } else {
          console.error("Error on newVehicle", res)
        }
      })
  }

  public updateVehicle(payload: IVehicle): Observable<any> {
    return this.http.put(`${env.apiEndpoint}/users/vehicle/${payload._id}`, payload)
  }
}

