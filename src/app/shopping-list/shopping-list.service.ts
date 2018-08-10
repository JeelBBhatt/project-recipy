import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/index";


export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  editList = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 2),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Banana', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
}
