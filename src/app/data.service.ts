import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throttleTime, tap } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  token = 'e9d2d52d32d3ec5766c303adcd5d0aa6196b8a57';

  constructor(private http: HttpClient, private localStoreage: LocalStorageService) { }

  search(keyword: string) {
    return this.http.get(`https://api.waqi.info/search/?keyword=${keyword}&token=${this.token}`)
      .pipe(throttleTime(10000))
  }

  station(station: number) {
    return this.http.get(`https://api.waqi.info/feed/@${station}/?token=${this.token}`)
      .pipe(tap((result: { data: { idx: number } }) => {
        this.localStoreage.setItem('last-station', result.data.idx);
        console.log(result.data.idx);
      }));
  }
}
