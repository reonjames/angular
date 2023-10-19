import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { shoppingListServ } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@ViewChild('nameInput') nameInputRef:ElementRef;
@ViewChild('amountInput') amountInputRef:ElementRef; 
//@Output() shoppingItem=new EventEmitter<Ingredient>();
constructor(private shoppingServ: shoppingListServ){}
onShoppingAdd(){
  const newIngredient=new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
  this.shoppingServ.onAddingItem(newIngredient);
}

}
