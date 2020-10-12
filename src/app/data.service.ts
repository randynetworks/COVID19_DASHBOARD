import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

const covid = 'https://api.kawalcorona.com/';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}


  // api getAllCovid
  getCovidAll(): Observable<any> {
    return this.http.get(covid + 'indonesia');
  }

}
