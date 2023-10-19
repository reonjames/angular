import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class shoppingListServ{
    ingredients: Ingredient[]=[ new Ingredient('Apples',5), new Ingredient('Tomatoes',10)];
    ingredientChanged = new EventEmitter<Ingredient[]>();
    
    getIngredient(){
    this.ingredientChanged.emit(this.ingredients);

    }
    onAddingItem(newIngredient:Ingredient){
        this.ingredients.push(newIngredient);
    }

}