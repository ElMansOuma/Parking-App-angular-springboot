import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(public toastrService: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status) {
          // Handle specific HTTP status errors
          this.toastrService.error(error.message, '');
        } else {
          // Handle non-HTTP errors
          console.error(error);
        }

        // Always return an Observable, even if it's an error
        return throwError(error);
      })
    );
  }
}
