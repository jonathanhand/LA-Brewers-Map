import { Injectable } from '@angular/core';
import { Brewery } from './brewery.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  private _breweries: Brewery[] = [
    // new Brewery(
    //   'b1',
    //   '14 Cannons',
    //   '31125 Via Colinas, Westlake Village, 91362',
    //   'Location: Brewery/Tasting Room'
    // ),
    // new Brewery(
    //   'b2',
    //   'Hand-Brewed Beer',
    //   '9771 Variel Avenue, Los Angeles, 91311',
    //   'Location: Brewery/Tasting Room'
    // )
    //commented out because using http request to firebase to get data
  ];

  getBreweries() {
    console.log('getting thru http get');
    this.http.get('https://la-brewers.firebaseio.com/breweries.json')
    .subscribe(res => {
// tslint:disable-next-line: forin
      for (const j in res) {
        const newBrewery = new Brewery(
          j,
          res[j].name,
          res[j].address,
          res[j].location
        );
        this._breweries.push(newBrewery);
      }
    });
    return this._breweries;

  }
  get breweries() {
    return [...this._breweries];
  }
  constructor(private http: HttpClient) { }
  getPlace(id: string) {
    return {...this._breweries.find(b => b.id === id)};
  }
  // addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
  //   const newPlace = new Brewery(
  //     Math.random().toString(),
  //     title,
  //     description,
  //     '../assets/imgs/nyc.jpg'
  //   );
  //   this.http.post(
  //     'https://beachbnb-93d74.firebaseio.com/place.json',
  //     {
  //       ...newPlace,
  //       id: null
  //     }
  //   )

  //   .subscribe((response) => {
  //     console.log(response);
  //   });
  //   this._places.push(newPlace);
  //   console.log(this._places);
  // }
  // updateOffer(placeId: string, title: string, description: string) {
  //   const updatedPlaceIndex = this._places.findIndex(pl => pl.id === placeId);
  //   const updatedPlace = [...this._places];
  //   const oldPlace = updatedPlace[updatedPlaceIndex];
  //   updatedPlace[updatedPlaceIndex] = new Place(
  //     oldPlace.id,
  //     title,
  //     description,
  //     oldPlace.image
  //   );
  //   this._places.splice(updatedPlaceIndex, 1);
  //   this._places.push(updatedPlace[updatedPlaceIndex]);
  // }
}
