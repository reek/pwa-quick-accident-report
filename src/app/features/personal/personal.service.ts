import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { IPersonal } from 'src/app/shared/models/personal/personal';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(
    private http: HttpClient) { }

  public getPersonal(): Observable<any> {
    return this.http.get(`${env.apiEndpoint}/users/personal`)
      .pipe(
        map((res: any) => res.user.personal))
  }

  public updatePersonal(payload: IPersonal): Observable<any> {
    return this.http.put(`${env.apiEndpoint}/users/personal`, payload)
  }


}

