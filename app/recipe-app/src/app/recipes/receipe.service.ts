import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
export class receipeService{

  receipeSelected =new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A test recipe','This is my first recipe','https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',[new Ingredient('meat',2),new Ingredient('tomato',5),new Ingredient('chilli',2)])
      ];
      getRecipe(id:number){
        return this.recipes[id];
      }
}