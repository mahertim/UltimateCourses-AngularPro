import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FoodService } from '../../food.service';

interface Drink {
  name: string;
  price: number;
}

@Component({
  selector: 'drink-viewer',
  providers: [FoodService],
  templateUrl: './drink-viewer.component.html',
})
export class DrinkViewerComponent implements OnInit {
  items$: Observable<Drink[]> = Observable.of([]);

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }
}
