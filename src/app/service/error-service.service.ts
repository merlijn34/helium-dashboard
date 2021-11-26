import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService implements HttpInterceptor{

  constructor() { }
  
/**
 * used for error handling
 * @param error - the error
 * @returns 
 */
handleError(error:HttpErrorResponse) {
	console.log('error')
	return throwError(error);
  }

  //intercept the request and handle the event
  intercept(req: HttpRequest<any>, next: HttpHandler):
	Observable<HttpEvent<any>>{
		//handle the error
		return next.handle(req)
		.pipe(
		catchError(this.handleError)
		);
  	}

}
