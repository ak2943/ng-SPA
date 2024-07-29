import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.ContactComponent';


@NgModule({
  declarations: [
   ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule
  ],
  bootstrap: [ContactComponent]
})
export class ContactAppModule { }
