import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  searchResult;
  selectedStation;
  lastStationId;
  lastStation;

  constructor(private dataService: DataService, private localStoreage: LocalStorageService) { }

  ngOnInit(): void {
    this.lastStationId = this.localStoreage.getItem('last-station');

    if (this.lastStationId) {
      this.dataService.station(this.lastStationId).subscribe(station => {
        this.lastStation = station.data;

      });


    }
  }

  searchHandler(keyword) {
    this.dataService.search(keyword).subscribe(data => {
      this.searchResult = data;
    });
  }

  chooseStationHandler(stationId) {
    this.searchResult = null;
    this.dataService.station(stationId).subscribe(data => {
      console.log(data);
      this.selectedStation = data;
    });
  }
}
