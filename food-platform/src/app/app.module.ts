import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './share/header/header.module';
import { RecipesComponent } from './feature/recipes/recipes.component';
import { RecipeListComponent } from './feature/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './feature/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './feature/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './feature/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './feature/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
