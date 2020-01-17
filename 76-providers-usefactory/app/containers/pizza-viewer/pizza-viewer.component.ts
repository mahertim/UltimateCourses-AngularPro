import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FoodService } from '../../food.service';

interface Pizza {
  name: string;
  price: number;
}

export function PizzaFactory(http: Http) {
  return new FoodService(http, '/api/pizzas');
}

@Component({
  selector: 'pizza-viewer',
  providers: [
    {
      provide: FoodService,
      useFactory: PizzaFactory,
      deps: [Http],
    },
  ],
  templateUrl: 'pizza-viewer.component.html',
})
export class PizzaViewerComponent implements OnInit {
  items$: Observable<Pizza[]> = Observable.of([]);

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }
}
