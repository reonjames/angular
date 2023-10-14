import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { receipeService } from '../../receipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  recipe :Recipe;
  constructor(private receipeServ:receipeService){}
  ngOnInit(): void {
    this.recipe=this.receipeServ.recipes[0];
  }

@Output() recipeDet =new EventEmitter<Recipe>();
onRecipeList(){
  this.recipeDet.emit(this.recipe);
}
}
