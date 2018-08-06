import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
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

  public getEvents(id: string): Observable<Event[] | Error > {
    return this.http.get<Event[]>(this.API_PATH + 'all', {params: {id: id}}).pipe(
      catchError((err) => this.handleError(err))
    );
  }

}
