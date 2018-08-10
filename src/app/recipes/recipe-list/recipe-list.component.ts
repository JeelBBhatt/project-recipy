import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipes} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipes[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChnage.subscribe(
      (recipes: Recipes[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe() {
      this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
