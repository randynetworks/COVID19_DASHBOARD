import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

const news = 'http://newsapi.org/v2/';
const covid = 'https://covid19.mathdro.id/api/';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient) {}

  // api news
  getNews(): Observable<any> {
    return this.http.get(news + 'top-headlines?country=id&category=health&apiKey=05404d8314584f368b6524a795f6e0c7');
  }

  // api getAllCovid
  getCovidAll(): Observable<any> {
    return this.http.get(covid + 'countries/Indonesia');
  }

}
