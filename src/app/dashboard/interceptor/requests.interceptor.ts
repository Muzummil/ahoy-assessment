import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '002d1752e0mshbc8a1e862ac81d7p16727ejsnff7f8dfec935',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
      'Content-Type': 'application/json',
    });
    const cloneReq = request.clone({ headers });

    return next.handle(cloneReq);
  }
}
