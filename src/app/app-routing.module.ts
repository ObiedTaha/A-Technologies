import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadComponent:()=>import('./pages/components/sidesection/sidesection.component').then(c=>c.SidesectionComponent)},
  {path:'checkBox',loadComponent:()=>import('./pages/components/check-box/check-box.component').then(c=>c.CheckBoxComponent)},
  {path:'choosehome',loadComponent:()=>import('./pages/components/choose-home/choose-home.component').then(c=>c.ChooseHomeComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


} 
