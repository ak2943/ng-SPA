import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './HomeApp-routing.module';
import { Mastercomponent } from './HomeApp.Mastercomponent';
import { HomeComponent } from './HomeApp.homecomponent';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Mastercomponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [Mastercomponent]
})
export class HomeAppModule { }
