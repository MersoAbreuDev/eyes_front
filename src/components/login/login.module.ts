import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { PrimeModule } from "src/shared/prime.module";

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      CommonModule,
      LoginRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      PrimeModule
    ],
    exports:[
        LoginComponent
    ]
  })
  export class LoginModule { }