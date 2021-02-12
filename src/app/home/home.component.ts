import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  searchResult;
  selectedStation;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
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
