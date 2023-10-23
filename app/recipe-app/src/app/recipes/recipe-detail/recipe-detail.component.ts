import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { receipeService } from '../receipe.service';
//import { recipeToShoppingServ } from 'src/app/recipeToShopping.service';
import { shoppingListServ } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
recipe:Recipe;
constructor(private receipeServ:receipeService, private recipeShopServ: shoppingListServ){}
ngOnInit(): void {
  this.recipe= this.receipeServ.recipes[0];
}
onToShoppingList(){
  this.recipeShopServ.onAddingArr(this.recipe.ingredient);
}
}
