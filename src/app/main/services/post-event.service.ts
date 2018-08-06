import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class PostEventService {

  constructor(private http: HttpClient) { }

  private API_PATH = environment.API_PATH;

  private handleError(err: HttpErrorResponse): Observable<Error> {
    return throwError(`Couldn\'t save event: ${err}`);
  }

  public postEvent(event: Event): Observable<Event | Error> {
    console.log('Posting event:' + event);
    return this.http.post<Event>(`${this.API_PATH}save`, event).pipe(
      catchError((err) => this.handleError(err))
    );
  }
}
