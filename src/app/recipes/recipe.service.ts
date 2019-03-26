import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('bolognese',
      'delicious food',
      'https://www.maxpixel.net/static/photo/1x/Spaghetti-Bolognese-Eat-Food-Parmesan-Delicious-787048.jpg',
      [
        new Ingredient('cheese', 2),
        new Ingredient('tomato', 3),
      ]),
    new Recipe('pizza', 'italian speciality',
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg',
      [
        new Ingredient('flour', 4),
        new Ingredient('ruccola', 1)
      ])
  ];

  constructor() { }


  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
