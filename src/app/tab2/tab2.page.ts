import { Component, OnInit } from '@angular/core';
import { Brewery } from './brewery.model';
import { BreweryService } from './breweries.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  loadedBreweries: Brewery[];
  constructor(private breweryService: BreweryService) {}
  ngOnInit() {
    this.loadedBreweries = this.breweryService.getBreweries();
    console.log(this.loadedBreweries);
  }
  // ionViewWillEnter() {
  //   this.loadedBreweries = this.breweryService.breweries;
  // }
  // onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
  //   console.log(event.detail);
  // }
}
