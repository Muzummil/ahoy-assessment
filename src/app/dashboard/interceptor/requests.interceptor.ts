import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpHeaders,
  HttpResponse,
} from "@angular/common/http";
import { Observable, of, tap } from "rxjs";
import { CacheResolverService } from "../services/cache-service/cache.service";
const TIME_TO_LIVE = 1000;
@Injectable()
export class RequestsInterceptor implements HttpInterceptor {
  constructor(private cacheResolver: CacheResolverService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      "X-RapidAPI-Key": "002d1752e0mshbc8a1e862ac81d7p16727ejsnff7f8dfec935",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      "Content-Type": "application/json",
    });
    req = req.clone({ headers });
    if (req.method !== "GET") {
      return next.handle(req);
    }
    const cachedResponse = this.cacheResolver.get(req.urlWithParams);
    return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next);
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cacheResolver.set(req.urlWithParams, event, TIME_TO_LIVE);
        }
      })
    );
  }
}
