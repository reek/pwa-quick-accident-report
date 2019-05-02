import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private http: HttpClient) { }

  public send(payload: any) {
    return this.http.post(`${env.apiEndpoint}/users/feedback`, payload)
  }
}
