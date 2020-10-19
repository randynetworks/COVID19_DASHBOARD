import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// const covid = 'https://api.kawalcorona.com/';
const covid = 'https://raw.githubusercontent.com/mechaid/course-materials/master/praktikum-web/2020-2021/backup-api-per-prov-2020-10-05.json';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}


  // api getAllCovid
  getCovidAll(): Observable<any> {
    return this.http.get(covid);
  }


}
