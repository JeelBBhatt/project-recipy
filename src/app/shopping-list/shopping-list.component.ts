import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/index";
import {Ingredient} from '../shared/ingredient.model';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from './store/shopping-list.action';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
      this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}