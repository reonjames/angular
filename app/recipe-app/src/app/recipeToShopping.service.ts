import { Ingredient } from "./shared/ingredient.model";

export class recipeToShoppingServ{
    ingredient:Ingredient[];
    getIngredient(ingredientArg:Ingredient[]){
        this.ingredient=ingredientArg;
    } 
    pushIngredient(){
        
    }
}