import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListCalendarsService {

  constructor(private http: HttpClient) { }

  private API_PATH = environment.API_PATH;

  private handleError(err: HttpErrorResponse): Observable<Error> {
    return throwError(`Couldn\'t fetch calendars: ${err}`);
  }

  public getCalendars(): Observable<string[] | Error> {
    return this.http.get<string[]>(this.API_PATH + 'calendars').pipe(
      catchError((err) => this.handleError(err))
    );
  }

}
