import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FoodService } from '../../food.service';

interface Drink {
  name: string;
  price: number;
}

export abstract class DrinkService {
  getDrinks: () => Observable<Drink[]> = () => Observable.of([]);
}

@Component({
  selector: 'drink-viewer',
  providers: [FoodService, { provide: DrinkService, useExisting: FoodService }],
  templateUrl: './drink-viewer.component.html',
})
export class DrinkViewerComponent implements OnInit {
  items$: Observable<Drink[]> = Observable.of([]);

  constructor(private foodService: DrinkService) {}

  ngOnInit() {
    this.items$ = this.foodService.getDrinks();
  }
}
