import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { receipeService } from '../../receipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  recipe :Recipe;
  @Input() index:number;
  constructor(private receipeServ:receipeService){}
  ngOnInit(): void {
    this.recipe= this.receipeServ.recipes[0];
  }

//@Output() recipeDet =new EventEmitter<Recipe>();

}
