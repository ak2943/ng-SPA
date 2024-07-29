import { NgModule } from '@angular/core';
import { ServiceRoutingModule } from './service-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.ServiceComponent';


@NgModule({
  declarations: [
   ServiceComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    FormsModule
  ],
  bootstrap: [ServiceComponent]
})
export class ServiceAppModule { }
