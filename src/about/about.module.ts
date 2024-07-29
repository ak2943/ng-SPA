import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about.aboutcomponent';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
   AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    FormsModule
  ],
  bootstrap: [AboutComponent]
})
export class AboutAppModule { }
