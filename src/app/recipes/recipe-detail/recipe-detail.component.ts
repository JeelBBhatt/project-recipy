import {Component, OnInit} from '@angular/core';
import {Recipes} from '../recipe.model';
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Store} from '@ngrx/store';
import * as ShoppingListAction from "../../shopping-list/store/shopping-list.action";
import * as fromApp from '../../store/app.reducers';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipes;
  id: number;
  constructor(private recipeService: RecipeService,
              private  route: ActivatedRoute ,
              private  router: Router,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe(
    (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
    });
  }
  onAddToShoppinglist() {
    this.store.dispatch(new ShoppingListAction.AddIngredients(this.recipe.ingredients));
  }
  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
