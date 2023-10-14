import { Component,Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { receipeService } from '../receipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
recipe:Recipe;
constructor(private receipeServ:receipeService){}
ngOnInit(): void {
  this.recipe= this.receipeServ.recipes[0];
}
}
