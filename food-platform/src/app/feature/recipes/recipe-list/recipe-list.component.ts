import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A piece of shit',
      'hi shit',
      'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3515855/recipe-label-clipart-md.png'
    ),
    new Recipe(
      'ALex Apple pie',
      'This is a pie',
      'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3515855/recipe-label-clipart-md.png'
    ),
  ];

  onSelectedItem(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
