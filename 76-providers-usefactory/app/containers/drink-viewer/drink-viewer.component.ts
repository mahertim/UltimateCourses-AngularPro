import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FoodService } from '../../food.service';

interface Drink {
  name: string;
  price: number;
}

export function DrinkFactory(http: Http) {
  return new FoodService(http, '/api/drinks');
}

@Component({
  selector: 'drink-viewer',
  providers: [
    {
      provide: FoodService,
      useFactory: DrinkFactory,
      deps: [Http],
    },
  ],
  templateUrl: './drink-viewer.component.html',
})
export class DrinkViewerComponent implements OnInit {
  items$: Observable<Drink[]> = Observable.of([]);

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }
}
