import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

const covid = 'https://covid19.mathdro.id/api/';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}


  // api getAllCovid
  getCovidAll(): Observable<any> {
    return this.http.get(covid + 'countries/Indonesia');
  }

}
