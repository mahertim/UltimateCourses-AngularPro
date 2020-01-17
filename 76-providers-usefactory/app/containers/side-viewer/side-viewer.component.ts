import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FoodService } from '../../food.service';

interface Side {
  name: string;
  price: number;
}

export function SideFactory(http: Http) {
  return new FoodService(http, '/api/sides');
}

@Component({
  selector: 'side-viewer',
  providers: [
    {
      provide: FoodService,
      useFactory: SideFactory,
      deps: [Http],
    },
  ],
  templateUrl: 'side-viewer.component.html',
})
export class SideViewerComponent implements OnInit {
  items$: Observable<Side[]> = Observable.of([]);

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }
}
