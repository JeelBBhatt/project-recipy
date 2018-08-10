import {Injectable} from "@angular/core";
import {RecipeService} from "../recipes/recipe.service";
import {Recipes} from "../recipes/recipe.model";
import {map} from "rxjs/internal/operators";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes() ;
    return this.httpClient.put('https://angular-http-request-c6748.firebaseapp.com/recipes/xt6zztekVPJlmZ99LKiz.json', recipes);
  }
  getRecipes() {
     this.httpClient.get<Recipes[]>('https://angular-http-request-c6748.firebaseapp.com/recipes/xt6zztekVPJlmZ99LKiz.json')
       .pipe(map(
         (recipes) => {
         for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
         }
         return recipes;
       })
       )
      .subscribe(
        (recipe: Recipes[] ) => {
          this.recipeService.setRecipes(recipe);
        }
      );
  }
}
