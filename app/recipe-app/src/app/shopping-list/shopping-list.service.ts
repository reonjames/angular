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
        this.ingredientChanged.emit(this.ingredients.slice());
    }
    onAddingArr(ingredientArr:Ingredient[]){
        for (let index = 0; index < ingredientArr.length; index++) {
            this.ingredients.push(ingredientArr[index]);
            this.ingredientChanged.emit(this.ingredients.slice());
        }
    }

}