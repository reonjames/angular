import { Component,OnInit } from '@angular/core';
import { shoppingListServ } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  //providers:[shoppingListServ]
})
export class ShoppingListComponent implements OnInit{
   ingredients: Ingredient[];
   constructor(private shoppingServ:shoppingListServ){}
  ngOnInit(): void {
    this.ingredients=this.shoppingServ.ingredients;
  }
}
