import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params => {
      if (params.id)
        this.foodService.getFoodById(params.id)
          .subscribe(serverFood => {
            this.food = serverFood;
          })
    }));
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
