import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, first, Observable, switchMap, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { getAccessToken } from '@shoppingcart-store/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorServerService implements HttpInterceptor {

  constructor(private store: Store<any>) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getAccessToken).pipe(first(), switchMap(token => {
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      });
      return next.handle(req);
    }), catchError((error: HttpErrorResponse) => {
      return throwError(() => error);
    }))
  }
}
