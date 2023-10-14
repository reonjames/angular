import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { receipeService } from '../receipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeEmit=new EventEmitter<Recipe>();
recipes: Recipe[];
  // recipes: Recipe[] = [
  //   new Recipe('A test recipe','This is my first recipe','https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg')
  // ];
  constructor(private receipeServ:receipeService){}
  ngOnInit(): void {
    this.recipes=this.receipeServ.recipes;
  }
  onRecipeDet(recipe:Recipe){
    this.recipeEmit.emit(recipe);
  }
}
