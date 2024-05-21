import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food.model';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let foodsObservable: Observable<Food[]>;
    this.route.params.subscribe((params => {
      if (params.searchTerm)
        foodsObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        foodsObservable = this.foodService.getAllFoodByTag(params.tag);
      else
        foodsObservable = this.foodService.getAll();

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      })
    }));
  }
}
