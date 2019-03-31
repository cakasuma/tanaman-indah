import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { httpOptions, endpoint } from '../config';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getFeedbacks(): Observable<any> {
    return this.http.get(endpoint + 'feedback').pipe(
      map(this.extractData));
  }

  getFeedback(id): Observable<any> {
    return this.http.get(endpoint + 'feedback/' + id).pipe(
      map(this.extractData));
  }

  addFeedback(feedback): Observable<any> {
    return this.http.post<any>(endpoint + 'feedback', JSON.stringify(feedback), httpOptions).pipe(
      tap((feedback) => console.log(`added /w ${feedback['_id']}`)),
      catchError(this.handleError<any>('addFeedback'))
    );
  }

  deleteFeedback(id): Observable<any> {
    return this.http.delete<any>(endpoint + 'feedback/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted feedback id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
