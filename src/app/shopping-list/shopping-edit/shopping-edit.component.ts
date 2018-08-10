import {Component,OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/index";
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.action';
import * as fromApp from '../../store/app.reducers';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editedMode = false;
  editedItem: Ingredient;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList')
      .subscribe(
        data => {
          if (data.editedIngredientIndex > -1 ){
              this.editedItem = data.editedIngredient;
              this.editedMode = true;
              this.slForm.setValue({
              name: this.editedItem.name,
              amount: this.editedItem.amount
            });
          } else {
            this.editedMode = false;
          }
        }
      );
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngedient = new Ingredient(value.name, value.amount);
    if (this.editedMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ingredient: newIngedient}));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngedient));
    }
    this.editedMode = false;
    form.reset( );
}
  onReset() {
    this.slForm.reset();
  }
  onDelete() {
     this.store.dispatch(new ShoppingListActions.DeleteIngredient());
      this.onReset();
  }
  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }
}
