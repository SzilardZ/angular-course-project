import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'bolognese',
      'delicious food',
      'https://www.maxpixel.net/static/photo/1x/Spaghetti-Bolognese-Eat-Food-Parmesan-Delicious-787048.jpg',
      [
        new Ingredient('cheese', 2),
        new Ingredient('tomato', 3),
      ]),
    new Recipe(
    'pizza', 'italian speciality',
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg',
      [
        new Ingredient('flour', 4),
        new Ingredient('ruccola', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }


  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientList(ingredients);
  }

}
