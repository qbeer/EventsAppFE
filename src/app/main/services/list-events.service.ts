import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListEventsService {

  constructor(private http: HttpClient) {}

  private API_PATH = environment.API_PATH;

  private handleError(err: HttpErrorResponse): Observable<Error> {
    return throwError(`Couldn\'t fetch events: ${err}`);
  }

  public getEvents(): Observable<Event[] | Error > {
    return this.http.get<Event[]>(this.API_PATH + 'all').pipe(
      catchError((err) => this.handleError(err))
    );
  }

}
