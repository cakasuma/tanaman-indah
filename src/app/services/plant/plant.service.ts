import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { httpOptions, endpoint } from '../config';
@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getPlants(): Observable<any> {
    return this.http.get(endpoint + 'plant').pipe(
      map(this.extractData));
  }

  getPlant(id): Observable<any> {
    return this.http.get(endpoint + 'plant/' + id).pipe(
      map(this.extractData));
  }
}
