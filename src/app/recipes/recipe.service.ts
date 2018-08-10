import {Recipes} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs/index";

@Injectable()
export class RecipeService {
  recipesChnage =  new Subject<Recipes[]>();
  recipes: Recipes[] = [
    new Recipes('Test1', 'testing purpose',
      'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3DN9u99OOY&w=800&q=85',[
      new Ingredient('Salt', 10),
        new Ingredient('Frech Fries', 20)
    ]),
    new Recipes('Test2',
      'testing purpose',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',[
        new Ingredient('Rice', 10),
        new Ingredient('Frech Fries', 20)
      ])
  ];

  constructor() { }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  addRecipe(recipe: Recipes) {
      this.recipes.push(recipe);
      this.recipesChnage.next(this.recipes.slice());
  }
  updateRecipe(index: number, newrecipe: Recipes) {
      this.recipes[index] =  newrecipe;
    this.recipesChnage.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChnage.next(this.recipes.slice());
  }
  setRecipes(recipes: Recipes[]) {
    this.recipes = recipes;
    this.recipesChnage.next(this.recipes.slice());
  }
}
