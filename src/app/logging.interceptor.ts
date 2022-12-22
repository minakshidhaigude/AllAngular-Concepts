import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}
  startTime: any;
  endTime: any;
  difference: number = 0;
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.startTime = new Date().toDateString();
    console.log('time', this.startTime);
    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          this.endTime = new Date().toDateString();
          console.log('endTime', this.endTime);
          this.difference = this.endTime - this.startTime;
          console.log('difference', this.difference);
          console.log(
            '***event**',
            event.url + 'succeed in' + this.difference + ' milliseconds'
          );
        }

        return event;
      })
    );
  }
}
