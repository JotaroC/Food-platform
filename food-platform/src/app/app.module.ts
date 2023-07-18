import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecipesComponent } from './feature/recipes/recipes.component';
import { RecipeListComponent } from './feature/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './feature/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './feature/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './feature/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './feature/shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './share/dropdown.directive';
import { HeaderComponent } from './feature/header/header.component';
import { ShoppingListService } from './feature/shopping-list/shopping-list.service';
@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
