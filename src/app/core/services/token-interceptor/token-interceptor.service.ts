import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const storage = localStorage.getItem(env.authTokenStorageKey);
    if (!storage) {
      return next.handle(request).pipe(
        this._saveToken(),
        catchError(this.handleError)
      );
    }
    request = request.clone({
      setHeaders: {
        // TODO: pass storage KEY with environement config
        Authorization: `${localStorage.getItem(env.authTokenStorageKey)}`
      }
    });
    return next.handle(request).pipe(
      this._saveToken(),
      catchError(this.handleError)
    );
  }

  public handleError = (error: Response) => {
    return throwError(error);
  }

  private _saveToken() {
    return map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.info('TokenInterceptor', event);
        if (event.body.token) {
          localStorage.setItem(env.authTokenStorageKey, event.body.token);
        }
      }
      return event;
    });
  }
}
