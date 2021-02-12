import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throttleTime, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  token = 'e9d2d52d32d3ec5766c303adcd5d0aa6196b8a57';

  constructor(private http: HttpClient) { }

  search(keyword: string) {
    return this.http.get(`https://api.waqi.info/search/?keyword=${keyword}&token=${this.token}`)
      .pipe(throttleTime(10000))
  }


  station(station: number) {
    return this.http.get(`https://api.waqi.info/feed/@${station}/?token=${this.token}`);
  }
}
