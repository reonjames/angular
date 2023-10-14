import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { receipeService } from './receipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[receipeService]
})
export class RecipesComponent {
 
  selectedRecipe:Recipe;
  onRecipeDet(recipe){
    this.selectedRecipe=recipe;
  }
}
