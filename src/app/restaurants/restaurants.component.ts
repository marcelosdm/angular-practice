import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant/resutaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [
    {
      id: "ice-cream",
      name: "Ice Cream",
      category: "Ice Creams",
      deliveryEstimate: "40-65m",
      rating: 4.5,
      imagePath: "assets/img/restaurants/icy.png"
    },
    {
      id: "green-food",
      name: "Green Food",
      category: "Saudável",
      deliveryEstimate: "75m",
      rating: 4.1,
      imagePath: "assets/img/restaurants/greenfood.png"
    },
    {
      id: "tasty-treats",
      name: "Tasty Treats",
      category: "Doces",
      deliveryEstimate: "20m",
      rating: 4.4,
      imagePath: "assets/img/restaurants/tasty.png"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
