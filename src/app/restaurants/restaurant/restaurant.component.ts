import { Component, OnInit, Input } from '@angular/core';

import { Restaurant } from './resutaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
