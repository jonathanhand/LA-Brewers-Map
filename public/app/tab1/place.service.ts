import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private _places: Place[] = [
    new Place(
      'p1',
      'L.A. Brewers Win Big',
// tslint:disable-next-line: max-line-length
      '31 medals were awarded to 17 breweries in the Los Angeles County Brewers Guild at this year’s San Diego International Beer Competition including the honors of 2019 Champion Brewery to Angel City Brewery. ',
      '../assets/brew-imgs/SDBeer.jpg'
    ),
    new Place(
      'p2',
      'L.A. Brewers Take Home Six GABF Medals',
      '2018 Great American Beer Festival held in Denver, Colorado',
      '../assets/brew-imgs/medals.png',
    ),
    new Place(
      'p3',
      'Griffith Park Run 5k',
      'Independent Beer Garden Run',
      '../assets/brew-imgs/5krun.jpg',
    ),
  ];
  //TODO: add more text for when click on details
  data: Object;
  get places() {
    console.log('getting thru http get');
    this.http.get('https://beachbnb-93d74.firebaseio.com/place.json').subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
    return [...this._places];

  }
  constructor(private http: HttpClient) { }
  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
  addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      '../assets/imgs/nyc.jpg'
    );
    this.http.post(
      'https://beachbnb-93d74.firebaseio.com/place.json',
      {
        ...newPlace,
        id: null
      }
    )

    .subscribe((response) => {
      console.log(response);
    });
    this._places.push(newPlace);
    console.log(this._places);
  }
  updateOffer(placeId: string, title: string, description: string) {
    const updatedPlaceIndex = this._places.findIndex(pl => pl.id === placeId);
    const updatedPlace = [...this._places];
    const oldPlace = updatedPlace[updatedPlaceIndex];
    updatedPlace[updatedPlaceIndex] = new Place(
      oldPlace.id,
      title,
      description,
      oldPlace.image
    );
    this._places.splice(updatedPlaceIndex, 1);
    this._places.push(updatedPlace[updatedPlaceIndex]);
  }
}
