import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.LoginComponent';


@NgModule({
  declarations: [
   LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  bootstrap: [LoginComponent]
})
export class LoginAppModule { }
