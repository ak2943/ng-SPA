import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './HomeApp.homecomponent';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about', loadChildren: () => import('../about/about.module').then(m => m.AboutAppModule)},
  {path:'service', loadChildren: () => import('../service/service.module').then(m => m.ServiceAppModule)},
  {path:'contact', loadChildren: () => import('../contact/contact.module').then(m => m.ContactAppModule)},
  {path:'login', loadChildren: () => import('../login/login.module').then(m => m.LoginAppModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
