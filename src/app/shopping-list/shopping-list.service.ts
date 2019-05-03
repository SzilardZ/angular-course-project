import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [];

  constructor() { }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredientList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}
