import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { receipeService } from '../receipe.service';
//import { recipeToShoppingServ } from 'src/app/recipeToShopping.service';
import { shoppingListServ } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
recipe:Recipe;
id:number;
constructor(private receipeServ:receipeService, private recipeShopServ: shoppingListServ,
   private route: ActivatedRoute){}
ngOnInit(): void {
  this.recipe= this.receipeServ.recipes[0];
  console.log("params = "+ this.route.snapshot.params['id'] );
  this.route.params.subscribe((params:Params)=> {
    
    this.id=+params['id']; 
    this.recipe=this.receipeServ.getRecipe(this.id);
  });
}
onToShoppingList(){
  this.recipeShopServ.onAddingArr(this.recipe.ingredient);
}
}
