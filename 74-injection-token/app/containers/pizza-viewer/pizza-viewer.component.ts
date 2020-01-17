import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FoodService } from '../../food.service';

interface Pizza {
  name: string;
  price: number;
}

@Component({
  selector: 'pizza-viewer',
  providers: [FoodService],
  templateUrl: 'pizza-viewer.component.html',
})
export class PizzaViewerComponent implements OnInit {
  items$: Observable<Pizza[]> = Observable.of([]);

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }
}
