import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})

export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('bolognese', 'delicious food',
      'https://cdn.pixabay.com/photo/2014/02/16/13/32/spaghetti-bolognese-267289_960_720.jpg'),
    new Recipe('pizza', 'italian speciality',
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg')
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  onSelectedRecipe(recipeElement: Recipe) {
    this.selectedRecipe.emit(recipeElement);
  }
}
