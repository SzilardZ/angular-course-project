import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('bolognese', 'delicious food',
      'https://www.maxpixel.net/static/photo/1x/Spaghetti-Bolognese-Eat-Food-Parmesan-Delicious-787048.jpg'),
    new Recipe('pizza', 'italian speciality',
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg')
  ];

  constructor() { }


  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
