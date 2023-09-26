import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from 'src/app/share/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A piece of cake',
      'hi',
      'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3515855/recipe-label-clipart-md.png',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'ALex Apple pie',
      'This is a pie',
      'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3515855/recipe-label-clipart-md.png',
      [new Ingredient('Meat', 1), new Ingredient('Buns', 3)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //return a new array, a copy of recipe
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredient);
  }
}
