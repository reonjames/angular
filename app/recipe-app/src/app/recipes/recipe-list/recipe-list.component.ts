import { Component,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
@Output() recipeEmit=new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe','This is my first recipe','https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg')
  ];

  onRecipeDet(recipe:Recipe){
    this.recipeEmit.emit(recipe);
  }
}
