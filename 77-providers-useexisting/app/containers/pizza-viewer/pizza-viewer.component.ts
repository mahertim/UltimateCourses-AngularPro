import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FoodService } from '../../food.service';

interface Pizza {
  name: string;
  price: number;
}

export abstract class PizzaService {
  getPizzas: () => Observable<Pizza[]> = () => Observable.of([]);
}

@Component({
  selector: 'pizza-viewer',
  providers: [FoodService, { provide: PizzaService, useExisting: FoodService }],
  templateUrl: 'pizza-viewer.component.html',
})
export class PizzaViewerComponent implements OnInit {
  items$: Observable<Pizza[]> = Observable.of([]);

  constructor(private foodService: PizzaService) {}

  ngOnInit() {
    this.items$ = this.foodService.getPizzas();
  }
}
