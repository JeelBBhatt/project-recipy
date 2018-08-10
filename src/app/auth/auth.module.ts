import {NgModule} from "@angular/core";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations : [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule
  ]
})
export class AuthModule {

}
