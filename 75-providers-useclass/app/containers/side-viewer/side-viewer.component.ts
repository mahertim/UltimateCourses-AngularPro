import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FoodService } from '../../food.service';

interface Side {
  name: string;
  price: number;
}

@Component({
  selector: 'side-viewer',
  providers: [FoodService],
  templateUrl: 'side-viewer.component.html',
})
export class SideViewerComponent implements OnInit {
  items$: Observable<Side[]> = Observable.of([]);

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }
}
