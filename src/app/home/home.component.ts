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
  lastStation;

  constructor(private dataService: DataService, private localStoreage: LocalStorageService) { }

  ngOnInit(): void {
    this.lastStation = this.localStoreage.getItem('last-station');
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
