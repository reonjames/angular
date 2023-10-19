import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { receipeService } from './receipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[receipeService]
})
export class RecipesComponent implements OnInit{
 constructor(private recipeServ:receipeService){}
  selectedRecipe:Recipe;
  ngOnInit(): void {
    this.recipeServ.receipeSelected.subscribe((recipe:Recipe) => { 
      this.selectedRecipe=recipe;
    })
  }
  
}
